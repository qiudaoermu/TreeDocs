# 高阶函数
## js高阶函数是以函数为参数的函数

### 实现reduce 
```js
Array.prototype.leduce = function (fn,params) {
  let count = 0;
  if (params) {
    this.push(params);
  };
  let res = this[count];
  while (++count < this.length) {
    res = fn(res, this[count]);
  };
  return res;
}
```