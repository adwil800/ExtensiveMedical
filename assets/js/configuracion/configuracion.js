


document.body.addEventListener("click", configClick);
document.body.addEventListener("keyup", configKeyup);

//superModal();
//mainTitle
//editorContainer

/**
 * This function will handle on click events for calendar and make the js request to produce the table only if a provider has been selected
 */
 function dateChangeSchedMaker(day, month, year){

    //Validate a provider has been selected
  
        //Get calendar parent and allow pointer events
        calendarParent.querySelector(".box").classList.remove("np-events");
        calendarParent.removeAttribute("style");
      
            //Wait on date changed from calendar.js and request provider's SCHEDULE on certain date
        console.log("from Date CHange:", day, month, year);
  
    
  }
  