package de.felixroske.sandbox

enum class Element(val symbol: String, val atomicNumber: Int) {
    ACTINIUM("Ac", 89),
    ALUMINIUM("Al", 13),
    COPPER("Cu", 29)
}

enum class Color(val r: Int, val g: Int, val b: Int) {
    RED(255, 0, 0),
    ORANGE(255, 165, 0);

    fun rgb() = (r*256 + g) * 256 + b

}

fun doSomethingWithElements() {

}