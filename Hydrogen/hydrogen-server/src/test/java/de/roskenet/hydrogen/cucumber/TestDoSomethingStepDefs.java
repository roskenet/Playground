package de.roskenet.hydrogen.cucumber;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import cucumber.api.java8.En;

public class TestDoSomethingStepDefs implements En {

    public TestDoSomethingStepDefs() {
        Given("The hydrogen-server is running", () -> {
            // Write code here that turns the phrase above into concrete actions
            
            //            throw new cucumber.api.PendingException();
            
            System.out.println("Hello I am running!");
            
        });

        When("I perform GET on the endpoint", () -> {
            // Write code here that turns the phrase above into concrete actions
            //            throw new cucumber.api.PendingException();
            
            System.out.println("And here is the place to do something");
        });

        Then("I get a {int}", (Integer int1) -> {
            // Write code here that turns the phrase above into concrete actions
            // throw new cucumber.api.PendingException();
            
            assertThat(int1, is(200));
        });
    }
}
