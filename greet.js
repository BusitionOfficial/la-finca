const hour = new Date().getHours();
let message = "";

if (hour < 12) {
    message = "good morning!";
} else if (hour < 18) {
    message = "good afternoon!";
} else {
    message = "good evening!";
}

document.write(message);