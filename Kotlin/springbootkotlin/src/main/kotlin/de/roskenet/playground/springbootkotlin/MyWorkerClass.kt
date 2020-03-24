package de.roskenet.playground.springbootkotlin

import org.springframework.stereotype.Component

interface Usable {
    fun doSomething(arg: String)
}

@Component
class MyWorkerClass: Usable {
    override fun doSomething(arg: String) {
        println("Hello I am MyWorkerClass!")
    }
}