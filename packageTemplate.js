import ejs from 'ejs'
import fs from 'fs'

export default (config) => {
    const template = fs.readFileSync("./template/package.ejs");
    return ejs.render(template.toString(),{
        packageName: config.packageName,
        middleware: config.middleware
    })
}