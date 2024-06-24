
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

  const userList = document.getElementById("listaUsuarios")

  function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        let users = data.map(user => ({
          ...user,
          age: Math.floor(Math.random() * 31) + 20 
        }));
  
        users.forEach(user => {
          const template = `
            <div class='userdiv'>
              <img src="assets/img/${user.id}.jpeg" alt="${user.name}"></img>
              <ul class='userinfo'>
                <li><b>Nombre</b>: ${user.name}</li>
                <li><b>Edad</b>: ${user.age}</li>
                <li><b>Username</b>: ${user.username}</li>
                <li><b>Teléfono</b>: ${user.phone}</li>
                <li><b>Email</b>: ${user.email}</li>
              </ul>
              <p><b>Compañía</b>: ${user.company.name}</p>
              <p><b>Dirección</b>: ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
            </div>
          `;
          userList.innerHTML += template; 
        });
      })
      .catch(err => console.error(err));
  }
  
  getUsers();