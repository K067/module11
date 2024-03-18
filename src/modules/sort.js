import build from "./build.js";

const sort = data => {
    const arrow = document.querySelector('img');
    const input = document.querySelector('input');

    arrow.addEventListener('click', () => {
        arrow.classList.toggle('rotate');

        build(data.reverse());
    })

    input.addEventListener('input', e => {
        const element = e.target.value.trim();

        if (element === '') {
            build(data);
        } else {
            build(data.filter(e => e.id === parseInt(element)));
        }
    })
}

export default sort;