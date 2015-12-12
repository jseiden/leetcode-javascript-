/**
 * @constructor
 */
var MinStack = function() {
  this.storage = [];
  this.minStorage = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
  this.storage[this.storage.length] = x;
  if (!this.minStorage.length) {
    this.minStorage[0] = x;
  }
  if (x < this.minStorage[this.minStorage.length - 1]) {
    this.minStorage[this.minStorage.length] = x;
  }

};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  var temp = this.storage[this.storage.length - 1];
  this.storage = this.storage.slice(0, -1);
  if (temp === this.minStorage[this.minStorage.length - 1]) {
    this.minStorage = this.minStorage.slice(0,-1);
  }
  return temp;

};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.storage.length -1];

};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStorage[this.minStorage.length - 1];
};

