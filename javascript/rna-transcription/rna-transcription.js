var DnaTranscriber = function(){
  DnaTranscriber.prototype.toRna = function(dnaStrand) {
    if ((/X/g).test(dnaStrand)) throw 'Invalid input'

  	var dna = {
  		C: "G",
  		G: "C",
  		A: "U",
  		T: "A"
  	}
  	return dnaStrand.replace(/C|G|T|A/g, trans => dna[trans]);
  }
};
module.exports = DnaTranscriber;
