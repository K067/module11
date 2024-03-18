const build = data => {
    const ul = document.querySelector('ul');

    let output = '';

    if (data.length !== 0) {
        data.forEach(({ id, name }) => {
            output +=
                `<li>
        <span>${id}</span>
        <span>${name}</span>
        </li>`
        })
    } else {
        output +=
            `<li>
            <span></span>
        <span>None</span>
        </li>`
    }

    ul.innerHTML = output;
}

export default build;