const Author = require("../models/Author.model");

const router = require("express").Router();

//READ: List all authors
router.get("/authors", (req, res, next) => {
  Author.find()
    .then((authors) => {
      res.render("authors/authors-list", { authors });
    })
    .catch((err) => {
      console.log("Error getting authors from DB...", err);
      next(err);
    });
});
//CREATE: display form
router.get("/authors/create", (req, res, next) => {
  res.render("authors/authors-create");
});

router.post("/authors/create", (req, res, next) => {
   
    const authorData = {
        name: req.body.name,
        age: req.body.age,
        country: req.body.country        
    }

    Author.create(authorData)
    .then( newAuthor => {
        res.redirect("/authors")
    })
    .catch((err) => {
        console.log("Error getting authors from DB...", err);
        next(err);
      });



  });

module.exports = router;
