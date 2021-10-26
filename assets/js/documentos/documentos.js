
 /*
document.addEventListener("DOMContentLoaded", e => {

  //Generate provider's created documents
  //Waiting on request
  const tableHeaders = ["Paciente", "Fecha", "Documento"];
  provDocs.innerHTML = "";
  provDocs.appendChild(genTable(requestResponse(), tableHeaders, "docTable", false, "docRow"));

}); */

document.body.addEventListener("click", documentosClick);

document.body.addEventListener('paste', documentosPaste);

document.body.addEventListener("keyup", documentosKeyup);

document.body.addEventListener("contextmenu", documentosContext);

//SELFFFFFFFFFF
document.addEventListener("input", documentosInput);
 



















