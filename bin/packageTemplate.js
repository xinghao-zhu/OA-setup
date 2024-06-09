import ejs from 'ejs'
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

export default (config) => {
    const __dirname = fileURLToPath(import.meta.url);
    const template = fs.readFileSync(path.resolve(__dirname,"../template/package.ejs"));
    return ejs.render(template.toString(),{
        packageName: config.packageName,
        middleware: config.middleware
    })
}