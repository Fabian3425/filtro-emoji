let emojisList = [
    { "alias": "angel", "unicode": "👼"},
    { "alias": "angry", "unicode": "😠"},
    { "alias": "apple", "unicode": "🍎"},
    { "alias": "astonished", "unicode": "😲"},
    { "alias": "cold_face", "unicode": "🥶"},
    { "alias": "cold_sweat", "unicode": "😰"},
    { "alias": "computer", "unicode": "💻"},
    { "alias": "confounded", "unicode": "😖"},
    { "alias": "confused",  "unicode": "😕"},
  ];

let inputEmoji = document.querySelector('#buscador');
let pResultado = document.querySelector('#result-emoji');

inputEmoji.addEventListener('input', filterEmoji);


function filterEmoji(){
    emojisList.filter(emoji => {
        if(inputEmoji.value == emoji.alias){
            let emojiResult = emoji.unicode;
            pResultado.innerText = emojiResult;
        }
    });
}

