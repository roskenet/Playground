package de.zalando.tantalum;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.ConfigFileApplicationContextInitializer;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.ContextConfiguration;

// Option 1:
// Mock the RestClient by providing a different bean in the application context: 
@SpringBootTest
@ContextConfiguration(classes = {TantalumClientApplication.class,
                                 TantalumClientTest.ClientTestConfig.class}, 
    initializers = ConfigFileApplicationContextInitializer.class) 
public class TantalumClientTest {

    @TestConfiguration
    public static class ClientTestConfig {
        @Bean
        public TantalumClient tantalumClient() {
            return new TantalumClient() {
                @Override
                public List<Car> getAllCars() {
                    return Arrays.asList(new Car(1, "Volvo", "850", 450), 
                                         new Car(2, "VW", "Käfer", 550));
                }
            };
        }
    }

    @Autowired
    private MileageCounter mileageCounter;

    @Test
    void testCounter() throws Exception {
        assertThat(mileageCounter.getTotalMileage(), is(1000));
    }

}
