// Clock
const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

const setClock = setInterval(() =>{
    const currenTime = new Date();

    const hours = currenTime.getHours();
    const minutes = currenTime.getMinutes();
    const seconds = currenTime.getSeconds();

    const setHours = (hours * 30) + (minutes / 2);
    const setMinutes = (minutes * 6) + (seconds / 10);
    const setSeconds = seconds * 6;

    hourHand.style.transform = 'rotate(' + setHours + "deg)";
    minuteHand.style.transform = 'rotate(' + setMinutes + "deg)";
    secondHand.style.transform = 'rotate(' + setSeconds + "deg)";
}, 1000)