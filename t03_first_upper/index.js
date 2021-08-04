function firstUpper(str) {
  if(!!str){
    str = str.trim().toLowerCase();
    str = str[0].toUpperCase() + str.slice(1);
  }
  else {str='';}
return str;
}
module.exports.firstUpper = firstUpper;