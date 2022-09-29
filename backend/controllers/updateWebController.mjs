import {updateWeb} from '../services/db_service.mjs';

const updateWebController = async (req, res) => {
    let s = req.body.site;

    let p = req.body.password;

    await updateWeb(s,p);
    

}

export {updateWebController}
