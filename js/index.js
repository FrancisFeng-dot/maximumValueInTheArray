function digitalsort(e) {
  var newarr = [];
  var oldarr = [];
  var arrlength = 0;
  if (arguments[2] && arguments[2].length > 0) {
    arrlength = arguments[2].length;
  }
  for (var i = 0; i < arguments[0].length; i++) {
    if (arguments[0][i][arguments[1]] == 1) {
      newarr.push(arguments[0][i]);
    } else {
      oldarr.push(arguments[0][i]);
    }
  }
  if (newarr.length > 3 - arrlength) {
    if (arguments[1] <= 30) {
      if (arrlength > 0) {
        digitalsort(newarr, arguments[1] + 1, arguments[2]);
      } else {
        digitalsort(newarr, arguments[1] + 1);
      }
    }
  } else if (newarr.length == 3 - arrlength) {
    if (arrlength > 0) {
      for (var i = 0; i < arguments[2].length; i++) {
        newarr.unshift(arguments[2][i]);
      }
    }
    for (var k = 0; k < newarr.length; k++) {
      newarr[k] = parseInt(newarr[k].join(''),2);
    }
    console.log(newarr);
    return newarr;
  } else if(newarr.length>0&&(newarr.length < 3 - arrlength)){
    if (arguments[1] <= 30) {
      if (arrlength > 0) {
        for (var i = 0; i < arguments[2].length; i++) {
          newarr.unshift(arguments[2][i]);
        }
      }
      digitalsort(oldarr, arguments[1] + 1, newarr);
    }
  }
  if ((oldarr.length == arguments[0].length) && arguments[1] <= 30) {
    if (arrlength > 0) {
      digitalsort(arguments[0], arguments[1] + 1, arguments[2]);
    }else{
      digitalsort(arguments[0], arguments[1] + 1);
    }
  }
}