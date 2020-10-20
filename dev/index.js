const getModule = () => import("./common/usersAPI");
import "./styles/style.css"
import "./styles/style.scss"

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  getModule().then(({ get }) => {
    const URL = `https://jsonplaceholder.typicode.com/${e.target.dataset.load}`
    get(URL).then(json => console.log(json));
  });
});
