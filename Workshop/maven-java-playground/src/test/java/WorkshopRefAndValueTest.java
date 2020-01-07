import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class WorkshopRefAndValueTest {

    class Animal {
        private String name;

        public void setName(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }
    }

    @Test
    public void testValues() {
        int x = 2;
        int y = x;
        assertThat(y).isEqualTo(2);

        x = 4;
        assertThat(y).isEqualTo(2);
    }

    @Test
    public void testReferences() {
        Integer x = Integer.valueOf(42);
        Integer y = x;
        assertThat(y).isEqualTo(42);

        x = Integer.valueOf(3);
        assertThat(y).isEqualTo(3);

    }
}
