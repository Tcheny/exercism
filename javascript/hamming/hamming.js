var Hamming = function(){
  this.compute = function(str1,str2){
    if (str1.length != str2.length) throw 'DNA strands must be of equal length.'
    count = 0;
    arr1 = str1.split('');
    arr2 = str2.split('');
    for (var i=0; i<arr1.length; i++){
      if (arr1[i] == arr2[i]) continue;
      count ++;}
      return count
  }
}

module.exports = Hamming ;
