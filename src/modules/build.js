import sort from "./sort.js";

const build = buffer => {
    const ul = document.querySelector('ul');

    buffer.forEach(({ id, name }) => {
        let li = document.createElement('li');
        let index = document.createElement('span');
        let user = document.createElement('span');

        index.textContent = id;
        user.textContent = name;

        li.appendChild(index);
        li.appendChild(user);

        ul.appendChild(li);
    })

    sort(buffer);

}

export default build;