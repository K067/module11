import sort from "./sort.js";

const build = data => {
    const ul = document.querySelector('ul');

    console.log(data);

    data.forEach(e => {
        let li = document.createElement('li');
        let index = document.createElement('span');
        let user = document.createElement('span');

        index.textContent = e.id;
        user.textContent = e.name;

        li.appendChild(index);
        li.appendChild(user);

        ul.appendChild(li);
    })

    sort(data);
}

export default build;