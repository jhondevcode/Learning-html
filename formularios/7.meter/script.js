function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function count() {
    let met = document.getElementById('met');
    for (let i = 1; i <= 100; i++) {
        sleep(1000).then(()=> {
            met.setAttribute('value', i);
        });
    }
}

window.addEventListener('load', count());
