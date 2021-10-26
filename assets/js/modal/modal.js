const modal_container = document.querySelector(".modal-container");
const body = document.querySelector("body");
const html = document.querySelector("html");

document.body.addEventListener("click", (e) => {

   if(e.target.classList.contains("closeModal")){
      e.preventDefault();
      modalRemoval();
   }
   //Optional
   if(e.target.classList.contains("triggerModal")){
      superModal();
   }

});


document.body.addEventListener("keydown", (e) => {

      //remove modal on "Escape" press
      if(e.key.toLowerCase() === "escape"){
         modalRemoval();
      }

});


function superModal(timeout){

         body.classList.add("body")
         html.classList.add("body")
         modal_container.classList.add("popmodal");

         if(timeout){
            setTimeout(() => {
               modalRemoval();
            }, timeout);
         }

   }


function modalRemoval(){
    modal_container.classList.remove("popmodal");
    body.classList.remove("body");
    html.classList.remove("body");
}

modal_container.addEventListener("click", (e) => {
          if(e.target.classList == "modal-container popmodal"){
             removeOutsideModal();
          }
}); 

function removeOutsideModal(){
    //Remove modal when clicking outside
    const edC = document.querySelector(".editorContainer");
               modalRemoval();

               setTimeout(() => {
                  $(edC).fadeIn();
               }, 300);
 } 