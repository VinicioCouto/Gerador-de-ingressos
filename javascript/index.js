document.addEventListener("DOMContentLoaded", () =>{
    const from = document.getElementById("formulario")

    from.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const avatar = document.getElementById("imageUpload").files[0];
        let ImgUpload = document.getElementById('imgUpload')
        const DivInput = document.getElementById('imgbackgroung')
        const DivIngresso = document.getElementById('ingressogerado')



        const ingresso = {
            nome,
            email,
            username,
            avatar: avatar ? avatar.name : "Nenhum arquivo enviado"
        }

        console.log("Dados do Ingresso:", ingresso);
        DivInput.style.display = "none"
        DivIngresso.style.display = "block"
    })
})

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
