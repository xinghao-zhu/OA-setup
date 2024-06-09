import fs from "fs";
import indexTemplate from "./indexTemplate.js";
import question from "./question/index.js";
import config from "./config.js";
import packageTemplate from "./packageTemplate.js";


const rootPath = "./hello";
const answer = await question();
const inputConfig = config(answer);

fs.mkdirSync("./hello");

fs.writeFileSync(`${rootPath}/index.js`,indexTemplate(inputConfig));

fs.writeFileSync(`${rootPath}/package.json`, packageTemplate(inputConfig));



