const postBtn = document.getElementById('postBtn') as HTMLButtonElement;

postBtn.addEventListener('click', async () => {
    const numHijos = parseInt(hijosInput.value);
    const username = usernameInput.value;
    const password = passwordInput.value;
    const response = await fetch('http://localhost:1407/api/routers/postFile/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            numHijos,
            username,
            password,
        })
    });
    const log = await response.json();
    console.log(log);

    if (response.status === 200) {
        alert('Number of children registered successfully');
        window.location.reload();
    };
});