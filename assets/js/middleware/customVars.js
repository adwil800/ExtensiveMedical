
//DOCUMENTS
const customH3 = `<h3 class="alterH3">No hay ningún documento seleccionado</h3>`;
const newDocForm = ` 
        <div class="modalFormWrapper" >
                    
          <!-- ====== Content start ====== -->
  
                  <form class="ud-template-form">
  
                    <div class="row">
  
                        <!--RIGHT SIDE, GENERIC TO DOC-->
                        <div class="col-lg-6" id="docLeftSide">
                          
                              <div class="ud-form-group">
                                <label for="provName">Proveedor*</label>
                                <input type="text" name="provName" id="providerName" disabled>
                              </div>
  
                              
                              <div class="ud-form-group">
                                <label for="paName">Paciente*</label>
                                <input type="text" name="paName" id="patientName" disabled>
                              </div>

                              <div class="row">

                                <div class="col-lg-6">
                                  <div class="ud-form-group">
                                        <label for="expiration">Expiración*</label>
                                        <input type="date" name="expiration" id="docExpiration">
                                  </div>
                                </div>

                                <div class="col-lg-6">
                                  <div class="ud-form-group">
                                        <label for="docType">Tipo de documento*</label>
                                        <select name="docType" id="docType">

                                          <option value="referido">Referido</option>
                                          <option value="prescripcion">Prescripción</option>
                                          <option value="resultados">Resultados</option>
        
                                        </select>
                                  </div>
                                </div>

                              </div>

                            <div class="ud-form-group">
                                <label for="instructions">Nota</label>
                                  <textarea name="instructions" cols="30" rows="10" id="docInstructions"></textarea>
                              </div>
  
                        </div> 
  




                        <div class="col-lg-6" id="docRightSide"> 
                        

                            <div class="ud-form-group">
                            <label for="specialty">Especialidad*</label>
                            <select name="specialty" id="">
                                <option value="">Pediatría</option>
                                <option value="">Psiquiatría</option>
                            </select>
                          </div>
                      
                          <div class="ud-form-group">
                            <label for="targetProvider">Proveedor objetivo*</label>
                            <input type="text" name="targetProvider" id="targetProvider">
                          </div>
                      
                            <!--El select del centro llena la dirección y el teléfono-->
                          <div class="ud-form-group">
                            <label for="serviceCenter">Centro de servicio*</label>
                            <select name="serviceCenter" id="">
                                <option value="">Clínica corominas</option>
                                <option value="">Clínica general</option>
                            </select>
                          </div>
                      
                          <div class="ud-form-group">
                            <label for="address">Dirección</label>
                            <input type="text" name="address" id="centerAddress" disabled>
                          </div>
                      
                          <div class="ud-form-group">
                            <label for="phone">Teléfono</label>
                            <input type="text" name="phone" id="centerPhone" placeholder="809-999-9999" disabled>
                          </div>

                        </div>
                      
  
  
                  </div> 
  
  
                  <div class="ud-form-group padT10 floatRight">
                    <button type="submit" class="ud-main-btn ">
                      Crear y enviar
                    </button>
                    <button type="submit" class="ud-main-btn ">
                       Solo crear
                    </button>
                    <button  class="btn btn-danger closeModal">
                      Cancelar
                    </button>
                  </div>
                  
  
                </form>
  
          <!-- ====== Content end ====== -->
          </div>
        `;

const prescription = `<!--LEFT SIDE, SPECIFIC-->

    
<div class="ud-form-group">
  <label for="medication">Medicación*</label>
  <input type="text" name="medication" id="docMedication">
</div>

<div class="ud-form-group">
  <label for="amount">Cantidad*</label>
  <input type="text" name="amount" id="docAmount">
</div>
  <!--El select de la farmacia llena la dirección y el teléfono-->
<div class="ud-form-group">
  <label for="pharmacy">Farmacia</label>

  <select name="" id="">

      <option value="">Farmacia 1</option>
      <option value="">Farmacia 2</option>

  </select>

</div>

<div class="ud-form-group">
  <label for="address">Dirección</label>
  <input type="text" name="address" id="pharmacyAddress" disabled>
</div>

<div class="ud-form-group">
  <label for="phone">Teléfono</label>
  <input type="text" name="phone" id="pharmacyPhone" placeholder="809-999-9999" disabled>
</div>
 `;

const referral = `<!--LEFT SIDE, SPECIFIC-->

<div class="ud-form-group">
  <label for="specialty">Especialidad*</label>
  <select name="specialty" id="">
      <option value="">Pediatría</option>
      <option value="">Psiquiatría</option>
  </select>
</div>

<div class="ud-form-group">
  <label for="targetProvider">Proveedor objetivo*</label>
  <input type="text" name="targetProvider" id="targetProvider">
</div>

  <!--El select del centro llena la dirección y el teléfono-->
<div class="ud-form-group">
  <label for="serviceCenter">Centro de servicio*</label>
  <select name="serviceCenter" id="">
      <option value="">Clínica corominas</option>
      <option value="">Clínica general</option>
  </select>
</div>

<div class="ud-form-group">
  <label for="address">Dirección</label>
  <input type="text" name="address" id="centerAddress" disabled>
</div>

<div class="ud-form-group">
  <label for="phone">Teléfono</label>
  <input type="text" name="phone" id="centerPhone" placeholder="809-999-9999" disabled>
</div>

`;

const result = `  <!--LEFT SIDE, SPECIFIC-->


<div class="ud-form-group">
  <label for="resultType">Tipo de resultado*</label>
  <select name="resultType" id="">
      <option value="">Laboratorio</option>
      <option value="">Radiología</option>
  </select>
</div>

<div class="ud-form-group">
  <label for="targetProvider">Adjuntar documento</label>
  <input type="file" id="fileInput" hidden/>
  <button id="fileUp" class="btn btn-primary btn-sm">Adjuntar</button>
  <p>No has seleccionado ningún archivo.</p>
</div>

 

`;


//MODAL
const editorContainer = document.querySelector(".editor");
const mainTitle = document.querySelector("span#mainTitle");
//MODAL

//DOCUMENTS
let provDocs, docDetails, newDoc, delDoc, downDoc, documentosActive = false;
//DOCUMENTS

//CITAS
let calendarParent, mainRightContentContainer, citasActive = false;
//CITAS

//PATIENTS
//NEW
let newPatientActive = false;
//EXISTING
let existingPatientActive = false, pacientesRightContent, tableViewer, contentViewer, personalViewer;



//PATIENTS

//INDEX
//Vars to handle window cascade positioning
let topPosition, leftPosition, windowCount = 0;
let positionArray = [
                 [50, 140, false],
                 [83, 173, false], 
                 [116, 216, false], 
                 [149, 249, false], 
                 [182, 282, false], 
                 [215, 315, false]
                ];

//INDEX

//CONFIG
let configActive = false, configRightContent, consCurrentProviders = [];
//Within configRightContent > consultorio > editar or crear
//On link click
const newConsultorio = `
                  <div class="row centerSubForm">
                    
                    <div class="col-lg-5 offset-1">

                      <div class="input-group">
                        <label for="consName">Nombre*</label>
                        <input type="text" name="consName" id="consName" >
                      </div>
                      
                      <div class="input-group">
                        <label for="consDir">Dirección*</label>
                        <input type="text" name="consDir" id="consDir" >
                      </div>

                      <div class="input-group">
                        <label for="consRnc">RNC*</label>
                        <input type="text" name="consRnc" id="consRnc" >
                      </div>
                      
                      <div class="input-group">
                        <label for="consPhone">Teléfono*</label>
                        <input type="text" name="consPhone" id="consPhone" >
                      </div>

                      <div class="input-group">
                        <label for="consSpecialties">Especialidades*</label>
                        <input type="text" name="consSpecialties" id="consSpecialties" >
                      </div>

                    </div>

                    <div class="col-lg-5 ">

                      <div class="checkGroup">
                        
                        <label for="" class="customLabel">Días laborables*</label>
                        <div>
                          L <input type="checkbox"> 
                          M <input type="checkbox">
                          X <input type="checkbox">
                          J <input type="checkbox">
                          V <input type="checkbox">
                          S <input type="checkbox">
                          D <input type="checkbox">
                        </div>

                        <label for="" class="customLabel">Horas laborables*</label>
                        <div class="row">
                          <div class="col-lg-6">
                            <ul>

                              <li>L <input type="time" class="dayTime l"> </li>
                              <li>M <input type="time" class="dayTime m"> </li>
                              <li>X <input type="time" class="dayTime x"> </li>
                              <li>J <input type="time" class="dayTime j"> </li>

                            </ul>
                          </div>

                          <div class="col-lg-6">
                            <ul>

                              <li>V <input type="time" class="dayTime v"> </li>
                              <li>S <input type="time" class="dayTime s"> </li>
                              <li>D <input type="time" class="dayTime d"> </li>

                            </ul>
                          </div>
                        </div>



                      </div>
                  

                      <div class="input-group">
                        <label for="consProviders">Incluir proveedores*</label>
                        <input type="text" name="consProviders" id="consProviders" disabled >
                      </div>

                      <div class="consProviderList draggableParent">

                      </div>

                      



                    </div>




                  </div>
`;
//Within configRightContent > consultorio
const consBtns = `
      <div class="row centerSubForm">
        <div class="col-lg-8 offset-2 ">

        <h4><a href="#" id="editConsBtn">Edita un consultorio existente</a> o <a href="#" id="newConsBtn"> crea uno nuevo</a></h4>

        </div>
      </div>
`;


//CONFIG




//CALENDAR
  const today = new Date();
  let selectedDate = {
    "day": parseInt(today.getDate()),
    "month": parseInt(today.getMonth()),
    "year":  parseInt(today.getFullYear())
  }

  "use strict";

  let
  //this will be used by the user.
  dycalendar = {},

  //starting year
  START_YEAR = 1900,

  //end year
  END_YEAR = 9999,

  //name of the months
  monthName = {
    full: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    mmm: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },

  //name of the days
  dayName = {
    full: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
    d: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    dd: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    ddd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  };
//CALENDAR
