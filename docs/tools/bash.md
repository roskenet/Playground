# Bash Cookbook

## Special characters

```$*``` and ```$@``` expand to the value of all positional parameters
```$0``` the path to the running script OR the shell itself
```$?``` exit code of last executed command
```$_``` last argument

## Input a file line by line

```bash
input="./my_list.txt"
while IFS= read -r line
do
  echo "$line"
done < "$input"
```

## Input a file line by line 2

```bash
for i in "$(cat ./my_list.txt)"
do
   echo "$i"
done
```

## Read and strip file name components

```bash
filename=$(basename -- "$fullfile")
extension="${filename##*.}"
filename="${filename%.*}"
```
