document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');


    const today = new Date().getDay();
    currentDayOfTheWeek.textContent = daysOfWeek[today];


    const updateTime=()=> {
        const timeNow = `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()}`

        currentUTCTime.textContent = timeNow;
    };

    updateTime(); 
    setInterval(updateTime, 1000);
});