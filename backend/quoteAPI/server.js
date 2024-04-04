const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/api/quotes/random', (req, res) => {
    const randomQuote = getRandomElement(quotes);
    res.send({ quote: randomQuote });
});

app.get('/api/quotes', (req, res) => {
    if (req.query.person) {
        const quotesByPerson = quotes.filter(quote => quote.person === req.query.person);
        res.send({ quotes: quotesByPerson });
    } else {
        res.send({ quotes: quotes });
    }
});

app.put('/api/quotes/:id', (req, res) => {
    const quoteId = Number(req.params.id);
    const quoteText = req.query.quote;
    const quotePerson = req.query.person;
    if (quoteId && quoteText && quotePerson) {
        quotes[quoteId] = { quote: quoteText, person: quotePerson };
        res.send({ quote: quotes[quoteId] });
    } else {
        res.status(400).send();
    }
});

app.post('/api/quotes', (req, res) => {
    const newQuote = req.query;
    if (newQuote.quote && newQuote.person) {
        quotes.push(newQuote);
        res.send({ quote: newQuote });
    } else {
        res.status(400).send();
    }
});




