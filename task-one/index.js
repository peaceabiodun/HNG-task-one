document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');


    const today = new Date().getDay();
    currentDayOfTheWeek.textContent = daysOfWeek[today];


    const updateTime=()=> {
        const utcString = Date.now();

        currentUTCTime.textContent = utcString;
    };

    updateTime(); 
    setInterval(updateTime, 1000);
});