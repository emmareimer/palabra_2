const router = require("express").Router();
const { WordOfDay, Note, User } = require("../../models"); // update

//current route api/word/

// GET all Words (and data) - for testing only - to be removed for prod
router.get("/", async (req, res) => {
  try {
    const wordData = await WordOfDay.findAll();
    res.status(200).json(wordData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Word for WOD use
router.get("/:id", async (req, res) => {
  try {
    const curDay = req.params.id;
    const wordData = await WordOfDay.findByPk(curDay, {     
    });

    if (!wordData) {
      res.status(404).json({ message: "No Word for this day!" });
      return;
    }
    res.status(200).json(wordData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
