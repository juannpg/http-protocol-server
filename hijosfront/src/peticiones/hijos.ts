const submitBtnNum = document.getElementById('submitBtnNum') as HTMLButtonElement;

submitBtnNum.addEventListener('click', async () => {
    const numHijos = parseInt(hijosInput.value);
    const username = usernameInput.value;
    const response = await fetch('http://localhost:1407/api/routers/hijos/hijosPost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            numHijos,
            username,
        })
    });
    const log = await response.json();
    console.log(log);

    if (response.status === 200) {
        alert('Numero de hijos registrados correctamente');
        window.location.reload();
    };
});