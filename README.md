# Lab 8 - Starter

Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

    Within a Github action that runs whenever code is pushed. This option is the only one that is automated, as it runs whenever code is pushed without having to manually run the tests. The other two options require the developer to manually run the tests, either locally before pushing the code or afterwards when the project is complete.

Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    No, you would not use an end to end test to check if a function is returning the correct output.

Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    Yes, I would use a unit test to test the "message" feature of a messaging application. A unit test makes sense in this case because there is a very clear "it works" and "it does not work" expected outcome for the feature. 

Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    Yes, I would  use a unit test to test this feature. Similarly, we could also create a test to check the expected out if we try adding a message length that is greater than 80 characters. 