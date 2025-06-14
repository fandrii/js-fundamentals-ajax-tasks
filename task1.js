// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

const usersList = document.querySelector(".usersList");

async function render() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users", {});
  const users = await resp.json();
  //   const userNames = users.map(({ name }) => name);
  for (const user of users) {
    const li = document.createElement("li");
    li.textContent = user.name;
    usersList.appendChild(li);
  }
}
render();
