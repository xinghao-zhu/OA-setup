# OA-setup

基于node.js的cli工具 - 动态生成代码模块, 类似与vue create fileName

用户输入packageName,port, 是否安装某些依赖来动态生成代码模块

### 用到的npm库
1. ejs
2. inquirer
3. execa
4. execa

### 步骤

// fs 
import fs from 'fs'

1. 创建文件夹

fs.mkdirSync("./hello")
2. 创建入口文件 index.js

fs.wirteFileSync("./hello/index.js", "index")
3. 创建package.json

fs.wirteFileSync("./hello/package.json", "package")
4. 安装依赖