package de.roskenet.hydrogen;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class HydrogenClientApplication implements CommandLineRunner {

    @Bean
    RestTemplate restTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setObjectMapper(new ObjectMapper());
        restTemplate.getMessageConverters().add(converter);
        return restTemplate;
    }
    
    
	public static void main(String[] args) {
		SpringApplication.run(HydrogenClientApplication.class, args);
	}

    @Override
    public void run(String... args) throws Exception {
        
        // Do something here!
    }

}
