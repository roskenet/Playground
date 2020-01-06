package org.example

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

class HelloTest {

    @Test
    fun testDoSomething() {
        val amazingString = "MyAmazingString";

        val result = doSomething(amazingString);

        assertThat(result).isEqualTo("MYAMAZINGSTRING");
    }
}
