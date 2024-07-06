# Builder

When piecewise object construction is complicated, provide an API for doing it succinctly.
When construction gets a little bit too complicated.

The Builder design pattern is a creational pattern that separates the construction of a complex object from its representation. By doing so, the same construction process can create different representations.
Simply said, it builds a complex object using simple objects and a step-by-step approach.

For example, let's say we need to build cars. Each car has many options. The combination of options would lead to a huge list of constructors for the Car class. To avoid this, we will create a builder class, CarBuilder. We will send each option step by step to the CarBuilder and then construct the final car with the correct options.
This approach makes it flexible to add and remove options from the car.

## Motivation

- Some objects are simple and can be created in a single constructor call.
- Other objects require a lot of ceremony to create.
- Having an object with 10 constructor arguments is not productive.
- Instead, opt for piecewise construction.
- Builder provides an API for constructing an object step-by-step.

## Summary

- A builder is a separate component for building an object for when object construction gets too complicated.
- Can create mutually cooperating sub-builders.
- Can either give builder a constructor or return it via a static function.
- Often has a fluent interface. To make a builder fluent, return this.
- Different facets of an object can be built with different builders working in tandem via a base class.
- Sometimes creational patterns are complementary: Builder can use one of the other patterns to implement which components are built.
