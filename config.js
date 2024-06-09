export default (answer) => {

    function hasName(name) {
        return answer.middleware.indexOf(name) !== -1
    }
    return  {
        packageName: answer.packageName,
        port: answer.port,
        middleware: {
            static: hasName("koaStatic"),
            router: hasName("koaRouter"),
        }
    }
}