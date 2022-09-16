C 语言编译器不仅有 **gcc** 还有苹果出的**clang**，由编译器大神**Chris Lattner**开发。

Clang 只支持 C，C++和 Objective-C 三种语言

---

# llvm 工具链的使用

创建一个 C 语言文件 test.c

```c
#include <stdio.h>
int main() {
  printf("hello world\n");
  return 0;
}
```

编译生成可执行文件：

```shell
clang test.c -o test
```

运行可执行文件：

```shell
./test
```
