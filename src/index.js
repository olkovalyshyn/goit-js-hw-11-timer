import "./css/styles.css";

const refs = {
    daysEl: document.querySelector('span[data-value="days"]'),
    hoursEl: document.querySelector('span[data-value="hours"]'),
    minsEl: document.querySelector('span[data-value="mins"]'),
    secsEl: document.querySelector('span[data-value="secs"]')
}

class CountdownTimer {
    constructor({ targetDate, onTick }) {
        this.intervalId = null;
        this.targetDate = targetDate;
        this.onTick = onTick;
        this.start();
    };

    start() {
    this.intervalId = setInterval(() => {
        const currentDate = Date.now();
        const deltaDate = this.targetDate - currentDate;
        const time = this.getTimeComponents(deltaDate);

        this.onTick(time);
    }, 1000);    
    }    
    
    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }

    pad(value) {  
        return String(value).padStart(2, '0');
    };
}

function updateClockface({ days, hours, mins, secs }) {
    refs.daysEl.textContent = `${days}`;
    refs.hoursEl.textContent = `${hours}`;
    refs.minsEl.textContent = `${mins}`;
    refs.secsEl.textContent = `${secs}`;
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
    onTick: updateClockface,
});

// 
// 
// 
// 
// 
// 
// 
// ТАЙМЕР БЕЗ КЛАСА / ТАЙМЕР БЕЗ КЛАСА / ТАЙМЕР БЕЗ КЛАСА / ТАЙМЕР БЕЗ КЛАСА / ТАЙМЕР БЕЗ КЛАСА / ТАЙМЕР БЕЗ КЛАСА / ТАЙМЕР БЕЗ КЛАСА /
// const refs = {
//     daysEl: document.querySelector('span[data-value="days"]'),
//     hoursEl: document.querySelector('span[data-value="hours"]'),
//     minsEl: document.querySelector('span[data-value="mins"]'),
//     secsEl: document.querySelector('span[data-value="secs"]')

// }

// const timer = {
//     runTimer() {
//         const futureDate = new Date(2020, 11, 31, 23, 59, 59);
//         setInterval(() => {
//             const currentDate = Date.now()
//             const deltaDate = futureDate - currentDate;
//             const time = getTimeComponents(deltaDate);
//             // console.log('time', `${ days } ${ hours }:${ mins }:${ secs }`);
//             updateClockface(time);

            
//         }, 1000)    
//     }
    
// }
// function getTimeComponents(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
//     return { days, hours, mins, secs };
// }

// function pad(value) {        
//     return String(value).padStart(2, '0');
// };

// function updateClockface({ days, hours, mins, secs }) {
//     refs.daysEl.textContent = `${days}`;
//     refs.hoursEl.textContent = `${hours}`;
//     refs.minsEl.textContent = `${mins}`;
//     refs.secsEl.textContent = `${secs}`;

    
// }

// timer.runTimer();
