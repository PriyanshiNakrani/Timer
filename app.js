document.addEventListener('DOMContentLoaded', function() {
    var ms = 0, s = 0, m = 0, h = 0;
    var timer;

    var display = document.querySelector('.timer-display');
    var laps = document.querySelector('.laps');

    document.getElementById('startTimer').addEventListener('click', start);
    document.getElementById('pauseTimer').addEventListener('click', pause);
    document.getElementById('resetTimer').addEventListener('click', reset);
    document.getElementById('lap').addEventListener('click', lap);
    document.getElementById('resetLap').addEventListener('click', resetLap);

    function start() {
        if (!timer) {
            timer = setInterval(run, 10);
        }
    }

    function run() {
        display.innerHTML = getTimer();
        ms++;
        if (ms == 100) {
            ms = 0;
            s++;
        }
        if (s == 60) {
            s = 0;
            m++;
        }
        if (m == 60) {
            m = 0;
            h++;
        }
    }

    function getTimer() {
        return (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
    }

    function pause() {
        stopTimer();
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    function reset() {
        stopTimer();
        ms = 0;
        s = 0;
        m = 0;
        h = 0;
        display.innerHTML = getTimer();
    }

    function lap() {
        var lapTime = document.createElement('li');
        lapTime.innerText = getTimer();
        laps.appendChild(lapTime);
    }

    function resetLap() {
        laps.innerHTML = '';
    }
});