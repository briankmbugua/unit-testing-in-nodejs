# unit-testing-in-nodejs
Node.js unit testing using Mocha, Chai, and Sinon.

# Mocha
Mocha is a feature-rich JavaScript test framework that runs on Node.js and in the browser.It enscapulates tests in test suits (describe block) and test cases (it block)

# Chai
To check for equality or compare results against actual results, we can the Node.js built-in assertion module.However, when an error ocuurs, the test cases will still pass.So mocha recomends using other assertion libraries Chai is the recommended one.

# Sinon
Often the method that is being tested is required to interact with or call other external methods.Therefore you need a utility to spy, stub or mock those external methods.
## Spy
A Spy is a fake function that keep track of the following for all that it calls:
- The arguments
- The return value
- The value of this
- The exception thrown(if any)

## Stub
A stub is a spy with predetermined behaviour
We can use a stub to:
- Take a predetermined action, like throwing an exception.
- Provide a predetermined response
- Prevent a specifi method from being called directly(especially when it triggers undesired behaviours like like HTTP requests)

## Mock
A mock is a fake function (like a spy) with pre-programmed behavior(like a stub) as well as pre-programmed exceptions.
We can use a mock to:
- Verify the contract between the code under test and external methods that it calls.
- Verify that an external method is called the correct number of times
- Verify an external method is called with the correct parameters.

The rule of thumb for a mock is: if you are not going to add an assertion for some specific call, don't mock it. Use a stub instead.