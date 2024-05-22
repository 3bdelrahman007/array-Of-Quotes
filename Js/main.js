var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
}


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


function addQuote(){
    var Quotes = {

        author : author.value,
        quote : quote.value,
    }

    arrayOfQuotes.push(Quotes)
    clear()
    console.log(arrayOfQuotes);

}

function clear() {
    author.value = ""
    quote.value = ""
}