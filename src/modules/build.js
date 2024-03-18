const build = data => {
    const ul = document.querySelector('ul');

    let output = '';

    data.forEach(({ id, name }) => {
        output +=
            `<li>
        <span>${id}</span>
        <span>${name}</span>
        </li>`
    })

    ul.innerHTML = output;
    console.log(data);
}

export default build;