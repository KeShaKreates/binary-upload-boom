const Belief = require("../models/User");

module.exports = {
    getHealing: async (req, res) => {
      try {
        const beliefs = await Belief.find({ user: req.user.belief });
        res.render("healing.ejs", { beliefs: beliefs, user: req.user });
      } catch (err) {
        console.log(err);
      }
    },
    };
  

