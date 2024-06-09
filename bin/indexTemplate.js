import ejs from 'ejs'
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

export default (config) => {    
    const __dirname = fileURLToPath(import.meta.url);

    const template = fs.readFileSync(path.resolve(__dirname,"../template/index.ejs"));

    const code = ejs.render(template.toString(),{
        middleware: config.middleware,
    });
     return code;
}
