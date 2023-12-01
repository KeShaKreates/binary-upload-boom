

module.exports = {
    getHome: ("/home", (req, res) => {
      fetch("https://zenquotes.io/api/today")
        .then((response) => response.json())
        .then((data) => {
          const quote = data[0].q; // Extract the quote
          const author = data[0].a; // Extract the author
          // Render the home.ejs template and pass the quote and author as data
          res.render("home", { quote, author });
          })
      .catch((error) => {
        console.error("Error fetching Zen quote:", error);
        res.status(500).send("Error fetching Zen quote");
      });
    }),

  };
