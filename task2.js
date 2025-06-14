// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const btn = document.querySelector("#getUserButton");
const inputName = document.querySelector("#userNameInput");
const userCity = document.querySelector("#userCity");

btn.addEventListener("click", async () => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users", {});
    if (!resp.ok) {
      throw new Error("HTTP error!");
    }

    const usersObj = await resp.json();
    const foundUser = usersObj.find((user) => user.name === inputName.value);
    if (foundUser) {
      userCity.textContent = `${foundUser.address.city} `;
    } else {
      userCity.textContent = "User not found";
    }
  } catch (error) {
    console.error(error);
    userCity.textContent = error.message;
  }
});
