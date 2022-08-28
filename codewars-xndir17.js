function res(a, b, result, carry, base) {
    if (a.length == 0 && b.length == 0 && !carry)
      return result;
  
    var left = parseInt(a.pop() || '0', 10);
    var right = parseInt(b.pop() || '0', 10);
  
    var l = left + right + (carry || 0);
  
    return res(a, b, l % base + (result || ""), Math.floor(l / base), base);
  }
  
  function add(a, b) {
    return res(a.toString().split(""), b.toString().split(""), "", "", 10).toString();
  }
  
  
  
  console.log(add('63829983432984289347293874', '90938498237058927340892374089'));

  ////91002328220491911630239667963