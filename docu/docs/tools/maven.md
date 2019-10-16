# Maven 

## Add the maven wrapper

To ensure that everybody has the correct maven version to build a specific project it is a good idea to have maven to be part of your code:

To add the maven wrapper tool to an existing project:

```bash
cd yourmavenproject
mvn -N io.takari:maven:0.7.6:wrapper -Dmaven=3.5.4
```
