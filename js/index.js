function digitalsort(e) {
  var newarr = [];
  var oldarr = [];
  var arrlength = 0;//已经得到的最大值的数量
  if (arguments[2] && arguments[2].length > 0) {//计算已经得到的最大值的数量
    arrlength = arguments[2].length;
  }
  //遍历原数组，在指定的位如果有等于1的，说明这个数可能是最大值，保存到newarr中
  for (var i = 0; i < arguments[0].length; i++) {
    if (arguments[0][i][arguments[1]] == 1) {
      newarr.push(arguments[0][i]);
    } else {
      oldarr.push(arguments[0][i]);
    }
  }
  
  //以下三种情况 
  //1.如果当前这一轮遍历，得到的较大值的数量大于3个,从newarr中找出最大值
  if (newarr.length > 3 - arrlength) {
    if (arguments[1] <= 30) {
      if (arrlength > 0) {//如果上一步已经找到部分最大值，就带着部分最大值（arguments[2]），找剩下的最大值
        digitalsort(newarr, arguments[1] + 1, arguments[2]);
      } else {//遍历数组的下一个位
        digitalsort(newarr, arguments[1] + 1);
      }
    }
  } 
  //2.如果得到的最大值刚好是3个
  else if (newarr.length == 3 - arrlength) {
    if (arrlength > 0) {//如果arguments[2]中已经有了部分最大值，取出来保存到newarr中
      for (var i = 0; i < arguments[2].length; i++) {
        newarr.unshift(arguments[2][i]);
      }
    }
    for (var k = 0; k < newarr.length; k++) {
      newarr[k] = parseInt(newarr[k].join(''),2);//将2进制数字组变成数字
    }
    console.log(newarr);
    return newarr;//返回结果
  } 
  //3.如果找到了部分最大值，但是还不够3个
  else if(newarr.length>0&&(newarr.length < 3 - arrlength)){
    if (arguments[1] <= 30) {
      if (arrlength > 0) {
        for (var i = 0; i < arguments[2].length; i++) {
          newarr.unshift(arguments[2][i]);
        }
      }//继续在oldarr中找，从数组位的下一位找起
      digitalsort(oldarr, arguments[1] + 1, newarr);
    }
  }
  
  //如果这一轮，一个都没有找到，从数组位的下一位开始继续找
  if ((oldarr.length == arguments[0].length) && arguments[1] <= 30) {
    if (arrlength > 0) {
      digitalsort(arguments[0], arguments[1] + 1, arguments[2]);
    }else{
      digitalsort(arguments[0], arguments[1] + 1);
    }
  }
}
