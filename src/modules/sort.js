import build from "./build.js";
import fetchData from "./fetchData.js";

const sort = data => {
    const arrow = document.querySelector('img');
    const input = document.querySelector('input');

    input.addEventListener('input', e => {
        const element = e.target.value;

        if (element === '') {
            fetchData();
        } else {
            build(data.filter(e => e.id === parseInt(element)));
        }
    })
}

export default sort;