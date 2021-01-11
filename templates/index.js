#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const pwd = (...args) => path.resolve(process.cwd(), ...args);
const argv = process.argv.splice(2);

fs.mkdirpSync("./", pwd(argv[0]));
fs.copySync(pwd("templates", argv[0]), pwd(argv[1]));
const argvSlash = argv[1].split("/");
const name = argv[2] || argvSlash[argvSlash.length - 1];

const dir = fs.readdirSync(pwd(argv[1]));
dir.forEach((v) => {
  const p = pwd(argv[1], v);
  console.log("create:", p);

  let file = fs.readFileSync(p, { encoding: "utf-8" });
  file = file.replace(/argv_2/g, name);
  fs.writeFileSync(p, file);
});
