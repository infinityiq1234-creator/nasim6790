const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/corseController');

router.post("/", ctrl.addContent);
router.get("/", ctrl.viewContent);
router.get("/:id", ctrl.viewoneContent);
router.put("/:id", ctrl.updateContent);
router.delete("/:price", ctrl.deleteoneContent);

module.exports = router;