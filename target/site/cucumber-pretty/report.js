$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFile.feature");
formatter.feature({
  "line": 1,
  "name": "As a valid user , I should be able to login",
  "description": "",
  "id": "as-a-valid-user-,-i-should-be-able-to-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "As a valid user , I should be able to login",
  "description": "",
  "id": "as-a-valid-user-,-i-should-be-able-to-login;as-a-valid-user-,-i-should-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I login to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I logout",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter username and password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I logout",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter username and password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I logout",
  "keyword": "And "
});
formatter.match({
  "location": "Test.i_login_to_the_website()"
});
formatter.result({
  "duration": 1898214601,
  "status": "passed"
});
formatter.match({
  "location": "Test.i_enter_username_and_password()"
});
formatter.result({
  "duration": 22869,
  "status": "passed"
});
formatter.match({
  "location": "Test.i_click_login()"
});
formatter.result({
  "duration": 29099,
  "status": "passed"
});
formatter.match({
  "location": "Test.i_logout()"
});
formatter.result({
  "duration": 2396292,
  "error_message": "java.lang.AssertionError: expected:\u003c12\u003e but was:\u003c13\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat stepDefinition.Test.i_logout(Test.java:33)\n\tat ✽.And I logout(FeatureFile.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "Test.i_enter_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test.i_click_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test.i_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test.i_enter_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test.i_click_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test.i_logout()"
});
formatter.result({
  "status": "skipped"
});
});