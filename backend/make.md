## 使用 make 编译
多个 C 程序的大型项目时，使用make 实用程序来管理您的 C 程序编译
本章介绍 make 编译的一些基本知识，并通过示例进行实际演示

简介
GNU make 实用程序（通常缩写为 make）是一种用于控制从源文件生成可执行文件的工具。 make 会自动确定复杂程序的哪些部分已更改并需要重新编译。 make 使用称为 **Makefiles** 的配置文件来控制程序的构建方式。

## Makefile

make 是通过 Makefile 文件获取如何编译、链接和安装、清理的方法，从而实现将源代码文件生成可执行文件和其他相关文件的工具。因此，Makefile 中描述了整个工程的编译和链接等规则，其中包含了哪些文件需要编译，哪些文件不需要编译，哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重建等等。Makefile 文件让工程编译实现了自动化，不需要每次都手动输入一堆源文件和参数。

本章简单介绍 Makefile 文件的结构和主要内容，更多 Makefile 的内容请通过 info make 命令查询

## Makefile 结构

Makefile 文件结构如下所示：

targets:prereguisites

command

或者是：

targets:prerequisites;command

command
其中：

- targets ：目标，可以是目标文件、可执行文件或标签。
- prerequisites ：依赖文件，生成 targets 需要的文件或者是目标。可以是多个，也可以是没有。
- command ：make 需要执行的命令（任意的 shell 命令）。可以有多条命令，每一条命令占一行。
- 目标和依赖文件之间要使用“:”分隔，命令的开始一定要按“Tab”。
  Makefile 文件结构表明了输出的目标，输出目标的依赖对象和生成目标需要执行的命令。

Makefile 主要内容
一个 Makefile 文件主要由以下内容组成。

- 显式规则

明确写出来的依赖关系，如要生成的文件，文件的依赖文件，生成的命令。

- 隐含规则

由 make 自动推导的规则，make 命令支持自动推导功能。

- 变量的定义

- 文件指示

文件指示包括三部分：

include 其他 Makefile，如 include xx.md。
选择执行，如#ifdef。
定义多行命令，如 define…endef。(define … endef)

- 注释

以 “#” 开头。

## 示例

使用 Makefile 实现编译的示例
1.cd 到代码目录，此处以用户“~/code”进行举例。

```shell
$ cd ~/code
```

2.创建 1 个头文件 hello.h 和 2 个函数 hello.c、main.c。

```shell
$ vi hello.h
$ vi hello.c
$ vi main.c
```

hello.h 代码内容示例：

```c
#pragma once
#include <stdio.h>
void hello();
```

hello.c 代码内容示例：

```c
#include "hello.h"
void hello()
{
        int i=1;
        while(i<5)
        {
                printf("The %dth say hello.\n", i);
                i++;
        }
}
```

main.c 代码内容示例：

```c
#include "hello.h"
#include <stdio.h>
int main()
{
        hello();
        return 0;
}
```

3.创建 Makefile 文件。

```shell
$ vi Makefile
```

Makefile 文件内容示例：

```shell
main:main.o hello.o
	gcc -o main main.o hello.o
main.o:main.c
	gcc -c main.c
hello.o:hello.c
	gcc -c hello.c
clean:
	rm -f hello.o main.o main
```

4.执行 make 命令。

```shell
$ make
```

命令执行后，会打印 Makefile 中执行的命令。如果不需要打印该信息，可以在执行 make 命令是加上参数-s。

gcc -c main.c

gcc -c hello.c

gcc -o main main.o hello.o

5.执行./main 目标。

```shell
$ ./main
```

命令执行后，打印如下信息：

The 1th say hello.

The 2th say hello.

The 3th say hello.

The 4th say hello.
