//import inspirationalList from './InspirationalQuotesData.js';

//import inspirationalList from './InspirationalQuotesData.js';




const init = () => {
    const randomQuote = dataObject.getRandomSentence();

    const messageArea = document.getElementById('messageArea');

    messageArea.textContent = randomQuote;
};


init();