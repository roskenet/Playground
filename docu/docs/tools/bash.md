# Bash Cookbook

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
