import ejs from 'ejs'
import fs from 'fs'

export default (config) => {    

    const template = fs.readFileSync("./template/index.ejs");

    const code = ejs.render(template.toString(),{
        middleware: config.middleware,
    });
     return code;
}
