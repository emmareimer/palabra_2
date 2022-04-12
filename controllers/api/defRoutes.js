const router = require("express").Router();
const { response } = require("express");
const { WordOfDay, Note, User } = require("../../models"); // update
const axios = require('axios');
require('dotenv').config();

//cureent route /api/def/

router.get("/:word", async (req, res) => {
  const key = process.env.dict;
  const word = req.params.word;
    try {
      const definition = await axios.get("https://www.dictionaryapi.com/api/v3/references/collegiate/json/" +
      word +
      "?key=" +
      key, {
        maxRedirects: 15,
      }
      )
    if (!definition) {
        throw "no data returned from MW";
      }
      res.status(200).json({gotMeta: definition.data[0].shortdef[0],
      article: definition.data[0].fl});
} catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
