import express from "express"
import ngrok from "@ngrok/ngrok"
import cors from "cors"
import "dotenv/config"
import route from "./route/Route.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use(route)

async function connectNgrok() {
	const forwarder = await ngrok.forward({
		addr: 3000,
		authtoken_from_env: true,
	});
  return forwarder.url()
}

app.listen(3000,() => {
  connectNgrok().then(res => console.log(res))
  console.log("Server is running on port 3000")
})