package de.felixroske

import functionalkotlin.VeryBasic

fun doSomething() {
   val mutableMap = mutableMapOf(1 to "Anna Konda", 2 to "Clara Fall")

   mutableMap.forEach {
      println(it)
   }
}

class MyExtremlyFineClass {

   fun withSets() {
      val set1 = setOf("A", "B")
      val set2 = setOf("B", "C")

      println("Die Sets sind ${if (set1 == set2) "gleich" else "nicht gleich!"}")
   }

}

fun main() {
   MyExtremlyFineClass().withSets()
}


