document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const avatar = document.getElementById("imageUpload").files[0];
        let ImgUpload = document.getElementById('imgUpload');
        const DivInput = document.getElementById('imgbackgroung');
        const DivIngresso = document.getElementById('ingressogerado');

        const ingresso = {
            nome,
            email,
            username,
            avatar: avatar ? avatar.name : "Nenhum arquivo enviado"
        };

        console.log("Dados do Ingresso:", ingresso);
        DivInput.style.display = "none";
        DivIngresso.style.display = "block";

        // Atualiza os elementos com os dados do ingresso
        const NomeTitulo = document.getElementById("TituloNome");
        const EmailTitulo = document.getElementById("TituloEmail");
        const AvatarImg = document.getElementById("imgavatar");
        const NomeUser = document.getElementById("Nome");
        const GitUser = document.getElementById("gituser");
        const codigoID = document.getElementById("codigo");
        const Data = document.getElementById("data")

        const TituloEdit = `Parabéns, ${ingresso.nome}`;
        const EmailEdit = `Enviamos seu ingresso para ${ingresso.email} e enviaremos atualizações`;
        const codigoRandon = Math.floor(Math.random() * 998) + 1;
        const dataAtual = new Date()
        const dia = dataAtual.getDate()
        const mes = dataAtual.getMonth() + 1
        const ano = dataAtual.getFullYear()

        NomeTitulo.textContent = TituloEdit;
        EmailTitulo.textContent = EmailEdit;
        NomeUser.textContent = ingresso.nome;
        GitUser.textContent = ingresso.username;
        codigoID.textContent = `#${codigoRandon}`;
        Data.textContent = `${dia}/${mes}/${ano}`;

        if (avatar) {
            const reader = new FileReader();
            reader.onload = (e) => {
                AvatarImg.src = e.target.result;
            };
            reader.readAsDataURL(avatar);
        }
    });

    const imageUploadInput = document.getElementById("imageUpload");
    const imgUploadPreview = document.getElementById("imgUpload");

    imageUploadInput.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imgUploadPreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
            imgUploadPreview.style.width = "40px";
        } else {
            imgUploadPreview.src = "/imgs/icon-upload.svg";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const imageUploadInput = document.getElementById("imageUpload");
    const imgUploadPreview = document.getElementById("imgUpload");

    imageUploadInput.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();


            reader.onload = (e) => {
                imgUploadPreview.src = e.target.result;
            };

            reader.readAsDataURL(file);
            imgUploadPreview.style.width = "40px";

        } else {

            imgUploadPreview.src = "/imgs/icon-upload.svg";

        }
    });
});


