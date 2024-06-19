document.addEventListener("DOMContentLoaded", (event) => {
    const botonmegusta = document.querySelectorAll(".megusta i");
    botonmegusta.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("fa-regular");
            button.classList.toggle("fa-solid");
            button.classList.toggle("megusta-activo");
        });
    });
});

//document.addEventListener("DOMContentLoaded", (event)=>{
  //  const botonguardar = document.querySelectorAll (".guardar i");
    //    botonguardar.forEach (button => {
      //      button.addEventListener("click",()=> {
        //        button.classList.toggle("fa-regular");
            //    button.classList.toggle("fa-solid");
          //      button.classList.toggle("guardar-activo");
            });
        });
};