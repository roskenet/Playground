import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class HelloWorldTest {

    @Test
    public void testDoSomething() {
        String amazingString = "MyAmazingString";

        String result = HelloWorld.doSomething(amazingString);

        assertThat(result).isEqualTo("MYAMAZINGSTRING");
    }

}
