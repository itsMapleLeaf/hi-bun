import { serve } from "bun"

const port = Number(process.env.PORT) || 3000

const server = serve({
  port: port,
  fetch(request: Request) {
    return new Response("hi from bun", { status: 200 })
  },
})

console.info(`Server running on http://localhost:${server.port}`)
