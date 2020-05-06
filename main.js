const btn = document.querySelector('button');

const URLs = ['https://www.youtube.com/watch?v=ou_oYzY4hNk&feature=emb_rel_pause',
    'https://www.youtube.com/watch?v=hOrTU2NNDVQ'];

btn.addEventListener('click', (event) => {
    const isYes = confirm('random？');

    if(isYes){
        const random = Math.floor(Math.random()*URLs.length);
        const win = window.open(`${URLs[random]}`);
        win.focus();
    }
});