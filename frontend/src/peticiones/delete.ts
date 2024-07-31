const deleteBtn = document.getElementById('deleteBtn') as HTMLButtonElement;

deleteBtn.addEventListener('click', async() => {
  const username = usernameDeleteInput.value;
  const password = passwordDeleteInput.value;

  const response = await fetch('http://localhost:1407/api/routers/deleteFile/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });
    
  const log = await response.json();
  console.log(log);
  if (response.status === 200) {
    alert(username  + ' ha sido eliminado');
    window.location.reload();
  };
});