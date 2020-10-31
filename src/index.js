import "./css/styles.css";

class Timer {
    start(){
        const endTime = new Date(2020, 11, 31, 23, 59, 59); //2020, 11, 31, 23, 59, 59    1604140098654
        // console.log('endTime -----', endTime);

        setInterval(()=>{
            const currentTime = Date.now();

            // console.log('endTime -----', endTime);
            // console.log('currentTime +++++', currentTime);

            const remainderTime = endTime - currentTime;
            console.log('remainderTime ======== endTime - currentTime', remainderTime);
            
        }, 1000)

            getTimeComponents(time){
              const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
              const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
              const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
              const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

             return { days, hours, mins, secs };
            };

              pad(value) {
               return String(value).padStart(2, '0');
              }


    }
}

const timerToEnd = new Timer();
timerToEnd.start();

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });



// 
// 
// 
// 
// 
// const timer = {
//     start() {
//         const startTime = Date.now();

//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const { days, hours, mins, secs } = getTimeComponents(deltaTime);

//             console.log(`${days} ${hours}:${mins}:${secs}`);
//         }, 1000)
//     }
// }

// // timer.start();

// function getTimeComponents(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { days, hours, mins, secs };
// }

// function pad(value) {
//     return String(value).padStart(2, '0');
// }
