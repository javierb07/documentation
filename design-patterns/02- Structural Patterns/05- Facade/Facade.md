# Façade

Exposing several components through a single interface.
Provides a simple, easy to understand, user interface over a large and sophisticated body of code.

The Facade design pattern provides a unified interface to a set of interfaces in a subsystem, thus making a complex subsystem easier to use.

The Facade design pattern is often used when a system is very complex or difficult to understand because the system has a large number of interdependent classes or its source code is unavailable. This pattern hides the complexities of the larger system and provides a simpler interface to the client. It typically involves a single wrapper class that contains a set of members required by the client. These members access the system on behalf of the facade client and hide the implementation details.

## Motivation

* Balancing complexity and presentation/usability.
* A facade is an object that provides a simplified interface to a larger body of code, such as a class library. A facade can:
    * Make a software library easier to use, understand, and test, since the facade has convenient methods for common tasks,
    * Make the library more readable,
    * Wrap a poorly designed collection of APIs with a single well-designed API.

## Summary

* Build a Façade to provide a single, unified and simplified API over a set of classes/systems.
* May wish to (optionally) expose internals through the façade. 
* May allow users to 'escalate' to use more complex APIs if they need to.
* Adapter and Facade are both wrappers, but they are different kinds of wrappers. The intent of Facade is to produce a simpler interface, and the intent of Adapter is to design to an existing interface.
* The $ in jQuery, which provides a simple interface to common operations, is an example of the Facade design pattern.
