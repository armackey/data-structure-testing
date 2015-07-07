// do not use any native array methods
function Stack() {
  this.storage = [];
  this.index = 0;
}

Stack.prototype.push = function(value) {

this.storage[this.index] = value;
this.index++;
};


Stack.prototype.pop = function() {

  var value = this.storage[this.index-1];
  this.index--;
  return value;

};

