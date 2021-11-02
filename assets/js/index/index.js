//All citas content
const citas = `   
<div class="draggableTarget"><span class="tabName">Calendario de citas</span><i class="fas fa-times closeDraggableCitas"></i></div>

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
<div class="draggableTarget"><span class="tabName">Documentos</span><i class="fas fa-times closeDraggableDocs"></i></div>
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
<div class="draggableTarget"><span class="tabName">Nuevo paciente</span><i class="fas fa-times closeDraggableNewPatient"></i></div>
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
<div class="draggableTarget"><span class="tabName">Pacientes - patientName, DOB, ID</span><i class="fas fa-times closeDraggableExistingPatient"></i></div>
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
const configForm = `
 
<div class="draggableTarget"><span class="tabName">Configuración > consultorios > nuevo </span><i class="fas fa-times closeDraggableConfig"></i></div>
<br>

  
  <div class="row" id="configContent">
  
          <!-- ====== Right content start ====== -->
          <div class="col-lg-12  ">
                
                    <div class="row">
                      
                      <!--left menu-->
                      <div class="col-lg-3 configMenu">
  
                          <div class="input-group">
                            <button class="ud-main-btn configBtn" id="">
                              Personal
                            </button> 
                          </div>

                          <div class="input-group">

                            <button class="ud-main-btn configBtn" id="">
                              Mantenimientos <i class="fas fa-chevron-down"></i>
                            </button>

                              <div class="configSubMenu hide">

                                <ul>
                                  <li><button class="ud-main-btn" id="mantConsultorios">Consultorios</button></li>

                                  <li><button class="ud-main-btn" id="mantProveedores">Proveedores</button></li>

                                  <li><button class="ud-main-btn" id="mantCitas">Citas</button></li>

                                  <li><button class="ud-main-btn" id="mantHorarios">Horarios</button></li>
                                </ul>

                              </div>


                          </div>

                          

  
                      </div> 
                      
                      <div class="col-lg-9 configRightContent">


                      </div>

                      
                    </div>
  
          <!-- ====== Right content end ====== -->
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

    if (e.target.classList.contains("menuBtn")){
        $(e.target).blur();
    }

    if (e.target.id === "summonNewPatient"){
      //Removes current top draggable
      removeTopWindow();

          if(newPatientActive){
            const selectedDraggable = contentParent.querySelector("#newPatientContent").parentElement;
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
    
    if(e.target.id === "summonConfig"){
      //Removes current top draggable
      removeTopWindow();

        if(configActive){
          
          const selectedDraggable = contentParent.querySelector("#configContent").parentElement;
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

                parentConfig.innerHTML = configForm;
                //Remove loader
                skeletonLoader.classList.add("hide");
                contentParent.appendChild(parentConfig);

                //Config vars
                  configRightContent = contentParent.querySelector(".configRightContent");
                  
              }).catch( e => console.error(e));
            }).catch( e => console.error(e));
    
  }

});