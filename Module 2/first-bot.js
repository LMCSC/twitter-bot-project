console.log("Bot started!")

// Import Twit package
var twit = require("twit")

// Authentication
var t = new twit({
  consumer_key:        '...',
  consumer_secret:     '...',
  access_token:        '...',
  access_token_secret: '...',
})

// Basic tweet
t.post(
  "statuses/update",
  { status: "Testing..." },
  function(err, data, resp) { if (err) console.log("Error") }
)

// To be used later...
// var type = "statuses/update"
// var tweet = { status: "..." }
// function tweeted(err, data, resp) {
//   if (err) {
//     console.log("Error!")
//   } else {
//     console.log("Success!")
//   }
// }
// t.post(type, tweet, tweeted)
