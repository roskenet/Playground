package de.felixroske.convertstringtocamelcase

fun main() {

    val myString = "the_stealth_warrior"
    val regex = """[-_]\w""".toRegex()

    val s = regex.replace(myString) {
        it.value.get(1).toString().toUpperCase()
    }

    println(s)
}

fun toCamelCase(str: String):String {
    val regex = """[-_]\w""".toRegex()

    val s = regex.replace(str) {
        it.value.get(1).toString().toUpperCase()
    }
   return s
}
