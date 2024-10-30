export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export async function fetchingDataJSON(url, userID) {
  const loadingDiv = document.createElement("div");
  loadingDiv.textContent = "Loading...";
  document.getElementById("app").appendChild(loadingDiv);
  try {
    let allUsers = [];
    const response = await fetch(`${url}${userID}`);
    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${response.status}`);
    }
    const data = await response.json();

    allUsers.push(data);
    console.log(allUsers);

    localStorage.setItem("users", JSON.stringify(allUsers));

    renderUsers(allUsers);
  } catch (error) {
    throw new Error(`Error al obtener los datos: ${error.message}`);
  }
}

export async function renderUsers(users) {
  const appDiv = document.getElementById("app");
  appDiv.innerHTML = "";
  users.forEach((user) => {
    const { username, address, company } = user;
    const { city } = address;
    const { name } = company;
    const userElementDiv = document.createElement("div");
    userElementDiv.className = "user-card";
    userElementDiv.innerHTML = `
    <div class="card-content">
    <h2>${username}</h2>
    <p>Ciudad: ${city}</p>
    <p>Empresa: ${name}</p>
    </div>
    `;
    appDiv.appendChild(userElementDiv);
  });
}
