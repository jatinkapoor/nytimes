const router = require('express').Router();
const articleController = require('../../controllers/articleController');

router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(articleController.remove);

module.exports = router;
