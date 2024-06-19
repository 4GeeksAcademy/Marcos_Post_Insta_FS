document.addEventListener("DOMContentLoaded", (event) => {
    const botonmegusta = document.querySelectorAll(".megusta i");
    botonmegusta.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("fa-regular");
            button.classList.toggle("fa-solid");
            button.classList.toggle("megusta-activo");
        });
    });
    const botonguardar = document.querySelectorAll (".guardar i");
       botonguardar.forEach (button => {
            button.addEventListener("click",()=> {
                button.classList.toggle("fa-regular");
                button.classList.toggle("fa-solid");
                button.classList.toggle("guardar-activo");
            });
        });
    
    
    const botonComentario = document.querySelectorAll(".comentario i");
    const modal = document.getElementById("Modal");
    const span = document.getElementsByClassName("cierre")[0];

    botonComentario.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    
    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});


    
