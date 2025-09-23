import { Server } from "http"
import app from "./app"
import config from "./config"





async function main() {
 const server : Server = app.listen(config.port, () => {
        console.log(`ph-healthcare-server is running on port ${config.port}`)
    })
}

main()