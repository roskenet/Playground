package de.felixroske

class Hello(val name: String, var isMarried: Boolean) {

    fun doSomething() {
        println("Hello $name. You are ${if (isMarried) "married" else "not married"}")
    }
}

fun main(args: Array<String>) {
    println("Hello, World")

    val hello = Hello("Felix", false)

    hello.isMarried = false

    hello.doSomething()
}

