function getThisDat(x) {
    let date = new Date();
   let a = ((date.getFullYear()) + x + (date.getMonth()) + x + (date.getDate()));
  
  return a
  }
  
  console.log(getThisDat("-"));