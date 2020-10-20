const getModule = () => import("../common/usersAPI");
import "/dev/styles/style.css"
import "/dev/styles/style.scss"

const URL = "https://jsonplaceholder.typicode.com/photos"

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getModule().then(({ get }) => {
    get(URL).then(json => console.log(json));
  });
});
