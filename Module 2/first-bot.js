console.log("Bot started!")

var twit = require("twit")

var t = new twit({
  consumer_key:        '...',
  consumer_secret:     '...',
  access_token:        '...',
  access_token_secret: '...',
})

t.post(
  "statuses/update",
  { status: "Testing..." },
  function(err, data, resp) { if (err) console.log("Error") }
)

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
