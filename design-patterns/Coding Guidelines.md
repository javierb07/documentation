# 10 Coding Guidelines

1. Your code shall read like English (without comments).
2. You should take time to name things well.
3. Your classes should ```do one thing``` (and functions too).
4. You should use as little state as possible.
5. You should not refactor before the third repetition.
6. You should not use ```Static``` and ```Global State```.
7. Your classes should be ```Highly Cohesive```.
8. Your classes should be ```Loosely Coupled```
9. You should favor ```Composition``` over ```Inheritance```.
10. You should follow the ```Law of Demeter```

## Static and Global State

Static state refers to the use of static variables or properties within a class or across classes. Static members are shared among all instances of a class and persist throughout the lifetime of the application.

Global state refers to the use of variables or data structures that are accessible from any part of the program, not limited to a specific class or module. Global state can be shared among different components, modules, or even threads.

## Highly Cohesive

High cohesion refers to the degree to which the elements (methods and fields) within a class or module are related and work together to achieve a common purpose. A highly cohesive class focuses on a single responsibility or functionality.

```C#
// High Cohesion
public class FileProcessor {
  public void ReadFile() { /* ... */ }
  public void ProcessData() { /* ... */ }
  public void WriteOutput() { /* ... */ }
}
```

## Loosely Coupled

Loose coupling refers to the degree of dependence between two components or modules in a system. When components are loosely coupled, changes to one component have minimal impact on the other. It promotes flexibility, maintainability, and ease of understanding.

```C#
// Loose Coupling
public class OrderProcessor {
  private readonly IShippingService _shippingService;

  public OrderProcessor(IShippingService shippingService) {
    _shippingService = shippingService;
  }

  public void ProcessOrder(Order order) {
    // Process order logic

    // Delegate shipping responsibility to the injected service
    _shippingService.ShipOrder(order);
  }
}

public interface IShippingService {
  void ShipOrder(Order order);
}
```

## Inheritance

Inheritance is a mechanism where a class (subclass or derived class) inherits properties and behaviors from another class (superclass or base class).
The subclass can extend or specialize the functionality of the superclass and may also introduce new methods or fields.

```C#
public class Animal {
  public void Eat() { /* ... */ }
  public void Sleep() { /* ... */ }
}

public class Cat : Animal {
  public void Meow() { /* ... */ }
}
```
## Composition

Composition is a mechanism where a class is composed of one or more objects of other classes.
Instead of relying on inheritance, a class contains instances of other classes, and it delegates tasks to these objects.

```C#
public class Engine {
  public void Start() { /* ... */ }
  public void Stop() { /* ... */ }
}

public class Car {
  private Engine _engine;

  public Car(Engine engine) {
    _engine = engine;
  }

  public void Drive() {
    _engine.Start();
    // Driving logic
  }

  public void Park() {
    // Parking logic
    _engine.Stop();
  }
}
```
## Law of Demeter

The Law of Demeter encourages designing classes in a way that minimizes dependencies between them. Objects should interact only with their immediate collaborators, and they should avoid reaching into the internal structure of other objects.


```C#
// Not following the Law of Demeter
class A {
  public B GetB() { /* ... */ }
}

class B {
  public void DoSomething() { /* ... */ }
}

// Usage
A a = new A();
a.GetB().DoSomething();

// Following the Law of Demeter
class A {
  private B b;

  public void DoSomethingWithB() {
    b.DoSomething();
  }
}

// Usage
A a = new A();
a.DoSomethingWithB();
```