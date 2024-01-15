  import express, { Application } from 'express'
  import routerPersonas from '../routes/persona.routes';
  import connection from '../db/connection';
  import cors from 'cors';
//work branch
  class Server {
    private app: Application;
    private port?: number;

    constructor(){
      console.log('PORT from process.env:', process.env.PORT);
      this.app = express();
      const portString = process.env.PORT || '4500';
      this.port = parseInt(portString, 10);
      this.middelwares()
      this.routes();
      this.connectionDb();
    }
    
    listen(){
      this.app.listen( this.port, ()=>{
        //console.log('Loaded environment variables:', process.env);
        console.log('Application correndo por el puerto', this.port)
      })
    }

    routes(){
      this.app.use('/api/personas', routerPersonas)
    }
    //extracts json data and makes it available in HTTP req.body. Create body
    middelwares(){
      //send body
      this.app.use(express.json())
      this.app.use(cors())
    }

    connectionDb(){
      connection.connect(
        (err) => {
          if(err) {
            throw err;
            console.log('Erro ao conectar a base de dados')
          }
        }
      )
    }
  }

  export default Server;