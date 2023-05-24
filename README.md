# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

* You would want to put automated tests in a Github action that runs whenever code is pushed (option 1). This is preferable since it avoids issues of the program running locally but not online. Additionally, the testing would be automated, saving time when deploying.

2)  Would you use an end to end test to check if a function is returning the correct output? (yes/no)

* No
  
3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

* I would lean toward no, but this depends on exactly what the developer wants to test. If their messaging functionality strictly is to only test one function that crates a message, then it could be alright. I would expect, however, that messaging would require multiple functions (input, sending to the server, etc). Especially if the developer also wants to see that the message could be recieved by the server, a larger end-to-end test may be more appropriate.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

* This application could be good for a unit test. It is concievable that this functioanlity would take an input message and simply check if the length is over 80 characters, which could be tested at a small scale with a few cases.