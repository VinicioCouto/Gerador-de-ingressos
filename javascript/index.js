document.addEventListener("DOMContentLoaded", () =>{
    const from = document.getElementById("formulario")

    from.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const avatar = document.getElementById("imageUpload").files[0];
        const DivInput = document.getElementById('imgbackgroung')

        const ingresso = {
            nome,
            email,
            username,
            avatar: avatar ? avatar.name : "Nenhum arquivo enviado"
        }

        console.log("Dados do Ingresso:", ingresso);
        DivInput.style.display = "none"
    })
})