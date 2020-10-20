const getModule = () => import("./common/usersAPI");
import "./styles/style.css"
import "./styles/style.scss"

const URL = "https://jsonplaceholder.typicode.com/users"

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getModule().then(({ get }) => {
    get(URL).then(json => console.log(json));
  });
});
