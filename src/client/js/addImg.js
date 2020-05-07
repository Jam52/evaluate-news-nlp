const neutral = require('../views/img/img-neutral.jpg');
const negative = require('../views/img/img-negative.jpg');
const positive = require('../views/img/img-positive.jpg');
const thumbUp = require('../views/img/img-thumb-up.jpg');
const thumbDown = require('../views/img/img-thumb-down.jpg');
const noResult = require('../views/img/img-no-result.jpg');


const addImg = {
    setImg: (img, alt, src) => {
        const imgToUpdate = img;
        imgToUpdate.alt = alt;
        imgToUpdate.src = src;
    },

    getImg: (img) => {
        switch(img){
            case 'positive':
                return positive;
            case 'negative':
                return negative;
            case 'neutral':
                return neutral;
            default:
                return noResult;
        }
    }
}

export {
    addImg
}