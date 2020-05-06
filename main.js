const btn = document.querySelector('button');

const URLs = ['https://www.youtube.com/watch?v=ony539T074w',
    'https://www.youtube.com/watch?v=LIlZCmETvsY',
    'https://www.youtube.com/watch?v=MSv7NbfbtU8',
    'https://www.youtube.com/watch?v=RLAw8Ct9k48',
    'https://www.youtube.com/watch?v=XDiuwqJg8pU'];

btn.addEventListener('click', (event) => {
    const isYes = confirm(`${URLs.length}曲からランダムに選ばれます`);

    if(isYes){
        const random = Math.floor(Math.random()*URLs.length);
        const win = window.open(`${URLs[random]}`);
        win.focus();
    }
});