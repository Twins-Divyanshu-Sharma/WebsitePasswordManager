import {deleteWeb} from '../services/db_service.mjs';

const deleteWebController = async (req, res) => {
    let site = req.body.site;

    await deleteWeb(site);
}

export {deleteWebController}
