export default () => 
    (
        {
                type: "input",
                name: "port",
                message: "set port name",
                default() {
                    return 8080;
                }
        }
    )