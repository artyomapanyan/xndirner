//37. Write a JavaScript function to get Timezone. Go to the editor
function seconds_with_leading_zeros(date) {
    let a = date.toString();
    let q = a.slice(35, length -1);
    
    return q;
  }
  let dt = new Date();
  console.log(seconds_with_leading_zeros(dt));