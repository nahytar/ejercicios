const removeStringValuesLongerThan = (num, obj) => {
 const keys = Object.keys(obj);
 for (let i = 0; i < keys.length; i++) {
   if (obj[keys[i]].length > num) {
     delete obj[keys[i]];
   }   
 }
 return obj;
}