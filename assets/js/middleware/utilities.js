

/**
 * this function will alert a message at the bottom of the page
 * @param string message to display
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
 * @param html_element HTML tag of element to create
 * @param array_or_string attrName: array of attribute names or single name
 * @param array_or_string attrValue: array of attribute values or single value
 * @return html_element  
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
 * @param object data: Json that contains the data
 * @param array cols: table headers
 * @param string bodyId: table body identifier for clicking event
 * @return html 
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



//citas, docs
/**
 * this function will filter from given table.
 *
 * @param html_element target: Html element to work on
 * @param string parentId: table body identifier for parent selection
 * @param integer filterBy: filter by column number
 * @return html 
 */
function filter(target, parentId, filterBy){

      //Get input
      const input = target.value.toLowerCase().replace(/[\/-]/g, "");
      //Get all items    
      console.log(target.parentElement.parentElement.parentElement
        .parentElement)
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
 * @param html_element target: Html element to work on
 * @return int 
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



//INDEX,
/**
 * 
 * @param  file Path to link or script
 * @param  parent html container
 * @param  fileClass file class for deletion
 * @param  fileTag file tag for creation
 * @returns 
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

function windowAddition(){
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

function windowSubstraction(parentDraggable){
  windowCount--;
  //Free taken position prefix
  const posIndex = parentDraggable.getAttribute("positionindex");
  positionArray[posIndex][2] = false;
}


function handleWindowPositioning(){

      for (let i = 0; i < positionArray.length; i++) {
          // check for array[i][2] and see if it's taken, if true then ignore, else take
          if (positionArray[i][2] === false){
                return i;
            }

      }

      return false;
}




//DOCS

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
function detailsCreation(data) {

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
function detailsList(data, divide = false) {

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

//EXISTING PATIENT

function removeAllClasses(parent, classToRemove, selector){

      //Enable buttons
      const allElements = parent.querySelectorAll(selector);
        allElements.forEach(e => {
            e.classList.remove(classToRemove);
        });

}
