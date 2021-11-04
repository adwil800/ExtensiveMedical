

/*QUALITY OF LIFE FUNCTIONS */ 
/**
 * this function will alert a message at the bottom of the page
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
 * this function will create an html element with requested attributes
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
      console.error("Different length of attribute name and values.");
      return;
    }

    for (let i = 0; i < attrName.length; i++) {

      element.setAttribute(attrName[i], attrValue[i]);

    }

  } else if (typeof (attrName) === "string" && typeof (attrValue) === "string") {
    //Check if string for single attribute
    element.setAttribute(attrName, attrValue);

  } else {

    console.error("Mixed parameter types, expected String, Array, Array or String, String, String");
    return;
  }


  return element;

}
/**
 * this function will generate a table.
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
      td.textContent = e[key];
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
 * this function will return requested parent object
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
    attrValue = ["text", filterClass, "Filtrar por Nombre"];
    const input = createHtmlElement("input", attrNames, attrValue);
    
    //Set title and filter input
    mainTitle.textContent = modalTitle;
    mainTitle.appendChild(input);
    mainTitle.querySelector("input").focus();

    editorContainer.appendChild(genTable(tableContent, tableCols, tbodyId));
    superModal();

}
/**
 * this function will remove a class from all elements in a parent
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
 * this function will bring the requested window to the front
 *
 * @returns {boolean} 
 */
function removeTopWindow(){
  const allWindows = document.querySelectorAll("#templateContent .draggableParent");
        allWindows.forEach(e => e.classList.remove("topDraggable"));
        return true;
}
/**
 * this function will filter from given table.
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
* this function will return the checked radio button index.
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
 * this function will organize new window position 
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
 * this function will remove a window count and free a position index from window positioning array
 * @param {HTMLElement} parentDraggable: window to get position index to organize new windows
 */
function windowSubstraction(parentDraggable){//CHECKED
  windowCount--;
  //Free taken position prefix
  const posIndex = parentDraggable.getAttribute("positionindex");
  positionArray[posIndex][2] = false;
}
/**
 * this function will check for free positions for new window
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
/*INDEX QUALITY OF LIFE FUNCTIONS */ 






/*REQUESTS QUALITY OF LIFE FUNCTIONS */ 
function requestResponse() {


  const sampleData = [
    {
      "pName": "Johnny Buttons",
      "date": "05/21/2019",
      "type": "Resultados",
    },
    {
      "pName": "Juanzo Marrillos",
      "date": "09/13/2021",
      "type": "Prescripción",
    },
    {
      "pName": "Johnny Buttons",
      "date": "05/21/2019",
      "type": "Resultados",
    },
    {
      "pName": "Juanzo Marrillos",
      "date": "09/13/2021",
      "type": "Prescripción",
    },
    {
      "pName": "Johnny Buttons",
      "date": "05/21/2019",
      "type": "Resultados",
    },
    {
      "pName": "Juanzo Marrillos",
      "date": "09/13/2021",
      "type": "Prescripción",
    },
    {
      "pName": "Johnny Buttons",
      "date": "05/21/2019",
      "type": "Resultados",
    },
    {
      "pName": "Juanzo Marrillos",
      "date": "09/13/2021",
      "type": "Prescripción",
    }
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
function consConfigClick(e){ //CHECKED
  
  //mantCons
  if (e.target.id === "mantConsultorios" || e.target.id === "backToMantCons"){
    //Get menu Btns
    if (e.target.id === "mantConsultorios"){
      removeAllClasses(parentWorm(e.target, "configMenu"), "selectedBtn", "button");
      e.target.classList.add("selectedBtn"); 
    }
    //Clear provider list 
    configCurrentList = [];
    //Add buttons
      configRightContent.innerHTML = `
      <div class="row centerSubForm">
        <div class="col-lg-8 offset-2 ">

          <h4><a href="#" id="editConsBtn">Edita un consultorio existente</a> o <a href="#" id="newConsBtn"> crea uno nuevo</a></h4>

        </div>
      </div>
    `;

  }
  //mantCons > newCons
  else if (e.target.id === "newConsBtn"){

    //Stop link activity
     e.preventDefault();
    //Clear provider list 
    configCurrentList = [];
    //Add content
    configRightContent.innerHTML = newConsultorio;

  }
  //mantCons > editCons
  else if (e.target.id === "editConsBtn"){

    //Stop link activity
      e.preventDefault();
      //Clear list 
      configCurrentList = [];
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
  else if(e.target.id === "consProviders"){

          //Create title input

        //Send data to genTable
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
      modalFieldSelection("filterConsPro", "Proveedores ", cols, providersData, "consProBody");
  }

  else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "consProBody"){
          
    //Get consName and Id, vvvv array
    const logs = e.target.parentElement.querySelectorAll("td");

    //Request all information from BD to proceed and update if needed

    //Get specific fields from editCons

    const consProviders = configRightContent.querySelector("#consProviders");


    //Add selected provider into array
    configCurrentList.push(logs[0].textContent+" "+logs[1].textContent);
    //Reload current providers list
    const providerListContainer = configRightContent.querySelector(".configList");
    reloadConfigList(configCurrentList, providerListContainer);

      modalRemoval();

  }
  //mantCons

}

function providerConfigClick(e){ //CHECKED
  
 //mantProv *
 if (e.target.id === "mantProveedores" || e.target.id === "backToMantProv"){

    //Get menu Btns
    if (e.target.id === "mantProveedores"){
        removeAllClasses(parentWorm(e.target, "configMenu"), "selectedBtn", "button");
        e.target.classList.add("selectedBtn"); 
    }
    //Set selected btn
    //Clear list
    configCurrentList = [];

    //Add buttons
      configRightContent.innerHTML = `
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
    //Clear list
    configCurrentList = [];

    //Add content
    configRightContent.innerHTML = newMantProvider; //New provider form 

  }
  //mantProv > editProv
  else if (e.target.id === "editProvBtn"){

    //Stop link activity
      e.preventDefault();
      //Clear list 
      configCurrentList = [];
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
    configRightContent.innerHTML = newMantProvider; //New provider form

    //Get specific fields from editCons

    /*const consName = configRightContent.querySelector("#consName"),
          consAddress = configRightContent.querySelector("#consDir"),
          consRnc = configRightContent.querySelector("#consRnc"),
          consPhone = configRightContent.querySelector("#consPhone"),
          consSpecialty = configRightContent.querySelector("#consSpecialties"),
          consWorkDays = configRightContent.querySelectorAll(".checkGroup input"),
          consDaysTimes = configRightContent.querySelectorAll(".checkGroup .dayTime"),
          consProviders = configRightContent.querySelector("#consProviders");*/

      modalRemoval();

  }
  //mantProv > editProv & newProv > modal > editProvForm & newProv > provWorkingCenter 
  else if(e.target.id === "provWorkingCenter"){

    //Show modal
      const cols = ["Nombre ", "Dirección ", "Días laborables "];

      const consData = [
          {
            "name": "Consult MD",
            "address": "Calle 12, Street 12, hun 12 ",
            "days": "L-V",
          },
          {
            "name": "La charra",
            "address": "Calle 12, Street 12, hun 12 ",
            "days": "L-S",
          }
                ];
      modalFieldSelection("filterProCons", "Consultorios ", cols, consData, "proConsBody");
  }
  //mantProv > editProv & newProv  > editProvForm & newProv > provWorkingCenter > modal
  else if(e.target.parentElement.tagName.toLowerCase() === "tr" && e.target.parentElement.parentElement.id === "proConsBody"){
    //Handle multiple cons      

    //Get consName and Id, vvvv array
    const logs = e.target.parentElement.querySelectorAll("td");

    //Request all information from BD to proceed and update if needed

    //Get specific fields from editCons

    const provCenters = configRightContent.querySelector("#provWorkingCenter");

    //Add selected provider into array
    configCurrentList.push(logs[0].textContent);
    //Reload current providers list
    const consListContainer = configRightContent.querySelector(".configList");
    reloadConfigList(configCurrentList, consListContainer);

      modalRemoval();

  }




} 
/*CONFIG EVENTS QUALITY OF LIFE FUNCTIONS */ 






/*CONFIG QUALITY OF LIFE FUNCTIONS */ 
function liveReloadConfigList(array, parentContainer){//CHECKED
    
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
  console.log(parentContainer)
  parentContainer.querySelector("span.liveCount").remove();
  parentContainer.querySelector(".actualList > ul").remove();

  //Add preview and count
  const summonerSpan = document.createElement("span");
        summonerSpan.setAttribute("class", "liveCount");
        summonerSpan.textContent = array[0]+`...`+`(${array.length})`;

  parentContainer.insertBefore(summonerSpan, parentContainer.childNodes[0]);
  parentContainer.querySelector(".actualList").appendChild(ul);

}

function reloadConfigList(array, targetElementContainer){//CHECKED

  if(array.length < 1){
    targetElementContainer.innerHTML = "";
    return;
  }
  //create parentContainer, draggable
  const parentContainer = createHtmlElement("div", "class", "actualList  draggableParent hide");
  //create draggableTarget
  const draggableTarget = createHtmlElement("div", "class", "draggableTarget");
        draggableTarget.innerHTML = `
                    <span class="tabName">Lista de proveedores</span>
                    <i class="fas fa-times closeDraggableList"></i>
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


  targetElementContainer.innerHTML = "";
  parentContainer.appendChild(draggableTarget);
  parentContainer.appendChild(ul);
  targetElementContainer.appendChild(summonerSpan);
  targetElementContainer.appendChild(parentContainer);

}
/*CONFIG QUALITY OF LIFE FUNCTIONS */ 
