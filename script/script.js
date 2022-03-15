
const quoteElem = document.getElementById('quote');

function getQuote() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://thatsthespir.it/api`, true);

    xhr.onload = function () {

        if (this.status === 200) {

            const response = JSON.parse(this.responseText);
            const quote = response.quote;
            const author = response.author;

            quoteElem.innerHTML = quote + '<br><span class="author"> – ' + author + ' – </span>';


        } else {

            quoteElem.innerHTML = 'Sometimes there are errors...'

        }


    }

    xhr.send()

}

getQuote();