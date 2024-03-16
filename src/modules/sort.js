import fetchData from "./fetchData.js";

const sort = data => {
    const arrow = document.querySelector('img');
    const input = document.querySelector('input');
    const btn = document.querySelector('button');
    const list = document.querySelectorAll('li');
    const ul = document.querySelector('ul');


    const reset = () => {
        list.forEach(e => {
            e.remove();
        });
    }

    input.addEventListener('input', e => {
        if (e.target.value !== '') {

            reset();
            fetchData(e.target.value);
        }
        else {
            reset();
            fetchData();
        }
    })
}

export default sort;