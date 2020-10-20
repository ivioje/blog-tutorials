let generate = document.getElementById('generate')
let showQuotes = document.getElementById('showquotes')
let changeTheme = document.getElementById('content')

let quotes = [
  'Push yourself, because no one else is going to do it for you.',
  'Great things never come from comfort zones.',
  "Success doesn't just find you. You have to go out and get it.",
  'Sometimes later becomes never. Do it now.',
  'Dream it. Wish it. Do it.',
  "The harder you work for something, the greater you'll feel when you achieve it.",
  'Dream bigger. Do bigger.',
  'Do something today that your future self will thank you for.',
  "Don't let yesterday take up too much of today",
  "It's not whether you get knocked down, it's whether you get up!",
  'Failure will never overtake me if my determination to succeed is strong enough',
  'We may encounter many defeats but we must not be defeated',
  'We generate fears while we sit, we overcome them by action',
  "Whether you think you can or think you can't, you're right"
]

generate.addEventListener('click', function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  showQuotes.innerHTML = randomQuote
});

changeTheme.addEventListener('click', function () {
changeTheme.style.backgroundColor = "#020406";
changeTheme.style.color = 'white';
})
