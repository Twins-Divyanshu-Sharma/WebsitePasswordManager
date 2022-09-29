import {getWeb} from '../services/db_service.mjs';

const getWebController = async (req, res) => {


    let n = req.body.site;

    await getWeb(n).then(info=>{
        res.status(200).json(info);
    }).catch(error=>{
        res.status(500).json(error);
    });

}

export {getWebController}
