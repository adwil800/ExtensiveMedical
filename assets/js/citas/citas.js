

/*
  *Create appointment, waiting on request
  *Requests provider schedule, waiting on request
  *Select provider and patient, remove with right click
  *Persistent calendar, waiting on request
  *Working filtering with Modal and radio buttons
 */

document.body.addEventListener("click", citasClick);

document.body.addEventListener('paste', citasPaste);

document.body.addEventListener("keyup", citasKeyup);

document.body.addEventListener("contextmenu", citasContext);

/**
 * This function will handle on click events for calendar and make the js request to produce the table only if a provider has been selected
 */
function dateChangeSchedule(day, month, year){

  //Validate a provider has been selected
    const currentProvider = document.querySelector("#selectCitasProvider");

    if(currentProvider.value){
      //Get calendar parent and allow pointer events
              calendarParent.querySelector(".box").classList.remove("np-events");
              calendarParent.removeAttribute("style");
    
          //Wait on date changed from calendar.js and request provider's SCHEDULE on certain date
      console.log("from Date CHange:", day, month, year);
      const tableHeaders = ["Hora", "Ubicación", "Tipo de cita", "Duración"];
      const sampleData = [
        {
          "time": "9:00 AM",
          "location": "Saint Laurel's hospital",
          "type": "Vacunación",
          "duration": "15MIN" 
        },
        {
          "time": "9:15 AM",
          "location": "Saint Laurel's hospital",
          "type": "Chequeo general",
          "duration": "15MIN" 
        },
        {
          "time": "9:00 AM",
          "location": "Saint Laurel's hospital",
          "type": "Vacunación",
          "duration": "15MIN" 
        },
        {
          "time": "9:15 AM",
          "location": "Saint Laurel's hospital",
          "type": "Chequeo general",
          "duration": "15MIN" 
        },
        {
          "time": "9:00 AM",
          "location": "Saint Laurel's hospital",
          "type": "Vacunación",
          "duration": "15MIN" 
        },
        {
          "time": "9:15 AM",
          "location": "Saint Laurel's hospital",
          "type": "Chequeo general",
          "duration": "15MIN" 
        },
        {
          "time": "9:00 AM",
          "location": "Saint Laurel's hospital",
          "type": "Vacunación",
          "duration": "15MIN" 
        },
        {
          "time": "9:15 AM",
          "location": "Saint Laurel's hospital",
          "type": "Chequeo general",
          "duration": "15MIN" 
        },
        {
          "time": "9:00 AM",
          "location": "Saint Laurel's hospital",
          "type": "Vacunación",
          "duration": "15MIN" 
        },
        {
          "time": "9:15 AM",
          "location": "Saint Laurel's hospital",
          "type": "Chequeo general",
          "duration": "15MIN" 
        },
        {
          "time": "9:00 AM",
          "location": "Saint Laurel's hospital",
          "type": "Vacunación",
          "duration": "15MIN" 
        },
        {
          "time": "9:15 AM",
          "location": "Saint Laurel's hospital",
          "type": "Chequeo general",
          "duration": "15MIN" 
        }
              ];

        //Append data
        mainRightContentContainer.innerHTML = "";
        mainRightContentContainer.appendChild(genTable(sampleData, tableHeaders, "apptBody", false, "appt"));
    
    }else{

      customAlert("Aún no seleccionas el proveedor!")

    }

  
}
