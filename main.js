const STOP_WATCH = document.getElementById('stop_watch');
const START = document.getElementById('start');
const STOP = document.getElementById('stop');
const RESET = document.getElementById('reset');

let hour = 0;
let minutes = 0;
let seconds = 0; 
let miliseconds = 0;

let stopWatch = () => {
    miliseconds++;
    if (seconds != 0 && seconds % 60 === 0) {
    minutes++;
    seconds = 0;
    }
    if (miliseconds % 10 === 0) {
    seconds++;
    miliseconds = 0;
}

STOP_WATCH.innerHTML = ('00' + hour).slice(-2) + ':' + ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2) + ':' + ('00' + miliseconds).slice(-2);
}

let interval;

START.addEventListener('click' , () => {
    interval = setInterval(stopWatch, 100);
    START.disabled = true;
    STOP.disabled = false;
    RESET.disabled = true;
})

STOP.addEventListener('click' , () => {
    clearInterval(interval);
    START.disabled = false;
    STOP.disabled = true;
    RESET.disabled = false;
})

RESET.addEventListener('click' , () => {
    STOP_WATCH.innerHTML = '00:00:00:00';
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    START.disabled = false;
    STOP.disabled = true;
    RESET.disabled = true;
})