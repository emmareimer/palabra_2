const router = require("express").Router();
const { WordOfDay, Note, User } = require("../../models"); // update
const axios = require('axios');

// current route /api/sim

router.get("/:word", async (req, res) => {
    const key = process.env.thea;
    const word = req.params.word;
    console.log(word);
      try {
        const similar = await axios.get("https://www.dictionaryapi.com/api/v3/references/thesaurus/json/" +
        word +
        "?key=" +
        key, {
          maxRedirects: 15,
        }
        )

        if (!similar) {
            throw "no data returned from MW";
          }

        if (typeof similar.data[0] != typeof "string") {
            res.status(200).json({ similarOne: similar.data[0].meta.syns[0][0],
            similarTwo: similar.data[0].meta.syns[0][1],
            similarThree: similar.data[0].meta.syns[0][2]
        });
          } else {
         res.status(200).json({oneWorder: similar.data[0],
            wordTwo: similar.data[1],
            wordThree: similar.data[2]
         })
          }
  } catch (err) {
        res.status(500).json(err);
      }
    });


module.exports = router;