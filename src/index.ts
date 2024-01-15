import Server from "./models/server";
import dotenv from 'dotenv';

//configuramos dotenvt
dotenv.config();

const server = new Server();
server.listen();