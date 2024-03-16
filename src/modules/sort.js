import fetchData from "./fetchData.js";
import build from "./build.js";

const sort = data => {
    const arrow = document.querySelector('img');
    const input = document.querySelector('input');
    const list = document.querySelectorAll('li');
    const ul = document.querySelector('ul');



    input.addEventListener('input', e => {
        console.log(data.sort((id) => id === parseInt(e.target.value)));
    })

}

export default sort;