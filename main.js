const btn1 = document.querySelector('.juke');
const btn2 = document.querySelector('.gps');

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

btn2.addEventListener('click', (gps) => {
    const isYes = confirm('位置情報ください');

    if(isYes){
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
});

function geoSuccess(position){
    const lat = position.coords.latitude;

    const lng = position.coords.longitude;

    const state = `https://fukuno.jig.jp/app/printmap/latlngmap.html#15/${lat}/${lng}/&base=std&ls=std&disp=1&vs=c1j0l0u0f1`;
    const win = window.open(`${state}`);
    win.focus();
}

function geoError(){
    alert('Geolocation Error');
}