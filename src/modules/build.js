import sort from "./sort.js";

const build = buffer => {
    const ul = document.querySelector('ul');

    let output = '';

    buffer.forEach(({ id, name }) => {
        output +=
            `<li>
        <span>${id}</span>
        <span>${name}</span>
        </li>`
    })

    ul.innerHTML = output;

    sort(buffer);

}

export default build;