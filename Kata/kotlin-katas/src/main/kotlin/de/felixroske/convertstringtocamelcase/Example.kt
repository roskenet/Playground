package de.felixroske.convertstringtocamelcase

fun main() {
//    toCamelCase("the-stealth-warrior")

    val list = listOf("the_stealth_warrior", "Zwei", "Drei", "Vier")
    val regex = "(\\w*[-_]\\w*)".toRegex()

    list.forEach {
        if(regex.matches(it)) {
            println("$it matches")
        }
    }

}

fun toCamelCase(str: String): String {

    val regex = "(\\w*)(_|-(\\w)\\w*)*".toRegex()

    val all = regex.findAll(str)

    all.forEach {
        println("${it.groupValues}")
    }

    return ""
}


