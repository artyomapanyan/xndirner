//23. Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.). Go to the editor

function english_ordinal_suffix(data) {
    let a = data.getDate();
    if (a === 1 || a === 21 || a === 31) {
      return a + "st";
    }
    if (a === 2 || a === 22) {
      return a + "nd";
    }
    if (a === 3 || a === 23) {
      return a + "rd";
    } else {
      return a + "th";
    }
  }
  
  let dt = new Date(2015, 10, 1);
  console.log(english_ordinal_suffix(dt));

  //1st