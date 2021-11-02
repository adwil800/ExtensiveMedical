

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let elmnt;
  /* if present, the header is where you move the DIV from:*/
//Make the DIV element draggagle:


document.body.addEventListener("mousedown", e => {

  //Bring window to top
  const currentDraggable = parentWorm(e.target, "parentDraggable");
    if (currentDraggable !== undefined){

      //Get all draggableParents and remove style property
        if (removeTopWindow()){

            //Set z-index to current parent
            currentDraggable.classList.add("topDraggable");

          }

    }

    if(e.target.classList.contains("draggableTarget")){  
        elmnt = e.target.parentElement;
        e.target.onmousedown = dragMouseDown(e);
    }
    
});

document.body.addEventListener("click", e => {


    if (e.target.classList.contains("closeDraggableCitas")){
      //Handle window count and initial position
      windowSubstraction(e.target.parentElement.parentElement);

      calendarParent = ""; mainRightContentContainer = "";
      citasActive = removeDraggable(e.target, "Citas");
      //remove listeners

      const citasListeners = ["click", "paste", "keyup", "contextmenu", "click"],
            citasCallbacks = [citasClick, citasPaste, citasKeyup, citasContext,calendarClick];
            removeListeners(citasListeners, citasCallbacks);
    
    } else if (e.target.classList.contains("closeDraggableDocs")){
      //Handle window count and initial position
      windowSubstraction(e.target.parentElement.parentElement);

      provDocs = ""; docDetails = ""; newDoc =""; delDoc = ""; downDoc = "";
      documentosActive = removeDraggable(e.target, "Docs");
      //remove listeners
      const docsListeners = ["click", "paste", "keyup", "contextmenu", "input"],
            docsCallbacks = [documentosClick, documentosPaste, documentosKeyup,documentosInput];
            removeListeners(docsListeners, docsCallbacks);

    } else if (e.target.classList.contains("closeDraggableNewPatient")){
      //Handle window count and initial position
      windowSubstraction(e.target.parentElement.parentElement);

      newPatientActive = removeDraggable(e.target, "NewPatient");
      //remove listeners
     // const newPatientListener = ["click", "paste", "keyup", "contextmenu", "input"],
      //      newPatientCallbacks = [documentosClick, documentosPaste, documentosKeyup,documentosInput];
            //removeListeners(docsListeners, docsCallbacks);
    } else if (e.target.classList.contains("closeDraggableExistingPatient")){
      //Handle window count and initial position
      windowSubstraction(e.target.parentElement.parentElement);

      existingPacientesRightContent = "";
      existingPatientActive = removeDraggable(e.target, "ExistingPatient");
      //remove listeners
      const existingPatientListeners = ["click", "keyup", "context"],
            existingPatientCallbacks = [existingPatientClick, existingPatientKeyup, existingPatientContext];
            removeListeners(existingPatientListeners, existingPatientCallbacks);
    } else if (e.target.classList.contains("closeDraggableConfig")){
      //Handle window count and initial position
      windowSubstraction(e.target.parentElement.parentElement);

      configRightContent = "", consCurrentProviders = [];
      configActive = removeDraggable(e.target, "Config");
      //remove listeners
      const configListeners = ["click", "keyup"],
            configCallbacks = [configClick, configKeyup];
            removeListeners(configListeners, configCallbacks);
    }

      //All thradio modal handling
      //Check for filter radio buttons
      if(e.target.classList.contains("thRadio")){

        const currentRadio = e.target;
        const thRadios = e.target.parentElement.parentElement.querySelectorAll("th");

            //Remove checked radios
            thRadios.forEach(e => {

                const radio = e.querySelector(".thRadio");
                    radio.checked = false;
                      
            });
            
            //Add new checked
                currentRadio.checked = true;
                const fieldName = currentRadio.parentElement.textContent;
            //Empty input on radio change and remove "hide" class from tr in body
            const filterInput = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("#mainTitle>input");
                  filterInput.value = "";
                  filterInput.focus();

                  //Custom placeholder
                  filterInput.setAttribute("placeholder", "Filtrar por "+fieldName);



            //Get all tr
            const bodyTr = e.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll("tbody>tr");
                        
            bodyTr.forEach(e => {

                e.classList.remove("hide");

            }); 

            //Empty input on radio change and remove "hide" class from tr in body

      }
    
});

document.body.addEventListener("keydown", (e) => {
  /* 
    if(e.key.toLowerCase() === "escape" && e.target.querySelector(".draggableParent") !== null){
        
        e.target.querySelector(".draggableParent").remove();
        const scripts = dynamicJs.querySelectorAll("script");
        scripts.forEach(e => e.remove());

        //remove listeners

    }*/

});

function parentWorm(element, parentTarget){

  let search = true;

  while(search == true){
      
    if (element === undefined || element === null){
      return;
    }

    if (element.classList.contains(parentTarget)){
        search = false;
        return element;
    }else{

      element = element.parentElement;
    }

    }

    return;

}

function removeTopWindow(){
  const allWindows = document.querySelectorAll("#templateContent .draggableParent");
        allWindows.forEach(e => e.classList.remove("topDraggable"));
        return true;
}

function removeListeners(listeners, callbacks){

  for (let i = 0; i < listeners.length; i++) {
    
    document.body.removeEventListener(listeners[i], callbacks[i]);

  }

}

function removeDraggable(draggable, windowType){

  //Remove parentContainer
  draggable.parentElement.parentElement.remove();
  //Grab all scripts and links that belong to windowType and remove
  const links = dynamicCss.querySelectorAll(".link"+windowType);
        links.forEach(e => e.remove());
  const scripts = dynamicJs.querySelectorAll(".script"+windowType);
        scripts.forEach(e => e.remove());
  //Allow for a new window to be created
  return false;

}
















function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  // set the element's new position:
  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
  /* stop moving when mouse button is released:*/
  document.onmouseup = null;
  document.onmousemove = null;
}

//All listeners functions to be able to remove them once the window is closed
//CONFIGURATION
function configClick(e){

  if (e.target.classList.contains("configBtn") || e.target.parentElement.classList.contains("configBtn")){
    let submenu; 
    if (e.target.parentElement.classList.contains("configBtn")){

        submenu = e.target.parentElement.parentElement.querySelector(".configSubMenu");

    } else {

        submenu = e.target.parentElement.querySelector(".configSubMenu");

    }
    //Display submenu
        if (submenu !== null){

            if(submenu.classList.contains("hide")){

                submenu.classList.remove("hide");
                
            } else {

                submenu.classList.add("hide");

            }
            
        }

  }

  //mantCons
  if (e.target.id === "mantConsultorios" || e.target.id === "backToMantCons"){

    //Clear provider list 
    consCurrentProviders = [];
    //Add buttons
      configRightContent.innerHTML = consBtns;

  }
  //mantCons > newCons
  if (e.target.id === "newConsBtn"){

    //Stop link activity
     e.preventDefault();
    //Clear provider list 
    consCurrentProviders = [];
    //Add content
    configRightContent.innerHTML = newConsultorio;

  }
  //mantCons > editCons
  if (e.target.id === "editConsBtn"){

    //Stop link activity
      e.preventDefault();
    //Clear provider list 
      consCurrentProviders = [];
    //Add modalContent 

      editorContainer.innerHTML = "";
      mainTitle.innerHTML = "";
  
      //Create title input
      const attrNames = ["type", "class", "placeholder"],
        attrValue = ["text", "filterExistingCons", "Filtrar por Nombre"];
      const input = createHtmlElement("input", attrNames, attrValue);
  
      mainTitle.textContent = "Consultorios ";
      mainTitle.appendChild(input);
      mainTitle.querySelector("input").focus();
      //Create title input
  
      //Send data to genTable
      const cols = ["Nombre ", "Dirección ", "RNC ", "Teléfono "];
  
      const consData = [
  
        {
          "consName": "ConsultMD",
          "address": "Luperon Gozniak, 23 street 33033",
          "rnc": "123456789",
          "phone": "809-999-9999",
        },
        {
          "consName": "Montreal Central",
          "address": "Street cons, 24 ln 33033",
          "rnc": "1234567890",
          "phone": "809-999-9998",
        }
  
      ];
      editorContainer.appendChild(genTable(consData, cols, "consBody"));
  
      superModal();

  }
  //mantCons > editCons > modal > editConsForm
  if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "consBody"){
          
    //Get consName and Id, vvvv array
    const logs = e.target.parentElement.querySelectorAll("td");

    //Request all information from BD to proceed and update if needed

    //Add editCons fields
    configRightContent.innerHTML = newConsultorio;

    //Get specific fields from editCons

    const consName = configRightContent.querySelector("#consName"),
          consAddress = configRightContent.querySelector("#consDir"),
          consRnc = configRightContent.querySelector("#consRnc"),
          consPhone = configRightContent.querySelector("#consPhone"),
          consSpecialty = configRightContent.querySelector("#consSpecialties"),
          consWorkDays = configRightContent.querySelectorAll(".checkGroup input"),
          consDaysTimes = configRightContent.querySelectorAll(".checkGroup .dayTime"),
          consProviders = configRightContent.querySelector("#consProviders");




      modalRemoval();

  }
  //mantCons > editCons > modal > editConsForm && mantCons > editCons >  newCons
  //consProviders
  if(e.target.id === "consProviders"){

    //Show modal
          editorContainer.innerHTML = "";
          mainTitle.innerHTML = "";

        //Create title input
          const attrNames = ["type", "class", "placeholder"],
                attrValue = ["text", "filterConsPro", "Filtrar por Nombre"];
          const input = createHtmlElement("input", attrNames, attrValue);

          mainTitle.textContent = "Proveedores ";
          mainTitle.appendChild(input);
          mainTitle.querySelector("input").focus();
          //Create title input

        //Send data to genTable
        const cols = ["Nombre ", "Apellido ", "Ubicación ", "Especialidad ", "Título "];

        const sampleData = [
          {
            "name": "Martin Mark",
            "lastName": "Luperon Gozniak",
            "location": "Consult MD",
            "specialty": "Pediatra",
            "title": "Medical doctor"
          },
          {
            "name": "Test",
            "lastName": "Provider",
            "location": "Test",
            "specialty": "Test",
            "title": "Test"
          }
                ];
          editorContainer.appendChild(genTable(sampleData, cols, "consProBody"));
          superModal();
  }

  if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "consProBody"){
          
    //Get consName and Id, vvvv array
    const logs = e.target.parentElement.querySelectorAll("td");

    //Request all information from BD to proceed and update if needed

    //Get specific fields from editCons

    const consProviders = configRightContent.querySelector("#consProviders");


    //Add selected provider into array
    consCurrentProviders.push(logs[0].textContent+" "+logs[1].textContent);
    //Reload current providers list
    const providerListContainer = configRightContent.querySelector(".consProviderList");
    reloadConsProviders(consCurrentProviders, providerListContainer);

      modalRemoval();

  }
  //Show providerList
  if (e.target.parentElement.classList.contains("consProviderList")){

  //Instantly remove selection
    //Get actualList object
      const actualList = e.target.parentElement.querySelector(".actualList");
      //Show
            actualList.classList.remove("hide");


  }
  //Hide providerList
  if (e.target.classList.contains("closeDraggableProvList")){

      //Get draggable parent
      const draggableParent = parentWorm(e.target, "draggableParent");
        if (draggableParent !== undefined){
          
            draggableParent.classList.add("hide");

        }

  }
  //Remove current provider from list
  if (e.target.classList.contains("removeCurrentElement")){

      const index = parseInt(e.target.parentElement.innerHTML.split("-")[0])-1;
      consCurrentProviders.splice(index, 1);
        const parentContainer = parentWorm(e.target, "consProviderList");
        //Reload list
      if(consCurrentProviders.length < 1){

        reloadConsProviders(consCurrentProviders, parentContainer);
      
      }else{

        liveReloadConsProviders(consCurrentProviders, parentContainer);

      }
  }
  //Remove providerList draggable if clicked anywhere but the div itself
  if (parentWorm(e.target, "actualList") === undefined){

      const actualList = configRightContent.querySelector(".actualList");
        //Check for null
        if (actualList !== null && actualList !== undefined){
            //Check if actualList contains hide
            if (!actualList.classList.contains("hide")){

                //actualList.classList.add("hide");
                FIGURE OUT HOW TO HIDE THE ACTUAL LIST WHEN CLICKING OUTSIDE AND KEEP UP GOING WITH THE PROVIDERS; CITAS AND HORARIOS
            }

        }


  }
  //mantCons

}

function liveReloadConsProviders(array, parentContainer){
    
  //create list
  const ul = document.createElement("ul");

  for (let i = 0; i < array.length; i++) {


    const li = document.createElement("li"),
          iTag = createHtmlElement("i", "class", "fas fa-times removeCurrentElement");
          li.textContent = (i+1)+" - "+array[i]+" ";
          li.insertBefore(iTag, li.firstElementChild);
    
          ul.appendChild(li);

  }
  
  //remove existing span and ul
  parentContainer.querySelector("span.liveCount").remove();
  parentContainer.querySelector(".actualList > ul").remove();

  //Add preview and count
  const summonerSpan = document.createElement("span");
        summonerSpan.setAttribute("class", "liveCount");
        summonerSpan.textContent = array[0]+`...`+`(${array.length})`;

  parentContainer.insertBefore(summonerSpan, parentContainer.childNodes[0]);
  parentContainer.querySelector(".actualList").appendChild(ul);

}

function reloadConsProviders(array, targetElement){

  if(array.length < 1){
    targetElement.innerHTML = "";
    return;
  }
  //create parentContainer, draggable
  const parentContainer = createHtmlElement("div", "class", "actualList  draggableParent hide");
  //create draggableTarget
  const draggableTarget = createHtmlElement("div", "class", "draggableTarget");
        draggableTarget.innerHTML = `
                    <span class="tabName">Lista de proveedores</span>
                    <i class="fas fa-times closeDraggableProvList"></i>
        `;
  //create list
  const ul = document.createElement("ul");
        
  for (let i = 0; i < array.length; i++) {


    const li = document.createElement("li"),
          iTag = createHtmlElement("i", "class", "fas fa-times removeCurrentElement");
          li.textContent = (i+1)+" - "+array[i]+" ";
          li.insertBefore(iTag, li.firstElementChild);
    
          ul.appendChild(li);

  }
  //Add preview and count
  const summonerSpan = document.createElement("span");
        summonerSpan.setAttribute("class", "liveCount");
        summonerSpan.textContent = array[0]+`...`+`(${array.length})`;


  targetElement.innerHTML = "";
  parentContainer.appendChild(draggableTarget);
  parentContainer.appendChild(ul);
  targetElement.appendChild(summonerSpan);
  targetElement.appendChild(parentContainer);

}



function configKeyup(e){
  //Filter from table in modal for cons
  if (e.target.classList.contains("filterConsPro")){

      
    filter(e.target, "consProBody", checkedIndex(e.target));


  } else if (e.target.classList.contains("filterExistingCons")){

    const index = checkedIndex(e.target);

    //Check for DOB or Tel to only provide 10 characters 
        if(index === 2 || index === 3){
              e.target.setAttribute("maxlength", "10");
        }else{
          e.target.removeAttribute("maxlength");
        }

      filter(e.target, "consBody", index);

  }

} 










//EXISTING PATIENTS
function existingPatientClick(e){ 
  

  if(e.target.id === "existingPersonalTab"){ 
 
      //Set selected button
          let buttonsParent = e.target.parentElement.parentElement;
          removeAllClasses(buttonsParent, "selectedEButton", "button");
          e.target.classList.add("selectedEButton");

            //Appt
            tableViewer.classList.add("hide");
            contentViewer.classList.add("hide");
            //Personal
            personalViewer.classList.remove("hide");

            tableViewer.innerHTML = ""; contentViewer.innerHTML = ""; 

            //Request and dynamically add the fileds to patientPersonal
            const patientPersonal = ` <h3 >Personal</h3>  

                    <div class="row center" >

                      <div class="col-lg-6 customOffset-1">

                        <ul>
                          <li>Nombres: <span>Juan Manuel</span></li>
                          <li>Apellidos: <span>Perez Hernandez</span></li>
                          <li># paciente: <span>32</span></li>
                          <li>Sexo: <span>M</span></li>
                          <li>Dirección: <span>Las cayenas, calle 23, la vega</span></li>
                          <li>Proveedor: <span>Maria Alberto De Jesus</span></li>
                          <li>Creado: <span>05/12/2012</span></li>
                        </ul>

                      </div>

                      <div class="col-lg-5">

                        <ul>
                          <li>Email: <span>Juanso@gmail.com</span></li>
                          <li>Teléfono: 
                                          <li class="indent"><span>809-619-5358</span></li>
                                          <li class="indent"><span>809-619-9999</span></li>
                                        </li>
                          <li>Contacto de emergencia: 
                                          <li class="indent">Nombre: <span>Maria Jimenez</span></li>
                                          <li class="indent">Teléfono: <span>809-619-9999</span></li>
                          </li>

                        </ul>

                      </div>

                      <div class="ud-form-group">
                        <button  class="btn btn-primary bottomRight">
                          Editar paciente
                        </button>
                      </div>

                    </div>`;
            personalViewer.innerHTML = patientPersonal;
  }

  if(e.target.id === "existingApptTab"){ 

          //Set selected button
          let buttonsParent = e.target.parentElement.parentElement;
          removeAllClasses(buttonsParent, "selectedEButton", "button");
          e.target.classList.add("selectedEButton");

    //Send data to genTable
          const cols = ["Paciente", "Ubicación ", "Fecha ", "Hora", "Tipo", "Proveedor"];

          const sampleData = [
            {
              "name": "Martin Luperon",
              "location": "Consult MD",
              "date": "12/12/2021",
              "time": "9:00 AM",
              "type": "Vacunación",
              "provider": "Martha Junao"
            },
            {
              "name": "Martin Luperon",
              "location": "Consult MD",
              "date": "12/10/2021",
              "time": "10:00 AM",
              "type": "Chequeo general",
              "provider": "Joseline Gantz"
            }
                  ];

           
            tableViewer.innerHTML = ""; contentViewer.innerHTML = ""; personalViewer.innerHTML = "";
            contentViewer.innerHTML = `<h3>No hay ninguna cita seleccionada</h3>`;


              //Personal
              personalViewer.classList.add("hide");
              //Appt
              tableViewer.classList.remove("hide");
              contentViewer.classList.remove("hide");
                

            tableViewer.appendChild(genTable(sampleData, cols, "existingPatientApptBody", false, "existingPatientApptRow"));

  }

  //Select existing patient with modal
  if(e.target.id === "selectExistingPatient"){

                
          editorContainer.innerHTML = "";
          mainTitle.innerHTML = "";

          //Create title input
          const attrNames = ["type", "class", "placeholder"],
                attrValue = ["text", "filterExistingPatient", "Filtrar por Nombre"];
          const input = createHtmlElement("input", attrNames, attrValue);

          mainTitle.textContent = "Pacientes ";
          mainTitle.appendChild(input);
          mainTitle.querySelector("input").focus();
          //Create title input

          //Send data to genTable
          const cols = ["Nombre ", "Apellido ", "Fecha de nacimiento ", "Teléfono "];
          //DB request
          const patientData = [

                    {
                      "name": "Martin Mark",
                      "lastName": "Luperon Gozniak",
                      "dob": "01/25/2001",
                      "phone": "809-999-9999",
                    },
                    {
                      "name": "John Mark",
                      "lastName": "Kon Gozniak",
                      "dob": "01/25/2201",
                      "phone": "809-999-8888",
                    }
                    
                  ];

          editorContainer.appendChild(genTable(patientData, cols, "existingPaBody"));

          superModal();

          
  }

    //Grab information from modal table for patient selection
    if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "existingPaBody"){
                  
      const patientName = e.target.parentElement.querySelector(".pName");
      const inputExistingP = document.querySelector("#existingPatientContent #selectExistingPatient");

        //Enable buttons
        const buttons = inputExistingP.parentElement.parentElement.querySelectorAll("button");
        //Grab personal button and add selectedEButton class to set active state
        if(!inputExistingP.hasAttribute("value"))
            buttons[0].classList.add("selectedEButton");

            //Add input value
            inputExistingP.setAttribute("value", patientName.innerHTML);
        
                  
              buttons.forEach(e => {
                  e.classList.remove("disableBtn");
              });
              


            //Request and dynamically add the fileds to patientPersonal
            const patientPersonal = ` <h3 >Personal</h3>  

            <div class="row center" >

              <div class="col-lg-6 customOffset-1">

                <ul>
                  <li>Nombres: <span>Juan Manuel</span></li>
                  <li>Apellidos: <span>Perez Hernandez</span></li>
                  <li># paciente: <span>32</span></li>
                  <li>Sexo: <span>M</span></li>
                  <li>Dirección: <span>Las cayenas, calle 23, la vega</span></li>
                  <li>Proveedor: <span>Maria Alberto De Jesus</span></li>
                  <li>Creado: <span>05/12/2012</span></li>
                </ul>

              </div>

              <div class="col-lg-5">

                <ul>
                  <li>Email: <span>Juanso@gmail.com</span></li>
                  <li>Teléfono: 
                                  <li class="indent"><span>809-619-5358</span></li>
                                  <li class="indent"><span>809-619-9999</span></li>
                                </li>
                  <li>Contacto de emergencia: 
                                  <li class="indent">Nombre: <span>Maria Jimenez</span></li>
                                  <li class="indent">Teléfono: <span>809-619-9999</span></li>
                  </li>

                </ul>

              </div>

              <div class="ud-form-group">
                <button  class="btn btn-primary bottomRight">
                  Editar paciente
                </button>
              </div>

            </div>`;
            personalViewer.classList.remove("hide"); 
            personalViewer.innerHTML = patientPersonal;

        modalRemoval();

    }



  //Handle appointment selection
  if (e.target.parentElement.classList.contains("existingPatientApptRow")) {
    //Get all table rows to clean them from any property
    const tableRows = e.target.parentElement.parentElement.querySelectorAll("tr");
    tableRows.forEach(row => {
      //clear selected attribute
      row.removeAttribute("selected");
      row.querySelectorAll("td").forEach(rows => {

        rows.innerHTML = rows.textContent;

      });
    });

    //find doc details
    const row = e.target.parentElement.querySelectorAll("td");
    //Add selection identifier
    row[row.length - 1].innerHTML += ` <i class="lni lni-close ">`;
    //Add selection attribute
    const currentTr = e.target.parentElement;
    currentTr.setAttribute("selected", "");

    //DB request
    const contentViewer = existingPacientesRightContent.querySelector(".contentViewer");
     
      const contentViewerSampleData = `  
      <h4 class="underline">Detalles de la cita</h4>
                              
      <div class="row">

        <div class="col-lg-6">

          <ul>
            <li><span>Creado por: </span> Agent a, 12/05/2021, hora?     </li>
            <li><span>Proveedor: </span> Martha Junao</li>
            <li><span>Tipo: </span> Vacunación</li>
            <li><span>Centro de servicio: </span> ConsultMD</li>

          </ul>

        </div>

        <div class="col-lg-6">

          <ul>
            <li><span>Fecha de la cita: </span> 12/12/2021</li>
            <li><span>Nota: </span> Fuerte dolores de cabeza </li>
          </ul>

        </div>

      </div>`;

      contentViewer.innerHTML= contentViewerSampleData;




  }

  //Clear appointment selection
  if(e.target.parentElement.parentElement !== null)
  if (e.target.parentElement.parentElement.classList.contains("existingPatientApptRow")) {
    if (e.target.classList.contains("lni-close")) {

      const tableRows = e.target.parentElement.parentElement.parentElement.querySelectorAll("tr");
      tableRows.forEach(row => {
        row.removeAttribute("selected");
        row.querySelectorAll("td").forEach(rows => {
  
          rows.innerHTML = rows.textContent;
  
        });
      });
      const contentViewer = existingPacientesRightContent.querySelector(".contentViewer");

      contentViewer.innerHTML = `<h3>No hay ninguna cita seleccionada</h3>`;
    }
  }


}

function existingPatientKeyup(e){

  if(e.target.classList.contains("filterExistingPatient")){

    const index = checkedIndex(e.target);

    //Check for DOB or Tel to only provide 10 characters 
        if(index === 2 || index === 3){
              e.target.setAttribute("maxlength", "10");
        }else{
          e.target.removeAttribute("maxlength");
        }

      filter(e.target, "existingPaBody", index);

  }
}

function existingPatientContext(e){
  
  //Add the possibility to clear provider and patient field on right click
    //Get targetField
    const targetField = e.target;

    if(targetField.id === "selectExistingPatient"){
      //Remove default context menu
      e.preventDefault();
      //Get fieldName
      const fieldName = targetField.parentElement.querySelector("label").textContent.replace("*", "");
      //Check for clearance
      if(targetField.value){
          
        //Clear rightContent data
        
              tableViewer.innerHTML = ""; contentViewer.innerHTML = ""; personalViewer.innerHTML = "";
              tableViewer.classList.add("hide");
              contentViewer.classList.add("hide");
              personalViewer.classList.add("hide");

        //Clear targetField
        targetField.removeAttribute("value");
        //Disable buttons and remove selectedEButton
        const buttons = targetField.parentElement.parentElement.querySelectorAll("button");
              buttons.forEach(e => {
                  e.classList.add("disableBtn");
                  e.classList.remove("selectedEButton")
              });
        customAlert("Campo \'"+ fieldName.toLowerCase() +"\' limpiado.");
  
      }else{
  
        customAlert("El campo \'"+ fieldName.toLowerCase() +"\' ya está vacío.");
  
      }
    }
} 

//CITAS
function citasClick(e){
  
  //Forbidden click alert
  if(e.target.id === "calendarSection"){
    customAlert("Aún no seleccionas el proveedor!")
  }

  //selectCitasProvider
    //Summon modal
    if(e.target.id === "selectCitasProvider"){

        editorContainer.innerHTML = "";
        mainTitle.innerHTML = "";

      //Create title input
        const attrNames = ["type", "class", "placeholder"],
              attrValue = ["text", "filterCitasPro", "Filtrar por Nombre"];
        const input = createHtmlElement("input", attrNames, attrValue);

        mainTitle.textContent = "Proveedores ";
        mainTitle.appendChild(input);
        mainTitle.querySelector("input").focus();
        //Create title input

      //Send data to genTable
      const cols = ["Nombre ", "Apellido ", "Ubicación ", "Especialidad ", "Título "];

      const sampleData = [
        {
          "name": "Martin Mark",
          "lastName": "Luperon Gozniak",
          "location": "Consult MD",
          "specialty": "Pediatra",
          "title": "Medical doctor"
        },
        {
          "name": "Test",
          "lastName": "Provider",
          "location": "Test",
          "specialty": "Test",
          "title": "Test"
        }
              ];
        editorContainer.appendChild(genTable(sampleData, cols, "citasProBody"));
        superModal();

    }

    //Grab information from modal table for provider selection
    if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "citasProBody"){
        
        const providerName = e.target.parentElement.querySelector(".pName");
        const input = mainRightContentContainer.parentElement.querySelector("#selectCitasProvider");
        input.setAttribute("value", providerName.innerHTML); 
        modalRemoval();

        //Place the JS request to bring provider's schedule then produce table and data insertion as the following
        //ON PROVIDER'S CHANGE SCHEDULE REQUEST
        dateChangeSchedule(selectedDate.day, selectedDate.month+1, selectedDate.year); 

    }
  //selectCitasPatient

  //selectCitasPatient
    //Summon modal
    if(e.target.id === "selectCitasPatient"){


        editorContainer.innerHTML = "";
        mainTitle.innerHTML = "";

        //Create title input
        const attrNames = ["type", "class", "placeholder"],
              attrValue = ["text", "filterCitasPa", "Filtrar por Nombre"];
        const input = createHtmlElement("input", attrNames, attrValue);

        mainTitle.textContent = "Pacientes ";
        mainTitle.appendChild(input);
        mainTitle.querySelector("input").focus();
        //Create title input

        //Send data to genTable
        const cols = ["Nombre ", "Apellido ", "Fecha de nacimiento ", "Teléfono "];

        const patientData = [

                  {
                    "name": "Martin Mark",
                    "lastName": "Luperon Gozniak",
                    "dob": "01/25/2001",
                    "phone": "809-999-9999",
                  },
                  {
                    "name": "John Mark",
                    "lastName": "Kon Gozniak",
                    "dob": "01/25/2201",
                    "phone": "809-999-8888",
                  }
                  
                ];

        editorContainer.appendChild(genTable(patientData, cols, "citasPaBody"));

        superModal();



    }
  //selectCitasPatient
    //Grab information from modal table for patient selection
    if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "citasPaBody"){
              
      const patientName = e.target.parentElement.querySelector(".pName");
      const inputCitasP = document.querySelector("#citasContent #selectCitasPatient");
            console.log(inputCitasP)
            inputCitasP.setAttribute("value", patientName.innerHTML);
      modalRemoval();

    }

    //Create selected appointment
    if(e.target.parentElement.classList.contains("appt")){

      const apptForm = ` <div class="modalFormWrapper" >
                  
      <!-- ====== Content start ====== -->

              <form class="ud-template-form">

                <div class="row">

                    <!--Proveedor, Paciente, Nota-->
                    <div class="col-lg-6">
                      
                          <div class="ud-form-group">
                            <label for="citasProviderName">Proveedor*</label>
                            <input type="text" name="citasProviderName" id="citasProviderName" disabled>
                          </div>

                          
                          <div class="ud-form-group">
                            <label for="citasPatientName">Paciente*</label>
                            <input type="text" name="citasPatientName" id="citasPatientName" disabled>
                          </div>
                          
                          
                          <div class="ud-form-group">
                            <label for="appointmentNote">Nota</label>
                              <textarea name="appointmentNote" cols="30" rows="10" id="apptNote"></textarea>
                          </div>

                    </div> 

                    <!--Ubicación, Hora, Teléfono 1 y 2-->
                    <div class="col-lg-6">
                    
                        <div class="ud-form-group">
                          <label for="location">Ubicación*</label>
                          <input type="text" name="location" id="apptLocation" disabled>
                        </div>

                        
                        <div class="ud-form-group">
                          <label for="appointmentTime">Hora*</label>
                          <input type="text" name="appointmentTime" id="apptTime" disabled>
                        </div>

                        <div class="ud-form-group">
                          <label for="appointmentType">Tipo*</label>
                          <input type="text" name="appointmentType" id="apptType" disabled>
                        </div>

                        <div class="ud-form-group">
                          <label for="appointmentPhone1">Teléfono 1*</label>
                          <input type="text" name="appointmentPhone1" id="apptPhone1" placeholder="809-999-9999">
                        </div>

                        <div class="ud-form-group">
                          <label for="appointmentPhone2">Teléfono 2</label>
                          <input type="text" name="appointmentPhone2" id="apptPhone2" placeholder="809-999-9999">
                        </div>
                        
                        
                        
                    </div> 


              </div> 


              <div class="ud-form-group padT10 floatRight">
                <button type="submit" class="ud-main-btn ">
                    Programar
                </button>
                <button  class="btn btn-danger closeModal">
                    Cancelar
                </button>
              </div>
              

            </form>

      <!-- ====== Content end ====== -->
      </div>
      `;

      mainTitle.innerHTML = "";
      editorContainer.innerHTML = "";
        //Validate both provider and patient have been selected
      const provider = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".citasLeftContent .ud-form-group #selectCitasProvider").value;
      const patient = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".citasLeftContent .ud-form-group #selectCitasPatient").value;
      const tableFieldsArray = e.target.parentElement.querySelectorAll("td");
      
        if(provider.length === 0){

          customAlert("Aún no seleccionas el proveedor!")
            return;

        }else if(patient.length === 0){

          customAlert("Aún no seleccionas el paciente!")
            return;

        }


      mainTitle.innerHTML = "Detalles de la cita"

      editorContainer.innerHTML = apptForm;
      //Add important fields

          //Provider
            const provField = editorContainer.querySelector("#citasProviderName");
                  provField.value = provider;
          //Patient
            const patName = editorContainer.querySelector("#citasPatientName");
                  patName.value = patient;
          //Location
            const apptLocation = editorContainer.querySelector("#apptLocation");
                  apptLocation.value = tableFieldsArray[1].innerHTML;
          //Time
            const apptTime = editorContainer.querySelector("#apptTime");
                  apptTime.value = tableFieldsArray[0].innerHTML;
          //Type
            const apptType = editorContainer.querySelector("#apptType");
                  apptType.value = tableFieldsArray[2].innerHTML;
          //Phone1
            const apptPhone1 = editorContainer.querySelector("#apptPhone1");

        superModal();


    }

   
}

function citasPaste(e){
  //Disallow paste
  if(e.target.classList.contains("filterCitasPro") || e.target.classList.contains("filterCitasPa")){
    e.preventDefault()
    customAlert("No puedes pegar en este campo!");
  }
}

function citasKeyup(e){
    //Filter from table in modal for provider and patient
    if (e.target.classList.contains("filterCitasPro")){

      
      filter(e.target, "citasProBody", checkedIndex(e.target));


    } else if (e.target.classList.contains("filterCitasPa")){

      const index = checkedIndex(e.target);

      //Check for DOB or Tel to only provide 10 characters 
          if(index === 2 || index === 3){
                e.target.setAttribute("maxlength", "10");
          }else{
            e.target.removeAttribute("maxlength");
          }

        filter(e.target, "citasPaBody", index);

    }

} 

function citasContext(e){
  
  //Add the possibility to clear provider and patient field on right click
    //Get targetField
    const targetField = e.target;

    if(targetField.id === "selectCitasProvider" || targetField.id === "selectCitasPatient"){
      //Remove default context menu
      e.preventDefault();
      //Get fieldName
      const fieldName = targetField.parentElement.querySelector("label").textContent.replace("*", "");
      //Check for clearance
      if(targetField.value){
          
        //Clear rightContent data
        if(targetField.id === "selectCitasProvider"){
        
                calendarParent.querySelector(".box").classList.add("np-events");
                calendarParent.setAttribute("style", "cursor: not-allowed;");
          
                  mainRightContentContainer.innerHTML = ""; 

        }
        //Clear targetField
        targetField.removeAttribute("value");
  
        customAlert("Campo \'"+ fieldName.toLowerCase() +"\' limpiado.");
  
      }else{
  
        customAlert("El campo \'"+ fieldName.toLowerCase() +"\' ya está vacío.");
  
      }
    }
}

//CALENDAR
function calendarClick(e){
  
 // If date is changed then selectedDate object changes, if month is changed then selected object persists
 
    //Get clicked date and handle class removals
    if(e.target.tagName.toLowerCase() === "td"){
      if(e.target.parentElement.parentElement.parentElement.id === "calendarTable"){
          let allDays =  e.target.parentElement.parentElement.querySelectorAll("tr>td");

          if(e.target.innerHTML.length !== 0){

              allDays.forEach(element => {
                  
                      if(element.classList.contains("dycalendar-target-date")){
                          element.classList.remove("dycalendar-target-date")
                      }
                              
              });

              selectedDate = {

                  "day":  parseInt(e.target.innerHTML),
                  "month": parseInt(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".dycalendar-header .prev-btn").getAttribute("data-month")),
                  "year": parseInt(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".dycalendar-header .prev-btn").getAttribute("data-year"))
      
              };

              e.target.classList.add("dycalendar-target-date");
              //GET SELECTED DATE and send it over to citas.js
              dateChangeSchedule(selectedDate.day, selectedDate.month+1, selectedDate.year);
               
          }

      }
  }

  //get event object (window.event for IE compatibility)
  e = event || e;

  let
      //get target dom object reference
      targetDomObject = e.target || e.srcElement,

      //other letiables
      date, month, year, btn, option, dateObj;

       
  //prev-next button click
  //extra checks to make sure object exists and contains the class of interest
  if ((targetDomObject) && (targetDomObject.classList) && (targetDomObject.classList.contains("dycalendar-prev-next-btn"))) {


      date = parseInt(targetDomObject.getAttribute("data-date"));
      month = parseInt(targetDomObject.getAttribute("data-month"));
      year = parseInt(targetDomObject.getAttribute("data-year"));
      btn = targetDomObject.getAttribute("data-btn");
      option = JSON.parse(targetDomObject.parentElement.getAttribute("data-option"));
      
      //Add custom selected date obj to option
      option.selectedDate = selectedDate;

      if (btn === "prev") {
          month = month - 1;
          if (month < 0) {
              year = year - 1;
              month = 11;
          }
      }
      else if (btn === "next") {
          month = month + 1;
          if (month > 11) {
              year = year + 1;
              month = 0;
          }
      }

      option.date = date;
      option.month = month;
      option.year = year;

      drawCalendar(option);
  }

  //month click
  //extra checks to make sure object exists and contains the class of interest
  if ((targetDomObject) && (targetDomObject.classList) && (targetDomObject.classList.contains("dycalendar-span-month-year"))) {
      option = JSON.parse(targetDomObject.parentElement.getAttribute("data-option"));
      dateObj = new Date();
      //default
      option.date = dateObj.getDate();
      option.month = dateObj.getMonth();
      option.year = dateObj.getFullYear();
      //default

      option.selectedDate.day = dateObj.getDate();
      option.selectedDate.month = dateObj.getMonth();
      option.selectedDate.year = dateObj.getFullYear();

      dateChangeSchedule(option.selectedDate.day, option.selectedDate.month+1, option.selectedDate.year);

      drawCalendar(option);
  }
}

//DOCUMENTOS
function documentosClick(e){
  
  //selectDocsPatient
  //Summon modal
  if (e.target.id === "selectDocsPatient") {


    editorContainer.innerHTML = "";
    mainTitle.innerHTML = "";

    //Create title input
    const attrNames = ["type", "class", "placeholder"],
      attrValue = ["text", "filterDocsPa", "Filtrar por Nombre"];
    const input = createHtmlElement("input", attrNames, attrValue);

    mainTitle.textContent = "Pacientes ";
    mainTitle.appendChild(input);
    mainTitle.querySelector("input").focus();
    //Create title input

    //Send data to genTable
    const cols = ["Nombre ", "Apellido ", "Fecha de nacimiento ", "Teléfono "];

    const patientData = [

      {
        "name": "Martin Mark",
        "lastName": "Luperon Gozniak",
        "dob": "01/25/2001",
        "phone": "809-999-9999",
      },
      {
        "name": "John Mark",
        "lastName": "Kon Gozniak",
        "dob": "01/25/2201",
        "phone": "809-999-8888",
      }

    ];

    editorContainer.appendChild(genTable(patientData, cols, "docsPaBody"));

    superModal();



  }
  //selectDocsPatient

  //Grab information from modal table for patient selection
  if (e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "docsPaBody") {

    const patientName = e.target.parentElement.querySelector(".pName");
    const inputDocsP = document.querySelector("#docsContent #selectDocsPatient");
    console.log(inputDocsP)
    inputDocsP.setAttribute("value", patientName.innerHTML);


    //Refresh provider's specific patient documents
    //Provider should be able to send, deactivate, create without sending?
    const tableHeaders = ["Paciente", "Fecha", "Documento"];
    provDocs.innerHTML = "";
    provDocs.appendChild(genTable(requestResponse(), tableHeaders, "docTable", false, "docRow"));


    modalRemoval();

  }

  
  //SELFFFFF*************************************************************

  //Create new document
  if (e.target.id === "newDoc") {


    editorContainer.innerHTML = "";
    mainTitle.innerHTML = "";
    editorContainer.innerHTML = newDocForm;
    mainTitle.innerHTML = "Nuevo documento";


    superModal();
  }
  //Delete document
  if (e.target.id === "delDoc") {

    //Look for selection attribute
    const allTrs = e.target.parentElement.parentElement.querySelectorAll(".provDocs #docTable tr");
    let currentTr = false;
    //Get selected tr
    for (let i = 0; i < allTrs.length; i++) {

      if (allTrs[i].hasAttribute("selected")) {
        currentTr = allTrs[i];
        break;
      }

    }
    if (!currentTr) {
      customAlert("No hay ningún documento seleccionado!");
      return;
    }

    //Further deleting stuff
    // Borrar just means deactivate and so the patient won't see it, will still show but with a different markup to
    //Clear docDetails
    docDetails.innerHTML = customH3;
    //Reload docs
    const tableHeaders = ["Paciente", "Fecha", "Documento"];
    provDocs.innerHTML = "";
    provDocs.appendChild(genTable(requestResponse(), tableHeaders, "docTable", false, "docRow"));
    customAlert("Documento borrado")


  }
  //Download document
  if (e.target.id === "downDoc") {

    //Look for selection attribute
    const allTrs = e.target.parentElement.parentElement.querySelectorAll(".provDocs #docTable tr");
    let currentTr = false;
    //Get selected tr
    for (let i = 0; i < allTrs.length; i++) {

      if (allTrs[i].hasAttribute("selected")) {
        currentTr = allTrs[i];
        break;
      }

    }
    if (!currentTr) {
      customAlert("No hay ningún documento seleccionado!");
      return;
    }

              //Further download stuff
              /*  let doc = new jsPDF();
              doc.text('Hello world!', 10, 10)
              doc.save('a4.pdf')
              */

  }
  if (e.target.id === "fileUp"){
      e.preventDefault();
      const fileInput = e.target.parentElement.querySelector("input");
            fileInput.click();
  }

  //Existing document selection
  //Handle document selection
  if (e.target.parentElement.classList.contains("docRow")) {
    //Get all table rows to clean them from any property
    const tableRows = e.target.parentElement.parentElement.querySelectorAll("tr");
    tableRows.forEach(row => {
      //clear selected attribute
      row.removeAttribute("selected");
      row.querySelectorAll("td").forEach(rows => {

        rows.innerHTML = rows.textContent;

      });
    });

    //find doc details
    const row = e.target.parentElement.querySelectorAll("td");
    //Add selection identifier
    row[row.length - 1].innerHTML += ` <i class="lni lni-close ">`;
    //Add selection attribute
    const currentTr = e.target.parentElement;
    currentTr.setAttribute("selected", "");

    const patient = row[0].textContent, date = row[1].textContent, doc = row[2].textContent;

    //DB request for with the provided information returns sample data
    const sampleData = {
      "headerData": {
        "creationDate": "18/12/2021",
        "patient": "Johnny buttons",
        "provider": "Joanna Salas",
        "docType": "Prescripción",
        "expirationDate": "20/10/2022"
      },
      "detailsData": {//Prescripción
        "medication": "Omeprazole 500MG",
        "quantity": "90",
        "instructions": "Una vez al día",
        "serviceCenter": "Carol X",
        "address": "2530 Calle del Sol, hache",
        "phone": "809-999-9999"


      }

    };
    //Change doc details

    docDetails.innerHTML = "";
    const h4 = document.createElement("h4");
    h4.textContent = "Detalles";
    docDetails.appendChild(h4);
    docDetails.appendChild(detailsCreation(sampleData));

    //KEEP GOING DETAILING THIS PART AND CLEAN IT JUST SO IT IS SUMMONED BY THE CLICK EVENT, ADD FILTER? ADD VALIDATION ADD DESELECTION ADD SELECTION MARKER

  }

  //Clear docDetails
  if(e.target.parentElement.parentElement !== null)
  if (e.target.parentElement.parentElement.classList.contains("docRow")) {
    if (e.target.classList.contains("lni-close")) {

      const tableRows = e.target.parentElement.parentElement.parentElement.querySelectorAll("tr");
      tableRows.forEach(row => {
        row.removeAttribute("selected");
        row.querySelectorAll("td").forEach(rows => {
  
          rows.innerHTML = rows.textContent;
  
        });
      });

      docDetails.innerHTML = customH3;
    }
  }
  //Existing document selection
}

function documentosPaste(e){
  //Disallow paste
  if(e.target.classList.contains("filterDocsPa")){
    e.preventDefault()
    customAlert("No puedes pegar en este campo!");
  }
}

function documentosKeyup(e){
  //Filter from table in modal for provider and patient
  if (e.target.classList.contains("filterDocsPa")){

    const index = checkedIndex(e.target);

    //Check for DOB or Tel to only provide 10 characters 
        if(index === 2 || index === 3){
              e.target.setAttribute("maxlength", "10");
        }else{
          e.target.removeAttribute("maxlength");
        }

      filter(e.target, "docsPaBody", index);

  }

}

function documentosContext(e){
  
  //Add the possibility to clear provider and patient field on right click
    //Get targetField
    const targetField = e.target;

    if(targetField.id === "selectDocsPatient"){
      //Remove default context menu
      e.preventDefault();
      //Get fieldName
      const fieldName = targetField.parentElement.querySelector("label").textContent.replace("*", "");
      //Check for clearance
      if(targetField.value){
          
          provDocs.innerHTML = "";
          docDetails.innerHTML = customH3;

        //Clear targetField
        targetField.removeAttribute("value");
  
        customAlert("Campo \'"+ fieldName.toLowerCase() +"\' limpiado.");
  
      }else{
  
        customAlert("El campo \'"+ fieldName.toLowerCase() +"\' ya está vacío.");
  
      }
    }
}

function documentosInput(e){
  
  //file upload for results
  if (e.target.id === "fileInput"){
    if(e.target.value.length < 1){
      e.target.parentElement.querySelector("p").innerHTML = "No has seleccionado ningún archivo.";
      return;
    }
    const valueArray = e.target.value.split("\\");
    const value = valueArray[valueArray.length-1];
    e.target.parentElement.querySelector("p").innerHTML = value;

} else if (e.target.id === "docType"){
  //Handle docType change and leftSide content
  //get selected docType
    const docType = e.target.value;
    const docExpiration = e.target.parentElement.parentElement.parentElement.querySelector("#docExpiration");
    const docLeftSide = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("#docRightSide");

    if (docType === "referido") {

      docExpiration.removeAttribute("disabled");
      docLeftSide.innerHTML = referral;

    }
    if (docType === "prescripcion") {

      docExpiration.removeAttribute("disabled");
      docLeftSide.innerHTML = prescription;

    }
    if (docType === "resultados") {

      //Disable expiration date
      docExpiration.setAttribute("disabled", "");
      docLeftSide.innerHTML = result;

    }
}
}
