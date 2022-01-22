let a;
let b;
let date;
let time;
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time
}, 1);
setInterval(() => {
    b = new Date();
    date = a.toLocaleDateString(undefined, options)
    document.getElementById('date').innerHTML = date
}, 1000);
