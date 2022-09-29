import express from 'express'
import cors from 'cors'
import history from 'connect-history-api-fallback'
import {router} from './routes/router.mjs'
import {connect} from './services/db_service.mjs'

let vue_port = process.env.VUE_PORT;
let node_port = process.env.NODE_PORT;


const expressApp = express();
expressApp.use(cors({
    origin: "http://localhost:" + vue_port,
}));
const hist = history();
expressApp.use(hist);

connect();


expressApp.use(express.json());
expressApp.use('/', router);

expressApp.listen(node_port);

