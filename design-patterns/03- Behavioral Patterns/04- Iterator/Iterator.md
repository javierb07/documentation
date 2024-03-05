# Iterator

How traversal of data structures happens and who makes it happen.
An object (or, in .Net, a method) that facilitates the traversal of a data structure.

## Motivation

* Iteration (traversal) is a core functionality of various data structures.
* An *iterator* is a class that facilitates the traversal.
    * Keeps a reference to the current element.
    * Knows how to move to a different element.
* Iterator is an implicit construct.
 * .Net builds a state machine around your *yield return* statements.

## Summary

* Provides an interface for accessing elements of an aggregate object.
* IEnumerable<T> should be used in the majority of cases.
* An iterator specifies how you can traverse and object.
* An iterator object, unlike a method, cannot be recursive.
* Generally, an IEnumerable<T>-returning method is enough.
* Iteration works through *duck typing* - you need a GetEnumerator() that yields a type that has Current and MoveNext().