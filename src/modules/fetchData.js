import build from "./build.js";
import sort from "./sort.js";

const fetchData = () => {
    let url = `https://jsonplaceholder.typicode.com/users`;

    const getData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            build(data);
            sort(data);
        } catch (error) {
            console.log(error);
        }
    }

    getData();
}
export default fetchData;