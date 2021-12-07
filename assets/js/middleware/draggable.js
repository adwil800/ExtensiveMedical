

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let elmnt;
  /* if present, the header is where you move the DIV from:*/
//Make the DIV element draggagle:


/*DRAGGABLE AND EVENTS */
document.body.addEventListener("mousedown", e => {

  //Bring window to top
  let currentDraggable = parentWorm(e.target, "draggableParent");
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
      const newPatientListener = ["click", "keyup"],
            newPatientCallbacks = [newPatientClick, newPatientKeyup];
            removeListeners(newPatientListener, newPatientCallbacks);
    } else if (e.target.classList.contains("closeDraggableExistingPatient")){
      //Handle window count and initial position
      windowSubstraction(e.target.parentElement.parentElement);

      existingPacientesRightContent = "";
      existingPatientActive = removeDraggable(e.target, "ExistingPatient");
      //remove listeners
      const existingPatientListeners = ["click", "keyup", "context"],
            existingPatientCallbacks = [existingPatientClick, existingPatientKeyup, existingPatientContext];
            removeListeners(existingPatientListeners, existingPatientCallbacks);
    } else if (e.target.classList.contains("closeDraggableControl")){
      //Handle window count and initial position
      windowSubstraction(e.target.parentElement.parentElement);

      controlRightContent = "";
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
 


/*PREVENT DRAGGABLES TO BE MOVED OUTSIDE OF THE SCREEN */

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

window.addEventListener('resize', () => {
  //const browserZoomLevel = (window.outerWidth - 8) / window.innerWidth;
  //console.log(browserZoomLevel)
  //Rearrange window to zoom's minimum value

  //Windows
  if(templateContent.querySelectorAll(".ud-template-form-wrapper") !== null &&
    templateContent.querySelectorAll(".ud-template-form-wrapper").length > 0){
      
    const allWindows = templateContent.querySelectorAll(".ud-template-form-wrapper"); 
        
        allWindows.forEach(e =>  {

          const actualL = e.querySelectorAll("#controlContent .actualList");
          if(actualL !== null){
            actualL.forEach(e => e.setAttribute("style", `top: 0px; left: 0px;`));
          }
          const top = positionArray[e.getAttribute("positionindex")][0], 
                left = positionArray[e.getAttribute("positionindex")][1];
          //Reset positions
          e.setAttribute("style", `top: ${top}px; left: ${left}px;`);
        
        });


  }

  
})

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;

  const top = elmnt.offsetTop-pos2, left = elmnt.offsetLeft-pos1;

  //Get current window size regardless of the zoom level
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  console.log(vw, vh);

  //window limits
  if(elmnt.classList.contains("actualList")){ 
  
    elmnt.style.top = top + "px";
    elmnt.style.left = left + "px";

  }
  //Check for max top and min left
  else if (top <= 38 && left <= 0){

    elmnt.style.top = "38px";
    elmnt.style.left = "0px";

  }
  //Check for max top and max left
  else if (top <= 38 && left >= (vw-1050)){

    elmnt.style.top = "38px";
    elmnt.style.left = (vw-1050)+"px";

  }
  //Check for max top
  else if (top <= 38){
  
    elmnt.style.top = "38px";
    elmnt.style.left = left + "px";
  
  } 
  //Check for min left
  else if (left <= 0){
  
    elmnt.style.top = top + "px";
    elmnt.style.left = "0px";
  
  } 
  //Check for max left
  else if (left >= (vw-1050)){
  
    elmnt.style.top = top + "px";
    elmnt.style.left = (vw-1050)+"px";
  
  } 
  //default
  else {

    // set the element's new position:
    elmnt.style.top = top + "px";
    elmnt.style.left = left + "px";
    
  }
}

function closeDragElement() {
  /* stop moving when mouse button is released:*/
  document.onmouseup = null;
  document.onmousemove = null;
}
/*DRAGGABLE AND EVENTS */






//All listeners functions to be able to remove them once the window is closed
/*CONTROL FUNCTIONS */
function configClick(e){ 

  // General list handling 

  //Preview any list list
   if(e.target.classList.contains("listTrigger")){

        const actualList = configList.querySelector(".actualList"); 
        const tabName = actualList.querySelector(".tabName");
            //remove UL if exists
            const existingUl = actualList.querySelector("ul");
            if(existingUl){
              existingUl.remove();
            }


        //PROVIDER
        if(e.target.parentElement.querySelector("input").id === "provSpecialty"){

          updateList(actualList, tabName, "Especialidades", provSpecialtyArray, "provSpecialtyList");

        }
        
        else if(e.target.parentElement.querySelector("input").id === "provWorkingCenter"){

          updateList(actualList, tabName, "Centros de servicio", provWorkingCenterArray, "provWorkingCenterList");

        } 
        //CONSULTORIOS
        else if(e.target.parentElement.querySelector("input").id === "consSpecialties"){

          updateList(actualList, tabName, "Especialidades", consSpecialtyArray, "consSpecialtiesList");

        }
        else if(e.target.parentElement.querySelector("input").id === "consProviders"){

          updateList(actualList, tabName, "Proveedores", consProviderArray, "consProvidersList");

        }

  }
  else if(e.target.classList.contains("closeDraggableList")){
      e.target.parentElement.parentElement.parentElement.classList.add("hide");
  }
  else if(e.target.classList.contains("removeCurrentElement")){

      const index = e.target.parentElement.textContent.split(":")[0]-1;

      //PROVIDERS 
      //provWorkingCenterArray
      if(e.target.parentElement.parentElement.id === "provWorkingCenterList"){
        console.log(provWorkingCenterArray)
        provWorkingCenterArray.splice(index, 1);
        console.log(provWorkingCenterArray)
        liveReloadList("provWorkingCenter", provWorkingCenterArray, "Centros de servicio")
      }
      //provSpecialtyArray
      else if(e.target.parentElement.parentElement.id === "provSpecialtyList"){
            provSpecialtyArray.splice(index, 1);
            liveReloadList("provSpecialty", provSpecialtyArray, "Especialidades")
        
      }

      //CONSULTORIOS
      //consSpecialtyArray
      else if(e.target.parentElement.parentElement.id === "consSpecialtiesList"){
            consSpecialtyArray.splice(index, 1);
            liveReloadList("consSpecialties", consSpecialtyArray, "Especialidades")
        
      }
      //consProviderArray
      else if(e.target.parentElement.parentElement.id === "consProvidersList"){
            consProviderArray.splice(index, 1);
            liveReloadList("consProviders", consProviderArray, "Proveedores")
        
      }



  }


  // General list handling






  consConfigClick(e);
  providerConfigClick(e);
  tCitasConfigClick(e);
  consScheduleClick(e);
  tSegurosConfigClick(e);
  tEspecialidadConfigClick(e);
}

function configKeyup(e){

  //CONTROL > CONSULTORIOS > NEW > INCLUDE PROV
  if (e.target.classList.contains("filterConsPro")){

    keyupFilter(e.target, "consProBody", true)
      
  } 
  //CONTROL > CONSULTORIOS > EDIT EXISTING
  else if (e.target.classList.contains("filterExistingCons")){

    keyupFilter(e.target, "configConsBody", false)

  }
  //CONTROL > PROVIDERS > NEW > INCLUDE CONS
  else if (e.target.classList.contains("filterProCons")){

    keyupFilter(e.target, "proConsBody", true)

  }
  //CONTROL > PROVIDERS > EDIT EXISTING
  else if (e.target.classList.contains("filterConfigProv")){

    keyupFilter(e.target, "configProvBody", true)

  } 
  //CONTROL > PROVIDERS > EDIT EXISTING
  else if (e.target.classList.contains("filterConfigTCita")){

    keyupFilter(e.target, "configTCitaBody", true)

  }
  else if (e.target.classList.contains("filterConfigTSeguros")){

    keyupFilter(e.target, "configTSegurosBody", true)

  }
  else if (e.target.classList.contains("filterConfigEspecialidad")){

    keyupFilter(e.target, "configEspecialidadBody", true)

  }
  
  //CONTROL > SCHEDULE > EDIT EXISTING
  else if (e.target.classList.contains("filterSchedECons")){

    keyupFilter(e.target, "schedConsBody", false)

  }
  
  
} 


function calendarClickSchedMaker(e){
  
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
               dateChangeSchedMaker(selectedDate.day, selectedDate.month+1, selectedDate.year);
                
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

/*CONTROL FUNCTIONS */







/*EXISTING PATIENTS FUNCTIONS */
function existingPatientClick(e){  
  

  if(e.target.id === "existingPersonalTab"){ 
 
      //Set selected button
          let buttonsParent = e.target.parentElement.parentElement;
          removeAllClasses(buttonsParent, "selectedBtn", "button");
          e.target.classList.add("selectedBtn");

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
          removeAllClasses(buttonsParent, "selectedBtn", "button");
          e.target.classList.add("selectedBtn");

    //Send data to genTable
          const cols = ["Paciente", "Ubicación ", "Fecha ", "Hora", "Tipo", "Proveedor"];

          const patientData = [
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
                

            tableViewer.appendChild(genTable(patientData, cols, "existingPatientApptBody", false, "existingPatientApptRow"));

  }

  //Select existing patient with modal 
  if(e.target.id === "selectExistingPatient"){
     

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
      modalFieldSelection("filterExistingPatient", "Pacientes ", cols, patientData, "existingPaBody");

          
  }

  //Grab information from modal table for patient selection
  if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "existingPaBody"){
                
    const patientName = e.target.parentElement.querySelector(".pName");
    const inputExistingP = document.querySelector("#existingPatientContent #selectExistingPatient");

      //Enable buttons
      const buttons = inputExistingP.parentElement.parentElement.querySelectorAll("button");
      //Grab personal button and add selectedBtn class to set active state
      if(!inputExistingP.hasAttribute("value"))
          buttons[0].classList.add("selectedBtn");

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

  if (e.target.classList.contains("filterExistingPatient")){
      
      keyupFilter(e.target, "existingPaBody", false)

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
        //Disable buttons and remove selectedBtn
        const buttons = targetField.parentElement.parentElement.querySelectorAll("button");
              buttons.forEach(e => {
                  e.classList.add("disableBtn");
                  e.classList.remove("selectedBtn")
              });
        customAlert("Campo \'"+ fieldName.toLowerCase() +"\' limpiado.");
  
      }else{
  
        customAlert("El campo \'"+ fieldName.toLowerCase() +"\' ya está vacío.");
  
      }
    }
} 
/*EXISTING PATIENTS FUNCTIONS */






/*CITAS FUNCTIONS */
function citasClick(e){
  
  //Forbidden click alert
  if(e.target.id === "calendarSection"){
    customAlert("Aún no seleccionas el proveedor!")
  }

  //selectCitasProvider 
    //Summon modal
    if(e.target.id === "selectCitasProvider"){


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
      modalFieldSelection("filterCitasPro", "Proveedores ", cols, sampleData, "citasProBody");

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
        modalFieldSelection("filterCitasPa", "Pacientes ", cols, patientData, "citasPaBody");

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
    if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.classList.contains("appt")){

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
    
  if (e.target.classList.contains("filterCitasPro")){
    
    keyupFilter(e.target, "citasProBody", true)
  
  }else if(e.target.classList.contains("filterCitasPa")){

    keyupFilter(e.target, "citasPaBody", false)

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
/*CITAS FUNCTIONS */




/*NEW PATIENT FUNCTIONS */
async function newPatientClick(e){ 



  //Set modal selection for provider and 



  //Select existing patient with modal 
  if(e.target.id === "providerName"){
     

      //Create title input

      //Send data to genTable
      const cols = ["Nombre ", "Apellido ", "Ubicación ", "Especialidad ", "Título"];

      //DB request
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
      modalFieldSelection("filterNewPatientProv", "Proveedores ", cols, sampleData, "newPatientProviderBody");

          
  }

  //Grab information from modal table for patient selection
  else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "newPatientProviderBody"){
                
    const logs = e.target.parentElement.querySelectorAll("td");
    const provCode = logs[0].textContent;
    const provName = logs[1].textContent;

    const patientProvider = newPatientContent.querySelector("#providerName");
    console.log(provCode, provName, patientProvider);
    patientProvider.setAttribute("value", provName);
      modalRemoval();

  }

  else if(e.target.id === "registerNewPatient"){

    //Validate all fields
  
    //Get all fields
    const parentDiv = e.target.parentElement.parentElement;

    //Obligatorios
      const names = parentDiv.querySelector("#names");
       if(!validateEmptyField(names, "Nombres"))
            return;

      const lastNames = parentDiv.querySelector("#lastNames");
      if(!validateEmptyField(lastNames, "Apellidos"))
            return;

      const sex = parentDiv.querySelector("#sex");
      if(!validateEmptyField(sex, "Sexo"))
            return;

      const dob = parentDiv.querySelector("#dob");
      if(!validateEmptyField(dob, "Fecha de nacimiento"))
            return;

      const address = parentDiv.querySelector("#address");
      if(!validateEmptyField(address, "Dirección"))
            return;

      const phone1 = parentDiv.querySelector("#phone1");
      if(!validateEmptyField(phone1, "Teléfono móvil"))
            return;


      const provincia = parentDiv.querySelector("#provincia");
      if(!validateEmptyField(provincia, "Provincia"))
            return;
      

    //Optional
    const email = parentDiv.querySelector("#email").value || null;
    const phone2 = parentDiv.querySelector("#phone2").value || null;
    const emerName = parentDiv.querySelector("#emerName").value || null;
    const emerPhone = parentDiv.querySelector("#emerPhone").value || null;
    const idProvider = parentDiv.querySelector("#providerName").value || null;
    const patAllergies = parentDiv.querySelector("#patAllergies").value || null;
    const idSeguro = parentDiv.querySelector("#insurance").value || null;
    const numSeguro = parentDiv.querySelector("#insuranceId").value || null;

    // YOU ARE HERE, GO TO THE API AND CONTINUE FIXING THE INSERT, THEN PULL ALL SELECT ITEMS FROM DB

    const dataObj = {
            names: names.value,
            lastNames: lastNames.value,
            sex: sex.value,
            dob: dob.value,
            address: address.value,
            phone1: phone1.value,
            provincia: provincia.value,
            
            email,
            phone2,
            emerName,
            emerPhone,
            idProvider,
            patAllergies,
            idSeguro,
            numSeguro
    };


   // console.log("names: "+ names, "lastNAmes: " +lastNames, "Sex: "+ sex, "DOB: "+ dob, "Address: "+ address, "phone1 : " +phone1, "prov: "+ provincia);
   // console.log("email: "+email, "phone: "+ phone2, "emerN: "+emerName, "emerP: "+emerPhone, "PNAME: "+providerName, "paTALLRG: "+patAllergies);
    const reqResult = await postRequest("/em/api/patients/new", dataObj);


  }



}


function newPatientKeyup(e){

  if (e.target.classList.contains("filterNewPatientProv")){
      
      keyupFilter(e.target, "newPatientProviderBody", false)

  }

}

/*NEW PATIENT FUNCTIONS */





/*CALENDAR FUNCTIONS */ 
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
/*CALENDAR FUNCTIONS */ 





/*DOCUMENTOS FUNCTIONS */
function documentosClick(e){
  
  //selectDocsPatient
  //Summon modal 
  if (e.target.id === "selectDocsPatient") {

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
    modalFieldSelection("filterDocsPa", "Pacientes ", cols, patientData, "docsPaBody");

  }
  //selectDocsPatient

  //Grab information from modal table for patient selection
  if (e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "docsPaBody") {
        console.log(e.target.parentElement.parentElement)
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

      keyupFilter(e.target, "docsPaBody", false)

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
/*DOCUMENTOS FUNCTIONS */
