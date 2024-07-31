const patchBtn = document.getElementById('patchBtn') as HTMLButtonElement;

patchBtn.addEventListener('click', async () => {
    const username = usernamePatchInput.value;
    const numHijosNew = parseInt(hijosPatchInput.value);
    const response = await fetch(`http://localhost:1407/api/routers/patchFile/get?username=${username}&numHijosNew=${numHijosNew}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
    });
    const log = await response.json();
    console.log(log);

    if (response.status === 200) {
      const response2 = await fetch('http://localhost:1407/api/routers/patchFile/patch', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            numHijosNew,
        }),
      });
      const log2 = await response2.json();
      console.log(log2);

      if (response2.status === 200) {
        alert('¡' + log2.updatedUser.username + '!' + ' Your number of children updated to: ' + log2.updatedUser.numHijos);
        window.location.reload();
      };
    };
});