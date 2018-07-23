package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;


public class Test {
	 WebDriver driver;
	
	@Given("^I login to the website$")
	public void i_login_to_the_website()  {
		System.setProperty("webdriver.chrome.driver", "/Users/waqaskhan/Downloads/chromedriver");
	    driver = new ChromeDriver();
	    driver.get("https://www.google.com");
	    
	}

	@Given("^I enter username and password$")
	public void i_enter_username_and_password()  {
	   
	}

	@Given("^I click login$")
	public void i_click_login()  {
	    
	}

	@Given("^I logout$")
	public void i_logout() {
	    Assert.assertEquals(12, 13);
	}

}
