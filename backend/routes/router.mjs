import express from 'express'

import {getWebController} from '../controllers/getWebController.mjs'
import {updateWebController} from '../controllers/updateWebController.mjs'
import {createWebController} from '../controllers/createWebController.mjs'
import {deleteWebController} from '../controllers/deleteWebController.mjs'

const router = express.Router();

router.post('/getResult', getWebController);
router.post('/updateResult', updateWebController);
router.post('/createWeb', createWebController);
router.post('/deleteWeb', deleteWebController);

export {router};
