#!/usr/bin/env node

/**
 * 1. 确保服务器已安装 nodejs，rsync, yarn, 确保目标服务器git仓库地址正确
 * 2. 确保目标路径及目标备份路径在服务器存在
 * 3. 确保本地 sshkeyPath 有 ssh 密钥，并且已在目标服务器注册
 * 4. 确保服务器所使用的端口已配置好外网访问
 */

const { exec } = require("child_process");
const targetUrl = "ubuntu@129.204.193.196";
const sshKeyPath = "~/.ssh/id_rsa";
const app = require("./package.json").name;

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

// 运行远程命令
const bashOrigin = (url, sshkey, code) => {
  const orignShell = `
ssh -i ${sshkey} ${url} 2>&1 << eeooff
  ${code}
eeooff
  `;
  return bash(orignShell);
};

const deploy = async () => {
  await bash(`yarn build`);
  await bash(
    `rsync -a --progress --delete .next --exclude ".next/cache" ubuntu@129.204.193.196:~/service/${app}`
  );
  await bash(
    `rsync -a --progress --delete --exclude "src" --exclude ".git" --exclude ".gitignore" --exclude ".env.local" --exclude ".next" --exclude "deploy_ecs.js" --exclude "node_modules" --exclude ".serverless" --exclude "flutter_project" --exclude "cjs" --exclude "out" ./* ubuntu@129.204.193.196:~/service/${app}`
  );
  await bashOrigin(
    targetUrl,
    sshKeyPath,
    `
    mkdir -p ~/service/${app}
    cd ~/service/${app}
    yarn
    pm2 delete ${app} || {}
    pm2 start --name ${app} -i 0 npm -- start
  `
  );

  // console.log("wait 1500ms... run: pm2 ls");
  // await new Promise((res) => setTimeout(res, 1500));
  // await bashOrigin(targetUrl, sshKeyPath, "pm2 ls");
};

deploy();
