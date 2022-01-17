const progress_bar = document.querySelector('.progress-bar');
const input_number = document.querySelector('#input_number');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const counter_result = document.querySelector('#counter_result');


let counter;
let clear_count;

start.addEventListener('click', () => {

    counter = input_number.value;

    clear_count = setInterval(() => {

        let width = coun_load(input_number.value, counter);

        counter_result.innerHTML = `<h1> ${counter}</h1>`;

        progress_bar.style.width = `${coun_load(input_number.value, counter)}%`;

        progress_bar.innerText = `${Math.floor(width)}%`;

        if (counter < 10) {
            counter_result.innerHTML = `<h1> 0${counter}</h1>`;
        } else {
            counter_result.innerHTML = `<h1> ${counter}</h1>`;
        }

        // if (counter == 0) {
        //     clearInterval(clear_count)
        // }

        counter--;
        input_number.value = '';
    }, 1000);

    
    stop.addEventListener('click', () => {
        clearInterval();
    })

    reset.addEventListener('click', () => {
        counter_result.innerHTML=`<h1>00</h1>`;
    })
})