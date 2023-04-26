# 高阶函数
## js高阶函数是以函数为参数的函数

### 实现reduce 


```js
var reduce = function(nums, fn, init) {
  
  for (let i = 0; i < nums.length; i++) {
   init = fn(init,nums[i]);
  }

  return init;
};
```