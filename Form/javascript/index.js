const SendMsg = (event) => {
    event.preventDefault();

    const nameUser = document.getElementById('NameUser').value.trim();
    const emailUser = document.getElementById('EmailUser').value.trim();
    const msgUser = document.getElementById('MsgUser').value.trim();

    if (nameUser !== "" && emailUser !== "" && msgUser !== "") {
        window.location.href = '../index.html';
        window.alert('mensagem enviada!');
    } else {
        window.alert('PREENCHA TODOS OS CAMPOS!');
    }
};
