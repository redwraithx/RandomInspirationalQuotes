//import inspirationalList from './InspirationalQuotesData.js';

//import inspirationalList from './InspirationalQuotesData.js';




const init = () => {
    const totalQuotes = inspirationalList.length;

    const randomIndex = Math.floor(Math.random() * totalQuotes);

    const randomQuote = inspirationalList[randomIndex];

    const messageArea = document.getElementById('messageArea');

    messageArea.textContent = randomQuote;
};


init();