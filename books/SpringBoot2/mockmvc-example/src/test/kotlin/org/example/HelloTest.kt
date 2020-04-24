package org.example

import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc
import kotlin.test.assertEquals

//@RunWith(SpringRunner.class)
//@WebMvcTest
class HelloTest {

    @Autowired
    val mockMvc: MockMvc? = null

    @Test
    fun helloWorldShouldWork() {

        this.mockMvc?.perform(
            get("/hello").param("name", "World")
        )
            .andExpect(status().isOk())
            .andExpect(content().string("Hello, World\n"))
    }
}
