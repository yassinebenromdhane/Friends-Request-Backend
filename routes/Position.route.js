const router = require('express').Router()
const positionCtrl = require('../controllers/Position.controller');

router.post("/",positionCtrl.postPosition)
router.get("/",positionCtrl.getAll)
router.get("/:id",positionCtrl.getOne)
router.delete("/:lat/:long",positionCtrl.deleteOne)
router.put("/:id",positionCtrl.updateOne)



module.exports = router