const Journal = require("../models/Journal");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const journals = await Journal.find({ user: req.user.id });
      res.render("profile.ejs", { journals: journals, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getJournal: async (req, res) => {
    try {
      const journal = await Journal.findById(req.params.id);
      res.render("profile.ejs", { journal: journal, user: req.user});
    } catch (err) {
      console.log(err);
    }
  }, 
  createJournal: async (req, res)=>{
        try{
            await Journal.create({
                title: req.body.title,
                description: req.body.description,
                user: req.user.id,
            });
            console.log('Journal entry has been added!');
            res.redirect('/profile');
        }catch(err){
            console.log(err);
        }
    }
}
