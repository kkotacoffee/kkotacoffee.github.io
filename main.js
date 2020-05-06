const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
    const isYes = confirm('random？');

    if(isYes){
        console.log(location.href);
        location.href = 'https://www.youtube.com/watch?v=ou_oYzY4hNk&feature=emb_rel_pause';
    }
});