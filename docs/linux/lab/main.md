# Linux 实验

## 实验五

练习一：
```bash
#!/bin/bash
#criptName: vartest.sh
# To test Positional Parameters & Special Parameters.
echo "Hello,$USER,the output of this script are as follows:"
echo "The script name is                    : $(basename $0)"
echo "The first param of the script is      : $1"
echo "The second param of the script is     : $2"
echo "The tenth param of the script is      : ${10}"
echo "All the params you input are          : $@"
echo "All the params you input are          : $*"
echo "The number of the params you input are: $#"
echo "The process ID for this script is     : $$"
echo "The exit status of this script is     : $?"

IFS='|'
echo "Command-Line Arguments Demo"
echo "* All args displayed using \$@ positional parameter *"
echo $@
echo "* All args displayed using \$* positional parameter *"
echo $*

echo '* All args displayed using "$@" positional parameter *'
echo "$@"     
echo '* All args displayed using "$*" positional parameter *'
echo "$*"    
```

练习二：
```bash
#!/bin/bash
#test position arguments ($* and $@ different)
echo 'This is $* example:'
for i in "$*"
	do
		echo $i
	done

echo 'This is $@ example:'
for i in "$@"
	do
		echo $i
	done
```

练习三：
```bash
#!/bin/bash
#Show position arguments context.(for)
dir=$1;shift
if [ -d $dir ]
then 
	cd $dir
	for name
	do
		if [ -f $name ]
		then  cat $name
		      echo "End of ${dir}/$name"
		fi
	done
else echo "Bad directory name:$dir"
fi
```

练习四：
```bash
#!/bin/bash
#Show position arguments context.(while )
dir=$1;shift
if [ -d $dir ]
then 
	cd $dir
	while [ $1 ]
	do
		if [ -f $1 ]
		then  cat $1
		      echo "End of ${dir}/$1"
		fi
	shift
	done
else echo "Bad directory name:$dir"
fi
```

练习五：
```bash
#!/bin/bash
##filename:useronline.sh
#judge weather $1 login with you in the same computer.
if [ $# -eq 1 ]
then 
	if  who|grep ^$1 > /dev/null
	then	echo "$1 is active."
	else	echo "$1 is not active."
	fi
else
	echo "Usage:$0 <username>"
	exit
fi
```

练习六：
```bash
#!/bin/bash
## filename: until-user_online_to_write.sh
username=$1
if [ $# -lt 1 ] 
	then echo "Usage: `basename $0` <username> [<message>]"
	exit 1
fi

if grep "^$username:" /etc/passwd > /dev/null 
	then  :
else
	echo "$username is not a user on this system."
	exit  2
fi

until who|grep "$username" > /dev/null 
do
	echo "$username is not logged on."
	sleep 6
done
shift; msg=$*
[[ X"$msg" == "X" ]] &&  msg="Hello,$username"
echo "$msg"|write $username
```

练习七：
```bash
#!/bin/bash
##filename:which-pi-like.sh
echo "which is your preferred PI?"
read -p "Arduino,pcDuino,RaspberryPi,Cubieboard,OrangePi,BananaPi: " pi
case $pi in
	[Aa]*|[Pp]*)	echo "You selected Arduion/pcDuino."	;;
	[Bb]*|[Cc]*|[Oo]*)	echo "You selected Cubieboard/Banana Pi/Orange Pi."	;;
	[Rr]*)		echo "You selected Raspberry Pi."	;;
	*)		echo "I don't know which PI you like."	;;
esac
```

