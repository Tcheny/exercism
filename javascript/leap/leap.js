//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var  Year = function(input) {
  Year.prototype.isLeap = function() {
  		return input % 400 == 0 || input % 4 == 0 && input % 100 != 0

    }
};
module.exports = Year;
