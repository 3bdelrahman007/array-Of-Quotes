var icon = document.getElementById("icon");

var isDarkMode = localStorage.getItem("darkMode") === "true";
document.body.classList.toggle("dark-mode", isDarkMode);

icon.onclick = function(){
    var isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
};


var arrayOfQuotes = [
    {
        author : "Oscar Wilde",
        quote : "“Be yourself; everyone else is already taken.”"
    },
    {
        author : "Marilyn Monroe",
        quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
    },
    {
        author : "Frank Zappa",
        quote : "“So many books, so little time.”"
    },
    {
        author : "Albert Einstein",
        quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        author : "Mark Twain",
        quote : "“If you tell the truth, you don't have to remember anything.”"
    },
    {
        author : "Marcus Tullius Cicero",
        quote : "“A room without books is like a body without a soul.”"
    },
    {
        author : "Robert Frost",
        quote : "“In three words I can sum up everything I've learned about life: it goes on.”"
    },
    {
        author : " Bernard M. Baruch",
        quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
    },
    {
        author : "Dr. Seuss",
        quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
    },
    {
        author : "Mae West",
        quote : "“You only live once, but if you do it right, once is enough.”"
    },
    {
        author : "Mahatma Gandhi",
        quote : "“Be the change that you wish to see in the world.”"
    },
    
];


var lastRandomIndex = null;

function showQuotes() {
    var randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);

    while (randomIndex === lastRandomIndex) {
        randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    }

    lastRandomIndex = randomIndex;

    document.getElementById('displayQuote').textContent = `"${arrayOfQuotes[randomIndex].quote}"`;
    document.getElementById('displayAuthor').textContent = `-- ${arrayOfQuotes[randomIndex].author}`;

}


var quote = document.getElementById("quote")
var author = document.getElementById("author")


window.onload = function() {   

    var savedQuotes = JSON.parse(localStorage.getItem('quotes'));

    if(savedQuotes) {
        arrayOfQuotes = savedQuotes;
    }

}

function addQuote(){

    var quoteText = quote.value;
    var quoteAuthor = author.value;

    if(quoteText && quoteAuthor) {

        var newQuote = {
            author: quoteAuthor,
            quote: quoteText
        };

        arrayOfQuotes.push(newQuote);
        localStorage.setItem('quotes', JSON.stringify(arrayOfQuotes));

        clear();

    } else {
        alert('Please enter both quote and author before adding!');
    }
}


function clear() {
    author.value = ""
    quote.value = ""
}