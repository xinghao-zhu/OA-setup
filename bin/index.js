#!/usr/bin/env node
import fs from "fs";
import {execa} from 'execa';
import indexTemplate from "./indexTemplate.js";
import question from "./question/index.js";
import config from "./config.js";
import packageTemplate from "./packageTemplate.js";


const rootPath = "./hello";
const answer = await question();
const inputConfig = config(answer);

console.log(inputConfig);

// 1. 创建文件夹
fs.mkdirSync(rootPath);

// 2. 创建入口文件 index.js
fs.writeFileSync(`${rootPath}/index.js`,indexTemplate(inputConfig));

// 3. 创建package.json
fs.writeFileSync(`${rootPath}/package.json`, packageTemplate(inputConfig));

// 4. 安装依赖
execa("yarn",{
    cwd: rootPath,
    stdio: [2,2,2],
})


