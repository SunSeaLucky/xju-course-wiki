# Lab 1: `fork()` 和 `vfork()`

## `fork()`

```c
#include <unistd.h>  
#include <sys/types.h>  
#include <errno.h>  
#include <stdlib.h>  
#include <stdio.h>  
#include <time.h>

int main()  
{  
    pid_t childpid;  
    int retval;  
    int status;  

    childpid = fork();  
    if (childpid >= 0)  
    {  
        if (childpid == 0)  
        {  
            printf("CHILD: I am the child process!\n");  
            printf("CHILD: Here's my PID: %d\n", getpid());  
            
            printf("CHILD: My parent's PID is: %d\n", getppid());  
            printf("CHILD: The value of fork return is : %d\n", childpid);  

            printf("CHILD: Sleep for 5 second...\n");  
            sleep(5);  
            printf("CHILD: Enter an exit value (0-255): ");  
            scanf("%d", &retval);  
            printf("CHILD: Goodbye!\n");  
            exit(retval);  
        }  
        else  
        {  
            // struct timespec ts = {0, 1000000};
            // nanosleep(&ts, NULL);

            printf("PARENT: I am the parent process!\n");  
            printf("PARENT: Here's my PID: %d\n", getpid());  

            printf("PARENT: The value of my child's PID is: %d\n", childpid);  
            printf("PARENT: I will now wait for my child to exit.\n");  
            wait(&status);  
            printf("PARENT: Child's exit code is : %d\n", WEXITSTATUS(status));  
            printf("PARENT: Goodbye! \n");  
            exit(0);  
        }  
    }  
    else  
    {  
        perror("fork error!");  
        exit(0);  
    }  
}  
```

```c
#include <unistd.h>  
#include <sys/types.h>  
#include <errno.h>  
#include <stdlib.h>  
#include <stdio.h>  

int main()  
{  
    pid_t childpid;  
    int retval;  
    int status;  

    childpid = fork();  
    if (childpid >= 0)  
    {  
        if (childpid == 0)  
        {  
            printf("CHILD: I am the child process!\n");  
            sleep(20);  
            execlp("ls", "ls", "-a", "-l", NULL);  
            exit(0);  
        }  
        else  
        {  
            printf("PARENT: I am the parent process!\n");  
            printf("PARENT: Here's my PID: %d \n", getpid());  
            // printf("PARENT: My child's PID is: %d \n", childpid);
        }  
    }  
    else  
    {  
        perror("fork error!");  
        exit(0);  
    }  
}  
```

```c
#include <stdio.h>  
#include <stdlib.h>  
#include <sys/types.h>  
#include <unistd.h>  

int main(void)  
{  
    int count = 1;  
    int child;  
    child = fork();  
    printf("Before create son, the father's count is: %d\n", count);  
    if ((child = fork()) < 0)  
    {  
        perror("fork error: ");  
    }  
    else if (child == 0) // fork return 0 in the child process because child can get his PID by getpid()  
    {  
        printf("This is son, his count is: %d (%p), and his pid is: %d\n", ++count, &count, getpid());  
        sleep(15);  
        exit(0);  
    }  
    else // the PID of the child process is returned in the parent's thread of execution  
    {  
        printf("This is father, his count is: %d (%p), his pid is: %d\n", count, &count, getpid());  
        sleep(5);  
        exit(0);  
    }  
    return EXIT_SUCCESS;  
}  
```

```c
#include <unistd.h>  
#include <sys/types.h>  
#include <errno.h>  
#include <stdlib.h>  
#include <stdio.h>  

int main() {  
    int count = 0;  
    int child;  
    int i;  
    if (!(child = fork())) {  
        for (i = 0; i < 10; i++) {  
            printf("This is son, his count is: %d, and his pid is: %d\n", ++count, getpid());  
        }  
    }  
    else {  
        for (i = 0; i < 10; i++) {  
            printf("This is father, his count is: %d, his pid is: %d\n", count, getpid());  
        }  
    }  
}  
```

## `vfork()`

```c
/*vfork示例*/  
#include <stdio.h>  
#include <stdlib.h>  
#include <sys/types.h>  
#include <unistd.h>  

int main(void)  
{  
    int count = 1;  
    int child;  
    child = vfork();  
    printf("Before create son, the father's count is: %d\n", count);  
    if ((child = vfork()) < 0)  
    {  
        perror("fork error: ");  
    }  
    else if (child == 0)  
    {  
        printf("This is son, his count is: %d (%p), and his pid is: %d\n", ++count, &count, getpid());  
        // sleep(15);  
        exit(0);  
    }  
    else  
    {  
        printf("After son, This is father, his count is: %d (%p), his pid is: %d\n", ++count, &count, getpid());  
        // sleep(5);  
        exit(0);  
    }  
    return EXIT_SUCCESS;  
}  
```

```c
#include "stdio.h"  

int main() {  
    int count = 0;  
    int child;  
    int i;  
    if (!(child = vfork())) {  
        for (i = 0; i < 10; i++) {  
            printf("This is son, his count is: %d, and his pid is: %d\n", ++count, getpid());  
        }  
        exit(0);  
    }  
    else {  
        for (i = 0; i < 10; i++) {  
            printf("This is father, his count is: %d, his pid is: %d\n", count, getpid());  
        }  
    }  
}  
```

## `clone()`

```c
#define _GNU_SOURCE
#include <stdio.h>
#include <errno.h>
#include <sched.h>
#include <unistd.h>
#include <sys/types.h>
#define STACK_SIZE 4096

int flag;
void *test(void *arg)
{
    int childnum;
    flag = 1;
    childnum = *(int *)arg;
    printf("Thread %d work cycle.\n", childnum);
    sleep(3);
    exit(0);
}

int main()
{
    pid_t pid;
    int childno = 1, mainnum = 0;
    void *csp, *tcsp;
    csp = (char *)malloc(STACK_SIZE);

    if (csp)
    {
        tcsp = csp + STACK_SIZE;
    }
    else
    {
        exit(errno);
    }

    flag = 0;
    childno = 1;

    if ((pid = clone((void *)&test, tcsp, CLONE_VFORK, (void *)&childno)) < 0)
    {
        printf("Couldn't create new thread!\n");
        exit(1);
    }
    else
    {
        while (flag == 0)
        {
            printf("Just created thread %d\n", pid);
            break;
        }
    }

    test(&mainnum);
    sleep(3);
    printf("Main program is now shutting down\n");
    return 0;
}
```