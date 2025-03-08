import fastifyPlugin from "fastify-plugin"
import cors from "@fastify/cors"

async function corsConfigs(server) {
  server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
}

export default fastifyPlugin(corsConfigs)
