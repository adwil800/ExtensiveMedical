

/*QUALITY OF LIFE FUNCTIONS */ 
/**
 * This function will alert a message at the bottom of the page
 * 
 * @param {string} message message to display
 *  must be on file

        <div class="cAlert ">
            <h2></h2>
        </div>
  */
function customAlert(message) {
  //Get elements
  const alerta = document.querySelector(".cAlert"),
    alertaMessage = alerta.querySelector("h2");
  //Set message
  alertaMessage.innerHTML = message;
  //Remove current alert and timeout
  alerta.removeAttribute("style");
  let id = window.setTimeout(function () { }, 0);
  while (id--) {
    window.clearTimeout(id);
  }
  //Display
  $(alerta).fadeIn(500);
  //hide
  setTimeout(() => {
    $(alerta).fadeOut(500);

  }, 2000);

}
/**
 * This function will create an html element with requested attributes
 * 
 * @param {string} tag HTML tag of element to create
 * @param {Array}attrName attrName: array of attribute names or single name
 * @param {Array}attrValue: array of attribute values or single value
 * @returns html_element  
 */
function createHtmlElement(tag, attrName, attrValue) {

  if (typeof (tag) !== "string") {
    console.error("Unknown tag type of value");
    return;
  }
  const element = document.createElement(tag);
  //Check if array for multiple attributes
  if (Array.isArray(attrName) && Array.isArray(attrValue)) {

    if (attrName.length !== attrValue.length) {
      console.error("Different length of attribute names and values.");
      return;
    }

    for (let i = 0; i < attrName.length; i++) {

      element.setAttribute(attrName[i], attrValue[i]);

    }

  } else if (typeof (attrName) === "string" && typeof (attrValue) === "string") {
    //Check if string for single attribute
    element.setAttribute(attrName, attrValue);

  }else if (Array.isArray(attrName) && typeof (attrValue) === "string") {
    //Check if string for single attribute
    for (let i = 0; i < attrName.length; i++) {

      element.setAttribute(attrName[i], attrValue);

    }

  } else {

    console.error("Mixed parameter types, expected (String, Array, Array), (String, String, String) or (String, Array, String)");
    return;
  }


  return element;

}
/**
 * This function will generate a table.
 *
 * @param {JSON} data: Json that contains the data
 * @param {Array} cols: table headers
 * @param {string} bodyId: table body identifier for clicking event
 * @param {boolean} addRadio: Add radio fields to headers for advanced filtering
 * @param {string} addTrClass: Add class to Tr, defaults to false, else class string
 * @returns html 
 */
function genTable(data, cols, bodyId, addRadio = true, addTrClass = false) {
  //Create table
  const table = createHtmlElement("table", "class", "table table-dark table-hover");
  //Create thead
  const thead = document.createElement("thead");

  //Create tr and th's
  const theadTr = document.createElement("tr");
  for (let i = 0; i < cols.length; i++) {
    const th = document.createElement("th");
    th.textContent = cols[i];

    //Ask if radio buttons are requested
    if (addRadio) {
      //Add radio button for filter selection
      const radioTh = createHtmlElement("input", ["type", "class"], ["radio", "form-check-input thRadio"]);
      if (i === 0) {
        radioTh.checked = true;
      }
      //Add radio button for filter selection
      //Append to th
      th.appendChild(radioTh);
    }

    //Append to tr
    theadTr.appendChild(th);
  }

  //Append to thead
  thead.appendChild(theadTr);
  //Append to table
  table.appendChild(thead);

  //Create tbody
  const tbody = createHtmlElement("tbody", "id", bodyId);

  //Loop through data
  data.forEach(e => {

    //Create tr
    const tbodyTr = document.createElement("tr");
    //Add tr class if requested
    if (addTrClass) {
      tbodyTr.setAttribute("class", addTrClass);
    }
    for (key in e) {

      //Create td 
      const td = document.createElement("td");
      //Add pName
      if (key === "name") {
        td.setAttribute("class", "pName");
      }
      //Add content
      td.innerHTML = e[key]; //td.textContent ;; originally
      //Append to tr
      tbodyTr.appendChild(td);

    }
    //Append to tbody
    tbody.appendChild(tbodyTr);

  });

  table.appendChild(tbody);

  return table;
}
/**
 * This function will return requested parent object
 *
 * @param {HTMLElement} element HTML tag of element to create
 * @param {string} parentTarget class to look for
 * @returns {HTMLElement} 
 */
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
/**  
   * A function to generate modal table with provided information
   * 
   * @param {string} filterClass Filter input class identifier for keyup event
   * @param {string} modalTitle Modal title
   * @param {Array} tableCols Cols for the table to  generate
   * @param {JSON} tableContent Json object with table's content
   * @param {string} tbodyId tbody identifier for click event
   */
function modalFieldSelection (filterClass, modalTitle, tableCols, tableContent, tbodyId){

    //Empty modal
    editorContainer.innerHTML = "";
    mainTitle.innerHTML = "";

    //Create title input
    const attrNames = ["type", "class", "placeholder"],
    attrValue = ["text", filterClass, "Filtrar por "+tableCols[0]];
    const input = createHtmlElement("input", attrNames, attrValue);
    
    //Set title and filter input
    mainTitle.textContent = modalTitle;
    mainTitle.appendChild(input);
    mainTitle.querySelector("input").focus();

    editorContainer.appendChild(genTable(tableContent, tableCols, tbodyId));
    superModal();

}
/**
 * This function will remove a class from all elements in a parent
 *
 * @param {HTMLElement} parent contains all childs to remove a class
 * @param {string}classToRemove class to remove
 * @param {string} selector tag of elements to remove a class from
 */
function removeAllClasses(parent, classToRemove, selector){

  //Enable buttons
  const allElements = parent.querySelectorAll(selector);
    allElements.forEach(e => {
        e.classList.remove(classToRemove);
    });

}
/**
 * This function will bring the requested window to the front
 *
 * @returns {boolean} 
 */
function removeTopWindow(){
  const allWindows = document.querySelectorAll("#templateContent .draggableParent");
        allWindows.forEach(e => e.classList.remove("topDraggable"));
        return true;
}
/**
 * This function will filter from given table.
 *
 * @param {HTMLElement} target: Html element to work on
 * @param {string} parentId: table body identifier for parent selection
 * @param {Number} filterBy: filter by column number
 * @returns html 
 */
 function filter(target, parentId, filterBy){

  //Get input
  const input = target.value.toLowerCase().replace(/[\/-]/g, "");
  //Get all items    
  const fields = target.parentElement.parentElement.parentElement
                 .parentElement.querySelectorAll(`#${parentId}>tr`);

  for (let i = 0; i < fields.length; i++) {

      //Get all td from current tr
      const tds = fields[i].querySelectorAll("td");
      //Get current filter field text content
      const currentText = tds[filterBy].innerHTML.replace(/[\/-]/g, "");

      if (currentText.toLowerCase().indexOf(input) != -1) {
          fields[i].classList.remove("hide");
        } else {
          fields[i].classList.add("hide");
        }

  }

}
/**
* This function will return the checked radio button index.
*
* @param {HTMLElement} target: Html element to work on
* @returns int 
*/
function checkedIndex(target){

const fRadios = target.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".table>thead>tr>th")

  for (let i = 0; i < fRadios.length; i++) {

    const radioInput = fRadios[i].querySelector(".thRadio");

    if(radioInput.checked === true){
        return i;
    }

  }

return 0;

}
/*QUALITY OF LIFE FUNCTIONS */ 



/*EVENTS QUALITY OF LIFE FUNCTIONS */ 
/**
 * 
 * @param {HTMLElement} element: filter field
 * @param {string} tbodyId: table body ID to filter on
 * @param {boolean} filterAll: Defaults to false, true for filtering without field max length, else add 10 as max length
 */
 function keyupFilter(element, tbodyId, filterAll = false){
  //Filter from table in modal for provider and patient
  if (filterAll){

    element.removeAttribute("maxlength");
    filter(element, tbodyId, checkedIndex(element));

  } else {

      const index = checkedIndex(element);
      //Check for DOB or Tel to only provide 10 characters 
        if (index === 2 || index === 3){
          element.setAttribute("maxlength", "10");
        } else {
          element.removeAttribute("maxlength");
        }

      filter(element, tbodyId, index);

  }
  
}
/*EVENTS QUALITY OF LIFE FUNCTIONS */ 









/*INDEX QUALITY OF LIFE FUNCTIONS */ 
/**
 * 
 * @param  {string}file: Path to link or script
 * @param  {HTMLElement}parent: html container
 * @param  {string}fileClass: file class for deletion
 * @param  {string}fileTag: file tag for creation
 * @returns {Promise} 
 */
function loadFile(file, parent, fileClass, fileTag){

  let attr1 = [], attr2 = [];
  if (fileTag === "link"){
    //push attributes
      attr1.push("rel", "stylesheet");
      attr2.push("href", file);

  } else if (fileTag === "script"){
        
      attr1.push("type", "text/javascript");
      attr2.push("src", file);

  }

  var scr = document.createElement(fileTag);
            scr.setAttribute(attr1[0], attr1[1]);
            scr.setAttribute(attr2[0], attr2[1]);
            scr.setAttribute("class", fileClass);

    return new Promise((resolve, reject) => {

        scr.onload = e => resolve(e);
        scr.onerror = e => reject(e);
        parent.appendChild(scr);

    });


}
/**
 * This function will organize new window position 
 * @returns {boolean}
 */
function windowAddition(){//CHECKED
  windowCount++;
  const wPos = handleWindowPositioning();

  if(wPos === false){
    console.error("Something went wrong in handleWindowPositioning() function.");
    topPosition+= 33;
    leftPosition+= 33;
    return;
  }
  //Add selected prefix
  topPosition = positionArray[wPos][0];
  leftPosition = positionArray[wPos][1];
  positionArray[wPos][2] = true;
  //Return index
  return wPos;

}
/**
 * This function will remove a window count and free a position index from window positioning array
 * @param {HTMLElement} parentDraggable: window to get position index to organize new windows
 */
function windowSubstraction(parentDraggable){//CHECKED
  windowCount--;
  //Free taken position prefix
  const posIndex = parentDraggable.getAttribute("positionindex");
  positionArray[posIndex][2] = false;
  //Remove attribute
  parentDraggable.removeAttribute("positionindex");
}
/**
 * This function will check for free positions for new window
 * @returns {Number} : next available position
 */
function handleWindowPositioning(){//CHECKED

      for (let i = 0; i < positionArray.length; i++) {
          // check for array[i][2] and see if it's taken, if true then ignore, else take
          if (positionArray[i][2] === false){
                return i;
            }

      }

      return false;
}

/**
 * This function will restore a minimized window handling its position
 * @param {HTMLElement} window: Parent draggable to maximize
 */
function removeMinimized(window){

  //Remove remove any other top window
  removeTopWindow();
  //Add to top
  window.classList.add("topDraggable");
  //Add to available position
  window.setAttribute("positionindex", windowAddition());
  //Reposition window
  window.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);
  //Remove minimized
  window.classList.remove("hide");
  
  const windowName = window.querySelector(".tabName").getAttribute("windowName");

  //Look for minimized Btn
  const minimized = document.querySelector(".minimizedWindows");
  const minWindowBtn = minimized.querySelector("#max"+windowName);
        minWindowBtn.remove();
        if(minimized.querySelectorAll("button").length < 1){

          minimized.classList.add("hide");

        }

}

/**
 * 
 * Returns a select element as string
 * @param {Object} options JSON that contains key-value pair with the select value and textcontent
 * @param {string} id select id
 * @returns 
 */

function selectOptions(options, id){

  //Receives json object and produces a set of options for a select tag

  let select = `<select id="${id}">`;
  let valuesArray = [];
  select += `<option value="null">Selecciona</option>`;

  for (let i = 0; i < options.data.length; i++) {

    for (const value in options.data[i]) {

      valuesArray.push(options.data[i][value]);

    }

     select += `<option value="${valuesArray[0]}">${valuesArray[1]}</option>`;

    valuesArray = [];

  }

  select += `</select>`

  return select;

}


/*INDEX QUALITY OF LIFE FUNCTIONS */ 






/*REQUESTS QUALITY OF LIFE FUNCTIONS */ 
function requestResponse() {


  const sampleData = [
    {
      "pName": "John Mark",
      "date": "05/21/2019",
      "type": "Resultados",
    },
    {
      "pName": "John Mark",
      "date": "05/21/2019",
      "type": "Resultados",
    },
    {
      "pName": "John Mark",
      "date": "05/21/2019",
      "type": "Resultados",
    },
    {
      "pName": "John Mark",
      "date": "05/21/2019",
      "type": "Resultados",
    },
  ];
  return sampleData;
}
/*REQUESTS QUALITY OF LIFE FUNCTIONS */ 





/*DOCS QUALITY OF LIFE FUNCTIONS */ 
function detailsCreation(data) {//CHECKED

  //Parent
  const row = createHtmlElement("div", "class", "row");
  const line = createHtmlElement("div", "class", "line");
  //Child
  let elArray = [], divide = true;
  for (let i = 0; i < 4; i++) {

    elArray[i] = createHtmlElement("div", "class", "col-lg-6");
    elArray[i].appendChild(detailsList(data, divide));

    //Ternary operator
    divide === true ? divide = false : divide = true;

    row.appendChild(elArray[i]);
    if (i === 1) {

      row.appendChild(line);

    }

  }

  return row;

}
function detailsList(data, divide = false) {//CHECKED

  const ul = document.createElement("ul");
  //li's
  let count = 0;

  for (parentKey in data) {
    //Get current parent length to divide
    const dataLength = Math.ceil(Object.keys(data[parentKey]).length / 2);

    for (key in data[parentKey]) {

      const li = document.createElement("li");
      const span = createHtmlElement("span", "class", "tag");
      span.textContent = key + ":";

      li.textContent = " " + data[parentKey][key];
      li.insertBefore(span, li.childNodes[0]);
      ul.appendChild(li);

      //Check for length and count to make sure it is divided and return the list
      count++;
      if (divide && count === dataLength) {
        //Remove json key:value
        delete data[parentKey][key];
        //Divide columns
        return ul;
      }
      //Remove json key:value
      delete data[parentKey][key];

    }
    //Remove parent
    delete data[parentKey];
    return ul;
  }

}
/*DOCS QUALITY OF LIFE FUNCTIONS */ 





/*CONFIG EVENTS QUALITY OF LIFE FUNCTIONS */ 
async function consConfigClick(e){ //CHECKED
  
  //mantCons
  if (e.target.id === "mantConsultorios" || e.target.id === "backToMantCons"){
    //Get menu Btns
    if (e.target.id === "mantConsultorios"){
      removeAllClasses(parentWorm(e.target, "configMenu"), "selectedBtn", "button");
      e.target.classList.add("selectedBtn"); 
    }
    //Empty lists
    consProviderArray = [];
    consSpecialtyArray = [];
    //Add buttons
      controlRightContent.innerHTML = `
      <div class="row centerSubForm">
        <div class="col-lg-8 offset-2 ">

          <h4><a href="#" id="editConsBtn">Edita un consultorio existente</a> o <a href="#" id="newConsBtn"> crea uno nuevo</a></h4>

        </div>
      </div>
    `;

  }
  //mantCons > newCons
  else if (e.target.id === "newConsBtn"){

    //Empty lists
    consProviderArray = [];
    consSpecialtyArray = [];
    //Stop link activity
     e.preventDefault();
    //Add content
    controlRightContent.innerHTML = newConsultorio;

  }
  //mantCons > editCons
  else if (e.target.id === "editConsBtn"){

    //Empty lists
    consProviderArray = [];
    consSpecialtyArray = [];

    //Stop link activity
      e.preventDefault();
    //Add modalContent 
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
      modalFieldSelection("filterExistingCons", "Consultorios ", cols, consData, "configConsBody");

  }
  //mantCons > editCons > modal > editConsForm
  else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "configConsBody"){
          
    //Get consName and Id, vvvv array
    const logs = e.target.parentElement.querySelectorAll("td");

    //Request all information from BD to proceed and update if needed

    //Add editCons fields
    controlRightContent.innerHTML = newConsultorio;

    //Get specific fields from editCons

    const consName = controlRightContent.querySelector("#consName"),
          consAddress = controlRightContent.querySelector("#consDir"),
          consRnc = controlRightContent.querySelector("#consRnc"),
          consPhone = controlRightContent.querySelector("#consPhone"),
          consSpecialty = controlRightContent.querySelector("#consSpecialties"),
          consWorkDays = controlRightContent.querySelectorAll(".checkGroup input"),
          consDaysTimes = controlRightContent.querySelectorAll(".checkGroup .dayTime"),
          consProviders = controlRightContent.querySelector("#consProviders");




      modalRemoval();

  }
  //mantCons > editCons > modal > editConsForm && mantCons > editCons >  newCons
  //Provider list for cons
  else if(e.target.id === "consProviders"){

          //Create title input

        //Send data to genTable
        const cols = ["Código ", "Nombre ", "Apellido ", "Ubicación ", "Especialidad ", "Título "];

        const providersData = [
          {
            "id": "mMArk10",
            "name": "Martin Mark",
            "lastName": "Luperon Gozniak",
            "location": "Consult MD",
            "specialty": "Pediatra",
            "title": "Medical doctor"
          },
          {
            "id": "mMArk10",
            "name": "Test",
            "lastName": "Provider",
            "location": "Test",
            "specialty": "Test",
            "title": "Test"
          }
                ];
      modalFieldSelection("filterConsPro", "Proveedores ", cols, providersData, "consProBody");
  }
  //Provider list for cons
  else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "consProBody"){
          
    //Get consName and Id, vvvv array
    const logs = e.target.parentElement.querySelectorAll("td");

    //Request all information from BD to proceed and update if needed

    //Get specific fields from editCons

    const consProviders = controlRightContent.querySelector("#consProviders");
    const listedInput = consProviders.parentElement;
 
    //Add selected provider into array
    if(!repeatedItem(consProviderArray, logs)){
      updateInputLink(consProviderArray, listedInput);
      modalRemoval();
    } 

  }


  //Specialty list for cons
  else if(e.target.id === "consSpecialties"){

        //Create title input
      //Send data to genTable
      const cols = ["Código ", "Especialidad "];

     const specData = await selectQuery("select * from especialidad;");

      modalFieldSelection("filterConsSpec", "Especialidades ", cols, specData.data, "consSpecialtyBody");

  }
    //Provider list for cons
  else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "consSpecialtyBody"){
        
    //Get consName and Id, vvvv array
    const logs = e.target.parentElement.querySelectorAll("td");
    
    const consSpecialties = controlRightContent.querySelector("#consSpecialties");
    const listedInput = consSpecialties.parentElement;
 
    //Add selected provider into array
    if(!repeatedItem(consSpecialtyArray, logs)){
      updateInputLink(consSpecialtyArray, listedInput);
      modalRemoval();
    }
      
  }



  
    //mantCons

}

async function providerConfigClick(e){ //CHECKED 
  
 //mantProv *
 if (e.target.id === "mantProveedores" || e.target.id === "backToMantProv"){

    //Get menu Btns
    if (e.target.id === "mantProveedores"){
        removeAllClasses(parentWorm(e.target, "configMenu"), "selectedBtn", "button");
        e.target.classList.add("selectedBtn"); 
    }
    //Set selected btn
    //Clear list
      provSpecialtyArray = [];
      provWorkingCenterArray = [];

    //Add buttons
      controlRightContent.innerHTML = `
      <div class="row centerSubForm">
        <div class="col-lg-8 offset-2 ">

          <h4><a href="#" id="editProvBtn">Edita un proveedor existente</a> o <a href="#" id="newProvBtn"> crea uno nuevo</a></h4>

        </div>
      </div>
    `;

  } 
  //mantProv > newProv
  else if (e.target.id === "newProvBtn"){

    //Stop link activity
     e.preventDefault();

    //Empty lists
    provSpecialtyArray = [];
    provWorkingCenterArray = [];
    //Add content
    controlRightContent.innerHTML = await newMantProvider(); //New provider form 

  }
  
  //mantProv > editProv
  else if (e.target.id === "editProvBtn"){

    //Empty lists
    provSpecialtyArray = [];
    provWorkingCenterArray = [];
    
    //Stop link activity
      e.preventDefault();
    //Add modalContent 
    const cols = ["Nombre ", "Apellido ", "Ubicación ", "Especialidad ", "Título "];

    const providersData = [
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
      modalFieldSelection("filterConfigProv", "Proveedores ", cols, providersData, "configProvBody");


  }
  //mantProv > editProv > modal > editProvForm
  else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "configProvBody"){
          //FILL ALL FIELDS
    //Get consName and Id, vvvv array
    const logs = e.target.parentElement.querySelectorAll("td");

    //Request all information from BD to proceed and update if needed

    //Add editCons fields
    controlRightContent.innerHTML = await newMantProvider(); //New provider form 

    //Add all lists
    //Get specific fields from editCons

    /*const consName = controlRightContent.querySelector("#consName"),
          consAddress = controlRightContent.querySelector("#consDir"),
          consRnc = controlRightContent.querySelector("#consRnc"),
          consPhone = controlRightContent.querySelector("#consPhone"),
          consSpecialty = controlRightContent.querySelector("#consSpecialties"),
          consWorkDays = controlRightContent.querySelectorAll(".checkGroup input"),
          consDaysTimes = controlRightContent.querySelectorAll(".checkGroup .dayTime"),
          consProviders = controlRightContent.querySelector("#consProviders");*/

      modalRemoval();

  }
  //mantProv > editProv & newProv > modal > editProvForm & newProv > provWorkingCenter 
  else if(e.target.id === "provWorkingCenter"){

    //Show modal
      const cols = ["Código ", "Nombre ", "Dirección ", "Días laborables "];


      const consData1 = await selectQuery("select c.idCentro, ter.nombre, c.direccion from centro as c join tercero as ter on c.idTercero = ter.idTercero;");


      const consData = [
          {
            "id": "ch20",
            "name": "Consult MD",
            "address": "Calle 12, Street 12, hun 12 ",
            "days": "L-V",
          },
          {
            "id": "ch21",
            "name": "La charra",
            "address": "Calle 12, Street 12, hun 12 ",
            "days": "L-S",
          }
                ];

      modalFieldSelection("filterProCons", "Consultorios ", cols, consData, "proConsBody");
  }
  //mantProv > editProv & newProv  > editProvForm & newProv > provWorkingCenter > modal
  else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "proConsBody"){
    //Request all information from BD to proceed and update if needed

    //Get specific fields from editCons

      const logs = e.target.parentElement.querySelectorAll("td");

      //Get specific fields from editCons
    const provCenters = controlRightContent.querySelector("#provWorkingCenter");
      const listedInput = provCenters.parentElement;
 
      if(!repeatedItem(provWorkingCenterArray, logs)){
        updateInputLink(provWorkingCenterArray, listedInput);
        modalRemoval();
      }
        

  } 
  //Prov specialty select
  else if (e.target.id === "provSpecialty"){
     //Show modal
     const cols = ["Código ", "Especialidad "];

     const specData = await selectQuery("select * from especialidad;");


     modalFieldSelection("filterProSpec", "Especialidades ", cols, specData.data, "provSpecBody");
  }
  else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "provSpecBody"){

    //Get consName and Id, vvvv array
    const logs = e.target.parentElement.querySelectorAll("td");
    //Request all information from BD to proceed and update if needed

    //Get specific fields from editCons

    const provSpecialty = controlRightContent.querySelector("#provSpecialty");
    const listedInput = provSpecialty.parentElement;
 
    if(!repeatedItem(provSpecialtyArray, logs)){
      updateInputLink(provSpecialtyArray, listedInput);
      modalRemoval();
    }
      

  }

  //REGISTER NEW PATIENT
  else if(e.target.id === "registerNewProvider"){

      /*
      provFirstName
      provLastName
      provSpecialty : provSpecialtyArray
      provSex
      provPhone
      
      provDescription
      provWorkingCenter: provWorkingCenterArray
      */
    

    const name = controlRightContent.querySelector("#provFirstName");
    if(!validateEmptyField(name, "Nombres"))
          return;
    const lastName = controlRightContent.querySelector("#provLastName");
    if(!validateEmptyField(lastName, "Apellidos"))
          return;
    if(provSpecialtyArray.length < 1){
      customAlert("El proveedor debe tener al menos una especialidad");
      return;
    }

    const sex = controlRightContent.querySelector("#provSex");
    if(!validateEmptyField(sex, "Sexo"))
        return;
    const phone = controlRightContent.querySelector("#provPhone");
    if(!validateEmptyField(phone, "Teléfono"))
          return;
    const description = controlRightContent.querySelector("#provDescription");
    if(!validateEmptyField(description, "Descripción"))
          return;

    //provWorkingCenterArray
    if(provWorkingCenterArray.length < 1){
      customAlert("El proveedor debe tener al menos un centro de servicio");
      return;
    }



    //Just got to make the route in the API and post it
    
    


  }


} 



function repeatedItem(list, row){

  for (let i = 0; i < list.length; i++) {

      if(list[i][0] == row[0].textContent){
        //exists then alert
        customAlert(row[1].textContent+" ya existe en la lista");
        return true;
      }

  }

  //doesn't exist, then add
  list.push([row[0].textContent, row[1].textContent]);
  return false;

} 
function updateInputLink(list, listParent, hide=true){

    //Remove existing list trigger
    const listTrigger = listParent.querySelector(".listTrigger");
        if(listTrigger){
          listTrigger.remove();
        }

    //Add list trigger
    if(list.length > 0){
      listParent.innerHTML += `<span class="listTrigger">${list[0][1]}...(${list.length})</span>`
    }
    //hide list draggable
    if(hide){
      configList.classList.add("hide");
    }

}
function updateList(actualList, tabName, listName, list, listId){
  

  tabName.textContent = listName;

  const ul = document.createElement("ul");
        ul.id = listId;

  //read all values
  for (let i = 0; i < list.length; i++) {

    const li = document.createElement("li");
          li.textContent = (i+1)+": "+list[i][1] + " ";

    const icon = createHtmlElement("i", "class", 
                                        "fas fa-times removeCurrentElement");      
          li.insertBefore(icon, li.nextSibling);
          ul.appendChild(li);

  }

  actualList.appendChild(ul);
  configList.classList.remove("hide");


}
function liveReloadList(inputId, array, listName){


  const listInput = controlRightContent.querySelector("#"+inputId);
  const listedInputGroup = listInput.parentElement;
  //Updates list trigger
  updateInputLink(array, listedInputGroup, false);
  
  if(array.length < 1){
    configList.classList.add("hide");
    return;
  }


  //Update opened list
  const actualList = configList.querySelector(".actualList"); 
  const tabName = actualList.querySelector(".tabName");
  const existingUl = actualList.querySelector("ul");
    if(existingUl){
      existingUl.remove();
    }

  updateList(actualList, tabName, listName, array, inputId+"List");

}



function validateEmptyField(field, fieldName){

  const value = field.value || false;

  if(!value || value === null || value === undefined || value.length === 0 || value === "" || value === "null" ){

   
      customAlert("El campo "+fieldName+" es obligatorio");
      field.focus(); 
    
    return false;
  }

  return true;

}




























async function tCitasConfigClick(e){ //CHECKED
  
  //mantCitas *
  if (e.target.id === "mantCitas" || e.target.id === "backToMantCitas"){//DONE
 
     //Get menu Btns
     if (e.target.id === "mantCitas"){
         removeAllClasses(parentWorm(e.target, "configMenu"), "selectedBtn", "button");
         e.target.classList.add("selectedBtn"); 
     }
     //Set selected btn
 
     //Add buttons
       controlRightContent.innerHTML = `
       <div class="row centerSubForm">
         <div class="col-lg-8 offset-2 ">
 
           <h4><a href="#" id="editTCitaBtn">Edita un tipo de cita existente</a> o <a href="#" id="newTCitaBtn"> crea uno nuevo</a></h4>
 
         </div>
       </div>
     `;
 
   } 
 
   //mantCitas > newTCitaBtn
   else if (e.target.id === "newTCitaBtn"){//DONE
    
     //Stop link activity
      e.preventDefault();
 
     //Add content
     controlRightContent.innerHTML = await newMantCitas(); //New provider form 
 
   }
   //mantCitas > editTCitaBtn
   else if (e.target.id === "editTCitaBtn"){
 
     //Stop link activity
       e.preventDefault();
     //Add modalContent 
     const cols = ["Tipo ", "Descripción ", "Duración ", "Código "];
 
     const apptTypeData = [
       {
         "type": "Chequeo pediátrico",
         "desc": "Revisión general para niños de 1 a 16 años de edad",
         "duration": "30",
         "id": "chpd30",
       },
       {
        "type": "Pap smear",
        "desc": "Revisión mamária para adultos de 30 a 45 años de edad",
        "duration": "60",
        "id": "pasm60",
       }
             ];
       modalFieldSelection("filterConfigTCita", "Tipos de citas ", cols, apptTypeData, "configTCitaBody");

       //Alter desc field width to even the TH height
       editorContainer.querySelectorAll("thead th")[1].classList.add("w300px")
 
   }
   //mantProv > editProv > modal > editProvForm
   else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "configTCitaBody"){
           //FILL ALL FIELDS
     //Get consName and Id, vvvv array
     const logs = e.target.parentElement.querySelectorAll("td");
 
     //Request all information from BD to proceed and update if needed
 
     //Add editCons fields
     controlRightContent.innerHTML = await newMantCitas(); //New provider form
 
     //Get specific fields from editCons
 
     /*const consName = controlRightContent.querySelector("#consName"),
           consAddress = controlRightContent.querySelector("#consDir"),
           consRnc = controlRightContent.querySelector("#consRnc"),
           consPhone = controlRightContent.querySelector("#consPhone"),
           consSpecialty = controlRightContent.querySelector("#consSpecialties"),
           consWorkDays = controlRightContent.querySelectorAll(".checkGroup input"),
           consDaysTimes = controlRightContent.querySelectorAll(".checkGroup .dayTime"),
           consProviders = controlRightContent.querySelector("#consProviders");*/
 
       modalRemoval();
 
   }
 
} 

async function tSegurosConfigClick(e){ //CHECKED
  
  //mantCitas *
  if (e.target.id === "mantSeguros" || e.target.id === "backToMantSeguros"){//DONE
 
     //Get menu Btns
     if (e.target.id === "mantSeguros"){
         removeAllClasses(parentWorm(e.target, "configMenu"), "selectedBtn", "button");
         e.target.classList.add("selectedBtn"); 
     }
     //Set selected btn
 
     //Add buttons
       controlRightContent.innerHTML = `
       <div class="row centerSubForm">
         <div class="col-lg-8 offset-2 ">
 
           <h4><a href="#" id="editTSegurosBtn">Edita un tipo de seguro existente</a> o <a href="#" id="newTSegurosBtn"> crea uno nuevo</a></h4>
 
         </div>
       </div>
     `;
 
   } 
 
   //mantCitas > newTCitaBtn
   else if (e.target.id === "newTSegurosBtn"){//DONE
    
     //Stop link activity
      e.preventDefault();
 
     //Add content
     controlRightContent.innerHTML = newMantSeguros(); //New provider form 
 
   }
   //mantCitas > editTCitaBtn
   else if (e.target.id === "editTSegurosBtn"){
 
     //Stop link activity
       e.preventDefault();
     //Add modalContent 
     const cols = ["Código ", "Seguro "];
 

     const segurosData = await selectQuery("select * from tipoSeguro;");
     
       modalFieldSelection("filterConfigTSeguros", "Seguros ", cols, segurosData.data, "configTSegurosBody");

       //Alter desc field width to even the TH height
       editorContainer.querySelectorAll("thead th")[1].classList.add("w300px")
 
   }
   //mantProv > editProv > modal > editProvForm
   else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "configTSegurosBody"){
           //FILL ALL FIELDS
     //Get consName and Id, vvvv array
     const logs = e.target.parentElement.querySelectorAll("td");
 
     //Request all information from BD to proceed and update if needed
 
     //Add editCons fields
     controlRightContent.innerHTML =  updMantSeguros(); //New provider form
 
 
       modalRemoval();
 
   }
   //Validate new name and update in BD
   else if(e.target.id === "updNewSegurosType"){

   }
 
} 
 DOEVERY FORM IN ORDER, LINK THEM TO BD IMMEDIATELY
async function tEspecialidadConfigClick(e){ //CHECKED
  
  //mantCitas *
  if (e.target.id === "mantEspecialidad" || e.target.id === "backToMantEspecialidades"){//DONE
 
     //Get menu Btns
     if (e.target.id === "mantEspecialidad"){
         removeAllClasses(parentWorm(e.target, "configMenu"), "selectedBtn", "button");
         e.target.classList.add("selectedBtn"); 
     }
     //Set selected btn
 
     //Add buttons
       controlRightContent.innerHTML = `
       <div class="row centerSubForm">
         <div class="col-lg-8 offset-2 ">
 
           <h4><a href="#" id="editEspecialidadesBtn">Edita una especialidad existente</a> o <a href="#" id="newEspecialidadBtn"> crea una nuevo</a></h4>
 
         </div>
       </div>
     `;
 
   } 
 
   //mantCitas > newTCitaBtn
   else if (e.target.id === "newEspecialidadBtn"){//DONE
    
     //Stop link activity
      e.preventDefault();
 
     //Add content
     controlRightContent.innerHTML = newMantEspecialidades(); //New provider form 
 
   }
   //mantCitas > editTCitaBtn
   else if (e.target.id === "editEspecialidadesBtn"){
 
     //Stop link activity
       e.preventDefault();
     //Add modalContent 
     const cols = ["Código ", "Especialidad "];
 

     const specData = await selectQuery("select * from especialidad;");

     
       modalFieldSelection("filterConfigEspecialidad", "Especialidades ", cols, specData.data, "configEspecialidadBody");

       //Alter desc field width to even the TH height
       editorContainer.querySelectorAll("thead th")[1].classList.add("w300px")
 
   }
   //mantProv > editProv > modal > editProvForm
   else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "configEspecialidadBody"){
           //FILL ALL FIELDS
     //Get consName and Id, vvvv array
     const logs = e.target.parentElement.querySelectorAll("td");
 
     //Request all information from BD to proceed and update if needed
 
     //Add editCons fields
     controlRightContent.innerHTML =  updMantEspecialidades(); //New provider form
    

     
       modalRemoval();
 
   }
   //Validate new name and update in bd
   else if(e.target.id === "updNewSpecialty"){

    //Grab tracker info

   }
 
} 
 





function consScheduleClick(e){


    //First choose whether you alter a cons schedule or you create a schedule template
    //Got to use calendar here
    if (e.target.id === "mantHorarios" || e.target.id === "backToMantSched"){
        //Get menu Btns
        if (e.target.id === "mantHorarios"){
          removeAllClasses(parentWorm(e.target, "configMenu"), "selectedBtn", "button");
          e.target.classList.add("selectedBtn"); 
        }
        //Add buttons
        controlRightContent.innerHTML = `
          <div class="row centerSubForm">
            <div class="col-lg-8 offset-2 ">
    
              <h4><a href="#" id="editSchedBtn">Edita un horario existente</a> o <a href="#" id="newSchedBtn"> crea una plantilla</a></h4>

            </div>
          </div>
        `;
  
    }
    //Edit existing schedule by selecting a provider, location and date
    else if (e.target.id === "editSchedBtn"){
        //Stop link activity
        e.preventDefault();
        //Add content
        controlRightContent.innerHTML = editMantHorarios; 
        
    }
    //Create a new schedule template either by slot or day
    else if (e.target.id === "newSchedBtn"){
        //Stop link activity
        e.preventDefault();
        //Add content
        controlRightContent.innerHTML = newMantHorarios;

    }
    //select schedule cons
    else if (e.target.id === "schedProvSelection"){


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
    modalFieldSelection("filterSchedProv", "Proveedores ", cols, sampleData, "schedProvBody");

    }
    //Grab information from modal table for provider selection
    else if (e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "schedProvBody"){

        const logs = e.target.parentElement.querySelectorAll("td");
        const inputProv = controlRightContent.querySelector("#schedProvSelection");

        const schedRightSide = controlRightContent.querySelector(".centerSubForm .schedRightContent");
        //CHECK FOR INPUT PROVIDER AND SCHED CONS INPUT TO DISPLAY TABLE AND POST THE SCHEDULE
          //logs[0] = provName
          inputProv.setAttribute("value", logs[0].innerHTML); 
        //The provider selection will fill up service center then display the table
          //
          //Add modalContent 
      const cols = ["Hora ", "Tipo ", "Duración ", "Plantilla"];
  
      const apptData = [
  
        {
          "time": "09:15",
          "apptType": "-",
          "duration": "-",
          "template": `<select id="selectSchedTemplate">
                            
                            <option value="planPed">Pediatra</option>
                            <option value="planGen">General</option>
                            <option value="planDent">Dental</option>
          
                      </select>`,
        },
        {
          "time": "09:30",
          "apptType": "-",
          "duration": "-",
          "template": `<select id="selectSchedTemplate">
                            
                            <option value="planPed">Pediatra</option>
                            <option value="planGen">General</option>
                            <option value="planDent">Dental</option>

                      </select>`,
        }
  
      ];
      
      schedRightSide.appendChild(genTable(apptData, cols, "apptCreationBody", false));

          //Validate for schedProvSelection and schedConsSelection to display current day and alter existing slots
          modalRemoval();

    }
    //select schedule cons
    //Grab information from modal table for patient selection
    else if (e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "apptCreationBody"){
            
        //Contains current row to start the appointment from  
        const logs = e.target.parentElement.querySelectorAll("td");
            
          //Modal appt creation or template usage
            
        const apptForm = ` <div class="modalFormWrapper" >
                    
        <!-- ====== Content start ====== -->

                <form class="ud-template-form">

                  <div class="row">



                      <!--Proveedor, Paciente, Nota-->
                      <div class="col-lg-10 offset-1">
                        
                            <div class="ud-form-group">

                              <label for="schedNApptTime">Hora*</label>
                              <input type="text" name="schedNApptTime" id="schedNApptTime" disabled>
                            
                            </div>

                            <div class="ud-form-group">

                              <label for="schedNApptSpecialty">Especialidad*</label>
                              <select name="schedNApptSpecialty" id="schedNApptSpecialty">

                                <option value="center">center</option>
                                <option value="center">center</option>
                                <option value="center">center</option>
            
                              </select>

                            </div>
                            
                            <div class="ud-form-group">

                            <label for="schedNApptDuration">Duración*</label>
                            <input type="text" name="schedNApptDuration" id="schedNApptDuration" disabled>


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
          //Validate the provider has been selected
        const provider ="x";
        
          if(provider.length === 0){

            customAlert("Aún no seleccionas el proveedor!")
              return;

          }


        mainTitle.innerHTML = "Alteración de horario: fecha tal, centro tal, provider tal"

        editorContainer.innerHTML = apptForm;

        superModal();

              

    }
    //Thats the plus sign on the appt creation table in horarios
    else if (e.target.id === "selectSchedTemplate"){
      //Opens modal or well, a list and allows user to select an existing appt template
      

    }





}

/*CONFIG EVENTS QUALITY OF LIFE FUNCTIONS */ 





















/*FECTH API FUNCTION */
/**
 * await postRequest("/em/api/patients/new", {"o": "An item"})
 * @param {string} route API route 
 * @param {Object} data Data sent to the server
 * @returns 
 */
async function postRequest(route, data){

  const result = await fetch("http://localhost:5000"+route, {

      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers:{
        "Content-Type": "application/json",
      }

    });

    return await result.json();

}
 
/**
 * await getRequest("/em/api/patients/new")
 * @param {string} route API route 
 * @returns 
 */
async function getRequest(route){

    const result = await fetch("http://localhost:5000"+route, {
      method: "GET",
      mode: "cors",
    });

    return await result.json();

} 
async function selectQuery(query){

  const result = await fetch("http://localhost:5000"+"/em/api/auth/"+query, {
    method: "GET",
    mode: "cors",
  });

  return await result.json();

} 
/*CONFIG QUALITY OF LIFE FUNCTIONS */ 




