function generate() {
    var quotes = {
        "- Michelangelo": '"I saw the angel in the marble and carved until I set him free."',
        "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
        "- Mae West": '"You only live once, but if you do it right, once is enough."',
        "- Stephen King": '"Get busy living or get busy dying."',
    }

    var authors = Object.keys(quotes); // returns an array of keys

    var author = authors[Math.floor(Math.random() * authors.length)]; // random key from authors array
    //console.log(authors);

    var quote = quotes[author]; // value of the random key

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}