package NewRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"/Users/waqaskhan/Desktop/ITGHackathon/com.mavenCucumber/features"},
		glue= {"stepDefinition"},
		plugin= {"html:target/site/cucumber-pretty",
				"json:target/cucumber.json",
				"rerun:target/rerun.txt"}
)

public class TestRunner  {

}
