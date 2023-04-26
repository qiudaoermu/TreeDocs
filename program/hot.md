# 高阶函数

### 实现reduce 


```js
const reduce = (nums, fn, init) => {
  
  for (let i = 0; i < nums.length; i++) {
   init = fn(init,nums[i]);
  }

  return init;
};
```