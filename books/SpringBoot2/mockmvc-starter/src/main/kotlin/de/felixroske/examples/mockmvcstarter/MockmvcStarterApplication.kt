package de.felixroske.examples.mockmvcstarter

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MockmvcStarterApplication

fun main(args: Array<String>) {
	runApplication<MockmvcStarterApplication>(*args)
}
