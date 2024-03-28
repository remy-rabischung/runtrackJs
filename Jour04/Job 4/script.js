function updateUserTable() {
    fetch('utilisateur.json')
      .then(response => response.json())
      .then(data => {
        const userTableBody = document.getElementById('userTableBody');
        userTableBody.innerHTML = '';

        data.forEach(user => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.email}</td>
          `;
          userTableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  window.onload = updateUserTable;
  document.getElementById('updateButton').addEventListener('click', updateUserTable);
  