import build from "./build.js";

const sort = data => {
    const arrow = document.querySelector('img');
    const input = document.querySelector('input');

    input.addEventListener('input', e => {
        const element = e.target.value;

        if (element === '') {
            build(data);
        } else {
            build(data.filter(e => e.id === parseInt(element)));
        }
    })
}

export default sort;