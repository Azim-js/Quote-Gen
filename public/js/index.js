// Collection Of Quote
const quotes = [{
    quote: `Believing you’re a good person and actually being one are two completely different things.`,
    author: `- Anonymous`
}, {
    quote: `Be a good person. But don’t waste time proving it.`,
    author: `- Anonymous`
}, {
    quote: `Success to me is being a good person, treating people well.`,
    author: `- David LaChapelle`
}, {
    quote: `If everyone were a good person, it’d obviously be a better world.`,
    author: `- Aaron Paul`
}, {
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    author: `- Muhammad Waseem`
}, {
    quote: `How you look at it is pretty much how you'll see it`,
    author: `- Steve Jobs`
}, {
    quote: `I am more worried about being a good person than being the best football player in the world.`,
    author: `- Lionel Messi`
}, {
    quote: `I am even thankful for the negative things that have made me a stronger and better person.`,
    author: `- Joanna Krupa`
}, {
    quote: `I thank my mom... I thank God for my mom every day because I think if it wasn't for her, who knows?`,
    author: `- Joanna Krupa`
}, {
    quote: `When trouble comes, focus on God's ability to care for you.`,
    author: `- Charles Stanley`
}, {
    quote:`Do nothing but good.`,
    author:`- Anonymous `
}]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})