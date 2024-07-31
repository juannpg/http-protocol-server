const getBtn = document.getElementById('getBtn') as HTMLButtonElement;

getBtn.addEventListener('click', async () => {
  const username = usernameCheckInput.value;
  const response = await fetch(`http://localhost:1407/api/routers/getFile/get?username=${username}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
  });
  const log = await response.json();
  console.log(log);

  if (response.status === 200) {
    alert("Name: " + log.user.username + "\n" + "Number of children: " + log.user.numHijos);
    window.location.reload();
  }
});