/* eslint-disable no-console */
import Fastify from 'fastify'
import c from 'picocolors'

const serve = Fastify({ logger: true })

serve.register(() => import ('@fastify/mongodb'), {
  forceClose: true,
  url: 'mongodb+srv://cluster19325.ajzihir.mongodb.net',
})

serve.get('/', async (request, reply) => {
  return { hello: 'world' }
})

async function run() {
  try {
    console.log(c.blue('Server listening on port 3000'))
    await serve.listen({ port: 3000 })
  }
  catch (error) {
    serve.log.error(error)
    process.exit(1)
  }
}

run()
