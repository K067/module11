import build from "./build.js";

const fetchData = () => {
    let url = `https://jsonplaceholder.typicode.com/users`;
    let buffer = [];

    const getData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            buffer = data;

            build(buffer);
        } catch (error) {
            console.log(error);
        }
    }

    getData();
}
export default fetchData;