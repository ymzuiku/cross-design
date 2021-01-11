#!/usr/bin/env node

const { resolve } = require("path");
const crypto = require("crypto");
const pwd = (...args) => resolve(process.cwd(), ...args);
const argv = process.argv.splice(2);
const { exec } = require("child_process");
const fs = require("fs-extra");
const UglifyJS = require("uglify-js");

// 运行本地命令
const bash = (code) => {
  return new Promise((res) => {
    exec(code, (err, stdout, stderr) => {
      console.log(stdout, stderr);
      if (err) {
        throw err;
      }
      res(stdout);
    });
  });
};

async function start() {
  await bash("yarn lib");
  console.log('tsc done.');

  const files = [];
  const readFiles = (p) => {
    const dir = fs.readdirSync(p);
    dir.forEach((file) => {
      const stat = fs.statSync(pwd(p, file));
      if (stat.isDirectory()) {
        readFiles(p + "/" + file);
      } else if (file.indexOf(".js") > 0) {
        files.push(pwd(p, file));
      }
    });
  };

  readFiles("./cjs");

  files.forEach((f) => {
    fs.writeFileSync(
      f,
      UglifyJS.minify(
        {
          [f]: fs.readFileSync(f, "utf8"),
        },
        {}
      ).code,
      "utf8"
    );
  });

  console.log('UglifyJS done.');

  fs.copyFileSync("./package.json", "./cjs/package.json");
  fs.copyFileSync("./README.md", "./cjs/README.md");
  console.log('package.json done.');

  // await bash("cd cjs && nrm use npm && npm publish --access public");
  // console.log('npm-publish done.');

}

start();
