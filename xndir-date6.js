

//6. Write a JavaScript function to add specified minutes to a Date object. Go to the editor


function add_minutes(dat1, dat2) {
    dat1.setMinutes(dat1.getMinutes() + dat2);
    return dat1;
    
  }

console.log(add_minutes(new Date(2014,10,2), 30).toString());

"Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"