const btn1 = document.querySelector('.juke');
const btn2 = document.querySelector('.title');

const isSupported = !!(
    'ontouchstart' in window ||
    (navigator.pointerEnabled && navigator.maxTouchPoints > 0)
);

if(isSupported){
    document.querySelector('.log').innerHTML = 'Smartphone or Touchable-PC';
}else{
    document.querySelector('.log').innerHTML = 'PC';
}

const URLs = ['https://www.youtube.com/watch?v=ony539T074w',
    'https://www.youtube.com/watch?v=LIlZCmETvsY',
    'https://www.youtube.com/watch?v=MSv7NbfbtU8',
    'https://www.youtube.com/watch?v=RLAw8Ct9k48',
    'https://www.youtube.com/watch?v=XDiuwqJg8pU'];

btn1.addEventListener('click', (juke) => {
    const isYes = confirm(`${URLs.length}曲からランダムに選ばれます`);

    if(isYes){
        const random = Math.floor(Math.random()*URLs.length);
        const win = window.open(`${URLs[random]}`);
        win.focus();
    }
});

btn2.addEventListener('click', (event) => {
    const msg = prompt('タイトルいれて','title');

    document.title = msg;
});

setInterval( () => {
    const parent = document.querySelector('.box');
    
    const child = document.querySelector('.del');

    parent.removeChild(child);
}, 5000);

function goToPage() {
    // 入力欄からURLを取得
    const path = document.getElementById("pathInput").value;
            
    // パスが空でないことを確認
    if (path) {
        // 相対パスで移動
        window.location.href = window.location.origin + '/' + path + '.html';
    } else {
        alert("相対パスを入力してください。");
    }
}