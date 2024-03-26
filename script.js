let quote = document.getElementById('quote');
let author = document.getElementById('authorName');
let spacing = '                                                                                                 ';

async function getQuote(){
    let apiUrl = 'https://api.quotable.io/quotes/random';
    let data = await fetch(apiUrl);
    data = await data.json();
    
    quote.textContent = data[0].content;
    author.textContent = data[0].author;
}

function tweet(){
    let quoteText = quote.textContent;
    let authorText = author.textContent;
    let url = `https://twitter.com/intent/tweet?text=${quoteText} ${spacing}-${authorText}`;
    window.open(url, 'Tweet window', 'width=600px, height=200px');
};

getQuote();