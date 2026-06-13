const today = new Date();


const year = today.getFullYear();
const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(today);
const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(today);
const dayNumber = today.getDate();


const dateInWords = `${dayName}, ${monthName} ${dayNumber}, ${year}.`;
console.log(dateInWords); 

document.write(dateInWords);