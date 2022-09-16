### gcc 使用

gcc 把 C++编译成二进制文件,让机器可以直接运行

---

### 1.新建 hello.cpp

hello.cpp 内容示例：

```c
#include <stdio.h>
int main() {
  printf("from douban's hello, NanRenBan!!!! \n");
  return 0;
}
```

### 2.然后编译 hello.cpp

```bash
gcc hello.cpp
```

产生默认文件 a.out
也可以指定输出文件名称，检测文件是否是可执行文件使用**file**命令

```
file ng
```

> 结果 **ng: Mach-O 64-bit executable x86_64**

```
gcc hello.cpp -o ng
```

### 3.最后可执行文件

```
./ng
```

(和 nginx 一样哦)

> O:from douban's hello, NanRenBan!!!!
