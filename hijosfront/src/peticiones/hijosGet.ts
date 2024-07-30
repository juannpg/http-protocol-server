const submitBtnUsernameCheck = document.getElementById('submitBtnUsernameCheck') as HTMLButtonElement;

submitBtnUsernameCheck.addEventListener('click', async () => {
  const username = usernameCheckInput.value;
  const response = await fetch(`http://localhost:1407/api/routers/hijosGet/hijosGet?username=${username}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
  });
  const log = await response.json();
  console.log(log);

  if (response.status === 200) {
    alert("nombre: " + log.user.username + "\n" + "hijos: " + log.user.numHijos);
    window.location.reload();
  }
});