# Factories

A component responsible solely for the wholesale (not piecewise) creation of objects.

## Motivation

Factory Method and Abstract Factory:

* Object creation logic becomes too convoluted.
* Constructor is not descriptive.
    * Name mandated by name of containing type.
    * Cannot overload with same sets of arguments with different names.
    * Can turn into 'optional parameter hell'.
* Object creation (non-piecewise, unlike Builder) can be outsourced to:
    * A separate function (Factory Method).
    * That may exist in a separate class (Factory).
    * Can create hierarchy of factories with Abstract Factory.

## Summary

* A factory method is a static method that creates objects.
* A factory can take care of object creation.
* A factory can be an external class or reside inside the object as an inner class; the latter has the benefit of accessing private members.
* Factory method is more expressive than constructor.

## Factory Method Details

A Factory is a creator of objects that have a common interface.

Factory Method is a creational pattern that defines an interface for creating an object, but lets subclasses decide which class to instantiate. 

The best time to use the factory method pattern is when you have multiple variations of a single entity. For example, let's consider a program that creates different shapes. For this program, we need to define a ShapeFactory that will act as a common interface for creating shapes. Using this interface, each subclass will create the specific shape by implementing the ShapeFactory's corresponding "create" method. 

To better understand the Factory Method concept, consider a real-world employment agency. The agency helps clients fill positions for their company. The client provides the hiring criteria and then leaves the details of assessing candidates to the agency. The hiring agency takes care of a potential candidate’s eligibility, skill, and experience verification to ensure that the candidate matches the hiring criteria. In this case, the hiring agency acts as the factory. It allows the client to create new objects without having to know the details of how they're created.
We create objects without exposing the creation logic to the client and refer to newly created objects using a common interface (employment agency).
The factory method pattern relies on inheritance, as object creation is delegated to subclasses that implement the factory method to create objects.

The Factory Method is usually used when creating frameworks, which standardize the architectural model for a range of applications, but allow for individual applications to define their own objects and their instantiation.

## Abstract Factory Details

The Abstract Factory is a creational pattern, similar to the Factory Method pattern, with the key difference being that the Abstract Factory provides an interface for creating families of related or dependent objects without specifying their concrete classes.

Often, designs start out using Factory Method and evolve toward Abstract Factory as more flexibility is needed.

Imagine an application needs to run on different operating systems. In order to achieve this, we need to encapsulate the dependencies of our application. One approach is to have a "factory" object that has the responsibility of providing creation services for the entire platform family. Each time we need a new object for our application, we use the factory.
This makes a class independent of how its objects are created (which concrete classes are instantiated).

Consider a "factory" to create UI elements. The same factory can create buttons, text-boxes, windows, and other elements for two operating systems - Windows and MacOS.
When we want to create a new button, we do not instantiate a new button class for a particular operating system. Instead, we request the factory create a button, and the factory does so, considering the parameters of the operating system. The same applies for any other UI object. As a result, we get the object we need without getting into detail of how the objects are created.

Basically, the Abstract Factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes.
Because the service provided by the factory object is so pervasive, it is routinely implemented as a Singleton.