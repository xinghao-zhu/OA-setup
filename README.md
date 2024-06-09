# OA-setup
基于node.js的cli工具 - 动态生成代码模块, 类似与vue create fileName

## 用法
- 下载完成之后输入```yarn``` 安装所有依赖, 根据script脚本内容输入```yarn test-g```生成一个 ```hello``` 文件夹
- 用户需要输入packageName，port,选择安装哪些依赖，之后代码会根据相关逻辑自动生成inde.js入口文件和package.json文件
- 在定位到hello文件后，输入```node index.js``` command就可以访问本地8080动态生成的代码页面

### 用到的npm库
1. ejs -> 根据可选内容去渲染
    https://www.npmjs.com/package/ejs
2. inquirer ->  命令行之后用户选择输入的内容
    https://www.npmjs.com/package/inquirer
3. execa -> 在脚本中用command去run
    https://www.npmjs.com/package/execa


### 步骤
1. 创建一个文件夹 hello 非自动
2. 创建一个入口文件 index.js
    - 创建 indexTemplate的模版内容
    - 确定哪些内容是根据用户输入内容进行变动
    - inputConfig是用户可选内容
3. 创建package.json
    - 创建 packageTemplate的模版内容
    - 确定哪些内容是根据用户输入内容进行变动
    - inputConfig是用户可选内容
4. 安装依赖
    - 引入execa来使用yarn自动安装
    - cwd是安装路径
    - stdio是安装进程