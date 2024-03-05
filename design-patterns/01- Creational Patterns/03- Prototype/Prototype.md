# Prototype

A partially or fully initialized object that you copy (clone) and make use of.
When it's easier to copy an existing object to fully initialize a new one.

The Prototype design pattern is a creational pattern that uses a prototype to create new objects by copying this prototype. In other words, instead of creating new objects, we clone them from the prototype.

The pattern is used when object creation is resource expensive. By cloning new objects, we avoid the inherent cost of creating a new object in the standard way.
Prototype is unique among the other creational patterns as it doesn't require a class - only an object.

Mitotic cell division, which results in two identical cells, is an example of the Prototype pattern. When a cell splits, two cells of identical genotype result. In other words, the cell clones itself.

## Motivation

* Complicated objects (e.g., cars) aren't designed from scratch, they reiterate existing designs.
* An existing (partially or fully constructed) design is a Prototype.
* We make a copy (clone) of the prototype and customize it (requires 'deep copy' support).
* We make the cloning convenient (e.g., via a Factory)

## Summary

* Creation of object from an existing object.
* To implement a prototype, partially construct an object and store it somewhere.
* Clone the prototype:
    * Implement your own deep copy functionality or;
    * Serialize and deserialize.
* Customize the resulting instance.
