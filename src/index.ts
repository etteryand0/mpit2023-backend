import { ApolloServer } from "@apollo/server"
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import {expressMiddleware} from '@apollo/server/express4'
import { createContext } from "./context"
import { schema } from './schema'
import express from 'express'
import cors from 'cors'
import {json} from 'body-parser'
import fileUpload from 'express-fileupload'
import { join, extname } from "path"
import { nanoid } from "nanoid"
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { createServer } from "http";
import { pubsub } from "./context/pubsub";
import { applyMiddleware } from 'graphql-middleware'
import { permissions } from "./shield";

const app = express()

app.use(cors())

const httpServer = createServer(app)

const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/api/graphql',
})
const serverCleanup = useServer({ schema, context: async (ctx, msg, args) => {
  return {pubsub}
} }, wsServer);

const server = new ApolloServer({
  schema: schema,
  introspection: true,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    }
  ]
})

const run = async () => {
  await server.start()
  
  app.use('/api/graphql', cors(), json(), expressMiddleware(server, {
    context: createContext
  }))

  app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : process.env.TEMP_FILE_DIR 
  }))
  
  app.post('/api/upload', function(req: any, res) {
    if (!req.files) {
      return res.status(400).send('No file was uploaded.');
    }
  
    const file = req.files.file
    const filename = `${nanoid()}.${extname(file.name)}`
    const uploadPath = join(process.cwd(), 'uploads', filename)
  
    file.mv(uploadPath, (err) => {
      if (err) {
        return res.status(500).send(err)
      }
  
      return res.status(200).send(filename)
    })
  });

  httpServer.listen(4000, () => {
    console.log(`🚀  Server ready at: localhost:4000/api`)
  })
}

run()