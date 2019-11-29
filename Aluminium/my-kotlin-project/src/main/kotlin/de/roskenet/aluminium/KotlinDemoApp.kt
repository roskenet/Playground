package de.roskenet.aluminium

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.CommandLineRunner


@SpringBootApplication
class KotlinDemoApp : CommandLineRunner {
    override fun run(vararg args: String): Unit {
        println("Hello World")
    }
}

fun main(args: Array<String>) {
    runApplication<KotlinDemoApp>(*args)
}