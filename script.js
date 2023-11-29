var ratings = {};
var author;

function rateQuote(author, rating) {
    ratings[author] = rating;
}

function generate() {
    var quotes = {
        "- Michelangelo": '"I saw the angel in the marble and carved until I set him free."',
        "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
        "- Mae West": '"You only live once, but if you do it right, once is enough."',
        "- Stephen King": '"Get busy living or get busy dying."',
    }

    var authors = Object.keys(quotes);

    author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

    var rating = ratings[author];
    if (rating) {
        document.getElementById("rating").innerHTML = "Rating: " + rating;
    } else {
        document.getElementById("rating").innerHTML = "Not rated yet";
    }
}

document.getElementById('rating-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!author) {
        alert("Please generate a quote before rating.");
        return;
    }
    var rating = document.querySelector('input[name="rating"]:checked').value;

    rateQuote(author, rating);

    alert("You rated the quote by " + author + " a " + rating + "/5.");

    generate();
});

function showRatings() {
    var ratingsString = "";
    for (var author in ratings) {
        ratingsString += "Quote by " + author + ": " + ratings[author] + "/5\n";
    }
    alert(ratingsString);
}

document.getElementById('rating-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!author) {
        alert("Please generate a quote before rating.");
        return;
    }
    var rating = document.querySelector('input[name="rating"]:checked').value;

    rateQuote(author, rating);

    alert("You rated the quote by " + author + " a " + rating + "/5.");

    generate();

    if (Object.keys(ratings).length === Object.keys(quotes).length) {
        showRatings();
    }
});