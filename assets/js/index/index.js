//All citas content
const citas = `   
<div class="draggableTarget">

<span class="tabName" windowname="CalCitas">Calendario de citas</span>
<i class="fas fa-times closeDraggableCitas"></i>
<i class="fas fa-minus minimizeDraggable"></i>

</div>

<br>

<div class="row" id="citasContent">
  <!-- ====== Content start ====== -->

        <!-- ====== Left content start ====== -->
        <div class="col-lg-3 citasLeftContent">


          <!--CALENDARIO-->
          <div class="ud-form-group">
            <label for="calendar">Calendario</label>
            <section id="calendarSection">
              <div class="box np-events">
                <div class="calendarContainer">
                  <div id="calendar">

                  </div>
                </div>
              </div>
            </section>
          </div>
          <!--CALENDARIO-->

          <div class="ud-form-group">
            <label for="provider">Proveedor*</label>

            <input type="text" id="selectCitasProvider" disabled>


          </div>


          <div class="ud-form-group">
            <label for="patient">Paciente*</label>

            <input type="text" id="selectCitasPatient" disabled>

          </div>
          <div class="ud-form-group mb-0">
            <a href="#">Ver citas existentes</a>
            <button class="ud-main-btn ">
              Ver citas existentes
            </button>
          </div>

        </div>
        <!-- ====== Left content end ====== -->


        <!-- ====== Right content start ====== -->
        <div class="custom-col-lg-9  citasRightContent">



        </div>

        <!-- ====== Right content end ====== -->

  <!-- ====== Content end ====== -->
</div>

`;
const documentos = `
<div class="draggableTarget">

<span class="tabName" windowname="Docs">Documentos</span>
<i class="fas fa-times closeDraggableDocs"></i>
<i class="fas fa-minus minimizeDraggable"></i>

</div>
<br>
     <div class="row" id="docsContent">
            <!-- ====== Content start ====== -->

            <!-- ====== Left content start ====== -->
            <div class="col-lg-3 docsLeftContent">


              <div class="ud-form-group">
                <label for="patient">Paciente*</label>
                <input type="text" id="selectDocsPatient" disabled>
              </div>

              <div class="ud-form-group mb-0">

                <button class="btn btn-primary ">
                  Unknown
                </button>
              </div>

            </div>
            <!-- ====== Left content end ====== -->


            <!-- ====== Right content start ====== -->
            <div class="custom-col-lg-9  docsRightContent">

              <div class="provDocs">

              </div>

              <div class="docDetails">

                <h3 class="alterH3">No hay ningún documento seleccionado</h3>

              </div>

              <div class="docButtons floatRight">
                <div id="newDoc" class="btn btn-primary btn-sm">Nuevo</div>
                <div id="delDoc" class="btn btn-danger btn-sm">Borrar</div>
                <div id="downDoc" class="btn btn-info btn-sm">Descargar PDF</div>
              </div>

            </div>

          </div>
`;
const nuevoPaciente = `
<div class="draggableTarget">

<span class="tabName" windowname="PNuevo">Nuevo paciente</span>
<i class="fas fa-times closeDraggableNewPatient"></i>
<i class="fas fa-minus minimizeDraggable"></i>

</div>
<br>


<div class="row " id="newPatientContent">
  <!-- ====== Content start ====== -->

        <!-- ====== Right content start ====== -->
        <div class="col-lg-10 offset-1  ">
              <br><br>
              
                  <div class="row">
                    
                    <!--NEWPT main information -->
                    <h3 class="underline">Personal</h3>  
                    <div class="col-lg-5">
                      
                      <div class="ud-form-group">
                        <label for="names">Nombres</label>
                        <input type="text" name="names">
                      </div>

                      <div class="ud-form-group">
                        <label for="lastNames">Apellidos</label>
                        <input type="text" name="lastNames">
                      </div>
                      
                      <div class="row">

                        <div class="col-lg-6">
                          
                          <div class="ud-form-group">
                            <label for="sex">Sexo</label>
                            <select name="sex" id="">
                              <option value="F">F</option>
                              <option value="M">M</option>
                              <option value="U">U</option>
                            </select>
                          </div>

                        </div>

                        <div class="col-lg-6">
                          <div class="ud-form-group">
                            <label for="dob">Fecha de nacimiento</label>
                            <input type="date" class="date" name="dob">
                          </div>
                        </div>

                        <div class="ud-form-group">
                          <label for="email">Email</label>
                          <input type="email" name="email">
                        </div>

                      </div> 

                      <div class="ud-form-group">
                        <label for="address">Dirección</label>
                        <input type="text" name="address">
                      </div>
                      



                    </div> 

                    <div class="col-lg-5 offset-2"> 
                      
                        <div class="row">

                            <div class="col-lg-6">
                                <div class="ud-form-group">
                                  <label for="phone">Teléfono móvil</label>
                                  <input type="text" name="phone">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="ud-form-group">
                                  <label for="alterPhone">Teléfono alternativo</label>
                                  <input type="text" name="alterPhone">
                                </div>
                            </div>

                              <div class="col-lg-12 emergencyLabelParent"><label class="emergencyLabel" for="">Contacto de emergencia</label></div>
                              
                            <div class="col-lg-6">
                                <div class="ud-form-group">
                                  <label for="">Nombre</label>
                                  <input type="text" name="" id="" disabled>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="ud-form-group">
                                  <label for="">Teléfono</label>
                                  <input type="text" name="" id="" disabled>
                                </div>
                            </div>

                        </div>


                        <div class="ud-form-group">
                          <label for="provName">Proveedor</label>
                          <input type="text" name="provName" id="providerName" disabled>
                        </div>

                        <div class="ud-form-group">
                          <label for="">Alergias</label>
                          <input type="text" name="" id="" disabled>
                        </div>

                        


                        <div class="row">

                          <div class="col-lg-6">
                              <div class="ud-form-group">
                                <label for="phone">Municipio</label>
                                
                                <select name="provincia" id="">

                                  <option value="">Santiago</option>
                                  <option value="">La vega</option>

                                </select>

                              </div>
                          </div>

                          <div class="col-lg-6">
                              <div class="ud-form-group">
                                <label for="provincia">Provincia</label>
                                <select name="provincia" id="">

                                    <option value="">Santiago</option>
                                    <option value="">La vega</option>

                                </select>
                              </div>
                          </div>

                          </div>





                    </div>
                    <!--NEWPT Insurance information -->


                  
              <div class="ud-form-group padT10 ">
                <button type="submit" class="ud-main-btn floatRight">
                  Registrar
                </button>
              </div>
              



        </div>

        <!-- ====== Right content end ====== -->

  <!-- ====== Content end ====== -->
        </div>

  <!-- ====== Content start ====== -->
</div>
`;
const existingPatient = `
<div class="draggableTarget">

<span class="tabName" windowname="PExist">Pacientes - patientName, DOB, ID</span>
<i class="fas fa-times closeDraggableExistingPatient"></i>
<i class="fas fa-minus minimizeDraggable"></i>

</div>
<br>


<div class="row" id="existingPatientContent">
  <!-- ====== Content start ====== -->

        <!-- ====== Right content start ====== -->
        <div class="col-lg-12  ">
              
                  <div class="row">
                    
                    <!--left menu-->
                    <div class="col-lg-3">

                        <div class="ud-form-group">
                          <label for="patient">Paciente*</label>
                          <input type="text" id="selectExistingPatient" disabled>
                        </div>


                          <div class="ud-form-group">
                            <button  class="ud-main-btn subMenuBtn disableBtn" id="existingPersonalTab" >
                              Personal
                            </button>
                          </div>

                          <div class="ud-form-group">
                            <button  class="ud-main-btn subMenuBtn disableBtn" id="existingApptTab" >
                              Citas existentes
                            </button>
                          </div>

                    </div> 
                    
                    <div class="col-lg-9 existingPacientesRightContent">

                          <div class="tableViewer hide">
                          </div>
                          <div class="contentViewer hide">
                            <h3>No hay ninguna cita seleccionada</h3>
                          </div>
                          <div class="personalViewer hide">
                          </div>

                    </div>

                  



        </div>

        <!-- ====== Right content end ====== -->

  <!-- ====== Content end ====== -->
        </div>

  <!-- ====== Content start ====== -->
</div>
`;
const controlForm = `
 
<div class="draggableTarget">

<span class="tabName" windowname="Panel">Panel de control > consultorios > nuevo </span>
<i class="fas fa-times closeDraggableControl"></i>
<i class="fas fa-minus minimizeDraggable"></i>

</div>
<br>
  
  <div class="row" id="controlContent">
  
          <!-- ====== Right content start ====== -->
          <div class="col-lg-12  ">
        
            <div class="row">
              
              <!--left menu-->
              <div class="col-lg-3 configMenu">

                  <div class="input-group">
                    <button class="ud-main-btn" id="mantPersonal">Personal</button> 
                  </div>

                  <div class="input-group">
                      <button class="ud-main-btn" id="mantConsultorios">Consultorios</button>
                  </div>

                  <div class="input-group">
                      <button class="ud-main-btn" id="mantProveedores">Proveedores</button>
                  </div>

                  <div class="input-group">
                      <button class="ud-main-btn" id="mantCitas">Citas</button>
                  </div>    

                  <div class="input-group">
                      <button class="ud-main-btn" id="mantHorarios">Horarios</button>
                  </div>

              </div>

            
              <div class="col-lg-9 controlRightContent">

              </div>

            </div> 

                      
          </div>
  
  </div>

`;


//

//That's where I'll append the draggable content
const contentParent = document.querySelector("#templateContent");
const skeletonLoader = document.querySelector(".skeletonLoader");

const dynamicCss = document.querySelector(".dynamicCss");
const dynamicJs = document.querySelector(".dynamicJs");

document.addEventListener("click", e => {

  if (e.target !== null){

   if (e.target.tagName.toLowerCase() === "button"){
        $(e.target).blur();
    }

    if (e.target.id === "summonNewPatient"){
      //Removes current top draggable
      removeTopWindow();

          if(newPatientActive){
            const selectedDraggable = contentParent.querySelector("#newPatientContent").parentElement;

              if(selectedDraggable.classList.contains("hide")){

                //remove minimized
                  removeMinimized(selectedDraggable);

              }

              if (removeTopWindow()){
                //Set z-index to current parent
                selectedDraggable.classList.add("topDraggable");
              }
            return;
          }


          newPatientActive = true;

          loadFile("../assets/css/pacientes/nuevoPaciente.css", dynamicCss, "linkNewPatient", "link").then(e => {
              //Add js
            loadFile("../assets/js/pacientes/nuevoPaciente.js", dynamicJs, "scriptNewPatient", "script").then(e => {

                //Create parent
                const parentNewPatient = document.createElement("div");
                parentNewPatient.setAttribute("class", "ud-template-form-wrapper draggableParent topDraggable");

                //Add window position prefix index
                parentNewPatient.setAttribute("positionindex", windowAddition());

                  //Add loaders position
                skeletonLoader.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);
                  //Add loader
                skeletonLoader.classList.remove("hide");

                //Set initial position for parent window
                parentNewPatient.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);
                parentNewPatient.innerHTML = nuevoPaciente;
                //Remove loader
                skeletonLoader.classList.add("hide");
                contentParent.appendChild(parentNewPatient);

            }).catch( e => console.error(e));
          }).catch( e => console.error(e));

            
      
    }

    if (e.target.id === "summonExistingPatient"){
      //Removes current top draggable
      removeTopWindow();

        if(existingPatientActive){

          const selectedDraggable = contentParent.querySelector("#existingPatientContent").parentElement;
            if(selectedDraggable.classList.contains("hide")){

              //remove minimized
                removeMinimized(selectedDraggable);

            }
            
            if (removeTopWindow()){
              //Set z-index to current parent
              selectedDraggable.classList.add("topDraggable");
            }
          return;
        }
        
        existingPatientActive = true;

     //Add Css 
          loadFile("../assets/css/pacientes/pacienteExistente.css", dynamicCss, "linkExistingPatient", "link").then(e => {
              //Add js
              loadFile("../assets/js/pacientes/pacienteExistente.js", dynamicJs, "scriptExistingPatient", "script").then(e => {

                  //Create parent
                  const parentExistingPatient = document.createElement("div");
                  parentExistingPatient.setAttribute("class", "ud-template-form-wrapper draggableParent topDraggable");

                  //Add window position prefix index
                  parentExistingPatient.setAttribute("positionindex", windowAddition());
                  //Add loaders position
                  skeletonLoader.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);
                  //Add loader
                  skeletonLoader.classList.remove("hide");

                  //Set initial position for parent window
                  parentExistingPatient.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);

                  parentExistingPatient.innerHTML = existingPatient;
                  //Remove loader
                  skeletonLoader.classList.add("hide");
                  contentParent.appendChild(parentExistingPatient);

                  //Select existing patient vars
                  existingPacientesRightContent = contentParent.querySelector(".existingPacientesRightContent");

                  tableViewer = existingPacientesRightContent.querySelector(".tableViewer");
                  contentViewer = existingPacientesRightContent.querySelector(".contentViewer");
                  personalViewer = existingPacientesRightContent.querySelector(".personalViewer");
                                          


                }).catch( e => console.error(e));
              }).catch( e => console.error(e));

      
    }

    if (e.target.id === "summonCitas"){
        //Removes current top draggable
        removeTopWindow();
      
            if(citasActive){

              const selectedDraggable = contentParent.querySelector("#citasContent").parentElement;
              if(selectedDraggable.classList.contains("hide")){

                //remove minimized
                  removeMinimized(selectedDraggable);
  
              }
              if (removeTopWindow()){
                //Set z-index to current parent
                selectedDraggable.classList.add("topDraggable");
              }
              return;
            }
            
            citasActive = true; 

           //Add Css 
            loadFile("../assets/css/citas/citas.css", dynamicCss, "linkCitas", "link").then(e => {
              loadFile("../assets/css/calendar/cal.css", dynamicCss, "linkCitas", "link").then(e => {
                loadFile("../assets/css/calendar/style.css", dynamicCss, "linkCitas", "link").then(e => {
                    //Add js
                    loadFile("../assets/js/citas/citas.js", dynamicJs, "scriptCitas", "script").then(e => {
                      loadFile("../assets/js/calendar/calendar.js", dynamicJs, "scriptCitas", "script").then(e =>{
 
                          //Create parent
                          const parentCitas = document.createElement("div");
                          parentCitas.setAttribute("class", "ud-template-form-wrapper draggableParent topDraggable");

                          //Add window position prefix index
                          parentCitas.setAttribute("positionindex", windowAddition());

                          //Add loaders position
                          skeletonLoader.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);
                          //Add loader
                          skeletonLoader.classList.remove("hide");

                          //Set initial position for parent window
                          parentCitas.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);

                          parentCitas.innerHTML = citas;
                          //Remove loader
                          skeletonLoader.classList.add("hide");
                          contentParent.appendChild(parentCitas);

                          //Calendar vars

                          //Disallow clicking on calendar, assign calendarParent to let var at Citas.js
                          calendarParent = contentParent.querySelector("#calendarSection");
                          calendarParent.setAttribute("style", "cursor: not-allowed;");
                          mainRightContentContainer = contentParent.querySelector(".citasRightContent");

                          //Include all css and scripts then call dycalendar.draw
                          dycalendar.draw({
                              target: '#calendar',
                              type: 'month',
                              dayformat: 'full',
                              monthformat: 'full',
                              highlightday: true,
                              prevnextbutton: 'show'

                            })

                      }).catch( e => console.error(e));
                    }).catch( e => console.error(e));

                }).catch( e => console.error(e));
              }).catch( e => console.error(e));
            }).catch( e => console.error(e));
 
              
        
    }

    if(e.target.id === "summonDocuments"){
        //Removes current top draggable
        removeTopWindow();

          if(documentosActive){
            
            const selectedDraggable = contentParent.querySelector("#docsContent").parentElement;
            if(selectedDraggable.classList.contains("hide")){

              //remove minimized
                removeMinimized(selectedDraggable);

            }
            if (removeTopWindow()){
              //Set z-index to current parent
              selectedDraggable.classList.add("topDraggable");
            }

            return;
          }

          documentosActive = true; 
 
      //Add all css
          loadFile("../assets/css/documentos/documentos.css", dynamicCss, "linkDocs", "link").then(e => {
          //Add js
              loadFile("../assets/js/documentos/documentos.js", dynamicJs, "scriptDocs", "script").then(e => { 

                  //Create parent
                  const parentDocs = document.createElement("div");
                  parentDocs.setAttribute("class", "ud-template-form-wrapper draggableParent topDraggable");

                  //Add window position prefix index
                  parentDocs.setAttribute("positionindex", windowAddition());
                  
                  //Add loaders position
                  skeletonLoader.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);
                  //Add loader
                  skeletonLoader.classList.remove("hide");
                  
                  //Set initial position for parent window
                  parentDocs.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);

                  parentDocs.innerHTML = documentos;
                  //Remove loader
                  skeletonLoader.classList.add("hide");
                  contentParent.appendChild(parentDocs);

                  //Doc vars
                      provDocs = contentParent.querySelector(".provDocs");
                      docDetails = contentParent.querySelector(".docDetails");
                      newDoc = contentParent.querySelector("#newDoc");
                      delDoc = contentParent.querySelector("#delDoc");
                      downDoc = contentParent.querySelector("#downDoc");

                }).catch( e => console.error(e));
              }).catch( e => console.error(e));
      
    }
    
    if(e.target.id === "summonControl"){
      //Removes current top draggable
      removeTopWindow();

        if(configActive){
          
          const selectedDraggable = contentParent.querySelector("#controlContent").parentElement;
          if(selectedDraggable.classList.contains("hide")){

            //remove minimized
              removeMinimized(selectedDraggable);

          }
          if (removeTopWindow()){
            //Set z-index to current parent
            selectedDraggable.classList.add("topDraggable");
          }

          return;
        }

        configActive = true; 

    //Add all css
        loadFile("../assets/css/configuracion/configuracion.css", dynamicCss, "linkConfig", "link").then(e => {
        //Add js
            loadFile("../assets/js/configuracion/configuracion.js", dynamicJs, "scriptConfig", "script").then(e => { 

                //Create parent
                const parentConfig = document.createElement("div");
                parentConfig.setAttribute("class", "ud-template-form-wrapper draggableParent topDraggable");

                //Add window position prefix index
                parentConfig.setAttribute("positionindex", windowAddition());
                
                //Add loaders position
                skeletonLoader.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);
                //Add loader
                skeletonLoader.classList.remove("hide");
                
                //Set initial position for parent window
                parentConfig.setAttribute("style", `top: ${topPosition}px; left: ${leftPosition}px;`);

                parentConfig.innerHTML = controlForm;
                //Remove loader
                skeletonLoader.classList.add("hide");
                contentParent.appendChild(parentConfig);

                //Config vars
                  controlRightContent = contentParent.querySelector(".controlRightContent");
                  
              }).catch( e => console.error(e));
            }).catch( e => console.error(e));
    
    }


  /*Minimize windows */
    if (e.target.classList.contains("minimizeDraggable")){

      //Get current window name 
        const windowName = e.target.parentElement.querySelector(".tabName").getAttribute("windowName");
      //Hide parent draggable and remove topDraggable
        const windowDragg = parentWorm(e.target, "draggableParent");
              windowDragg.classList.add("hide");
              windowDragg.classList.remove("topDraggable");
            
        //Restore position availability
        windowSubstraction(windowDragg);

      //Add minimized submenu
        const minimized = document.querySelector(".minimizedWindows");
              minimized.classList.remove("hide");
          //Create button
          const buttonN = createHtmlElement("button", ["class", "id"], 
                                            ["btn btn-primary btn-sm maximizeDraggable", "max"+windowName])
                buttonN.textContent = windowName;
          const icon = createHtmlElement("i", "class", "lni lni-full-screen floatRight");

            buttonN.appendChild(icon);
            minimized.appendChild(buttonN);
            $(minimized).mouseover();

        //Trigger hover-like event to show newly minimized windows
          minimized.setAttribute("style", "left: 0px; background-color: inherit;");
          //Clear timeouts
          let id = window.setTimeout(function () { }, 0);
          while (id--) {
            window.clearTimeout(id);
          }
          //Remove hover-like event
          setTimeout(() => {
            minimized.removeAttribute("style");
          }, 1000);

    }
  /*Maximize windows */
    if (e.target !== null && e.target.classList.contains("maximizeDraggable") || e.target !== null && e.target.parentElement.classList.contains("maximizeDraggable")){

        //Get windowName, aka: ID
        const windowName = e.target.id.slice(3,);
        //Find tabName that contains windowName attribute as windowName, contentParent
        const windowToMax = contentParent.querySelectorAll(".draggableParent > .draggableTarget > .tabName");
              //windowToMax is a node list, turn into array to allow the use of its methods

          for (let i = 0; i < windowToMax.length; i++) {


              const eWindowName = windowToMax[i].getAttribute("windowName");
              if (eWindowName !== null && eWindowName.toLowerCase() === windowName.toLowerCase()){
                  //Remove taken window from the array
                  removeMinimized(parentWorm(windowToMax[i], "draggableParent"))
                  break;

              }

          };
            
          //Check for minimizedCount length to hide minimize tab
          const minimized = document.querySelector(".minimizedWindows");
          const minimizedCount = minimized.querySelectorAll("button").length;

          if(minimizedCount < 1){
                  minimized.classList.add("hide");
          }


    }




  }


});
 




