import axios from "axios"

class HelloWorldService{
    executeHelloWorldService(name){

        let username = 'admin'
        let password = 'admin'

        let basicAuthHeader = 'Basic '+ window.btoa(username+ ":" +password)
        // console.log("HelloWorldService executed..")

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()