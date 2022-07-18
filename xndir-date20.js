//20. Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun). Go to the editor

function short_Days(date) {
    let a = date.getDay();
    switch (a) {
      case 0:
        return "sun"
        break;
      case 1:
        return 'Mon'
        break;
      case 2:
        return 'Tue'
        break;
      case 3:
        return 'Wed'
        break;
      case 4:
        return 'Thu'
        break;
      case 5:
        return 'Fri'
        break;
      case 6:
        return 'Sat'
          break;
      default:
        
    }
    
  }
  let dt = new Date(2015, 10, 1);
  console.log(short_Days(dt));
  //"Sun"