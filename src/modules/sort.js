import build from "./build.js";

const sort = buffer => {
    const arrow = document.querySelector('img');
    const input = document.querySelector('input');

    input.addEventListener('input', e => {
        const element = parseInt(e.target.value);
        const user = buffer.filter(e => e.id === element);

        build(user)
    })
}

export default sort;