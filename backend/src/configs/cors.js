import fastifyPlugin from "fastify-plugin"

async function corsConfigs(server) {
  server.register(require("@fastify/cors"), {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
}

export default fastifyPlugin(corsConfigs)
