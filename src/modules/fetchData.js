import build from "./build.js";

const fetchData = (index = '') => {
    let url = `https://jsonplaceholder.typicode.com/users/${index}`;

    const getData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            if (index === '') {
                build(data);
            } else {
                let array = [];
                array.push(data)
                build(array, index);
            }
        } catch (error) {
            console.log(error);
        }
    }

    getData();
}
export default fetchData;