# 实现 Iterator 类：



- Iterator(nums) 使用指定整数迭代器 nums 初始化迭代器。
- int next() 返回数组中的下一个元素，并将指针移动到下个元素处。
- bool hasNext() 如果数组中存在下一个元素，返回 true ；否则，返回 false 。


```js
/**
 * @param {Array} array
 */
let Iterator = function(array) {
  this.stack = array;
  this.pointer = 0;
};
/**
 * @return {number}
 */
Iterator.prototype.next = function() {
  return this.stack[this.pointer++];
};
/**
 * @return {boolean}
 */
Iterator.prototype.hasNext = function() {
  if (this.pointer > this.stack.length - 1) {
    return false;
  };
  return true;
};
// Your Iterator object will be instantiated and called as such:
var iterator = new Iterator([10, 2, 3, 6, 9, 0]);
var param_2 = iterator.next(); // 10
var param_3 = iterator.hasNext(); // true

```

