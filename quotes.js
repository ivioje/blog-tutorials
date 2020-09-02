

let generate = document.getElementById('generate');
let showQuotes = document.getElementById('showquotes');
let quotes = [
    'Push yourself, because no one else is going to do it for you.',
      'Great things never come from comfort zones.',
      'Success doesn’t just find you. You have to go out and get it.',
      'Sometimes later becomes never. Do it now.',
      'Dream it. Wish it. Do it.',
      'The harder you work for something, the greater you’ll feel when you achieve it.',
      'Dream bigger. Do bigger.',
      'Do something today that your future self will thank you for.',
];

generate.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    showQuotes.innerHTML = randomQuote;
})
