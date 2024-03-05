# Visitor

Typically a tool for structure traversal rather than anything else.
A pattern where a component (visitor) is allowed to traverse the entire inheritance hierarchy. Implemented by propagating a single *visit()* method throughout the entire hierarchy.

## Dispatch

* Which function to call?
* Single dispatch: depends on name of request and type of receiver.
* Double dispatch: depends on name of request and type of *two* receivers (type of visitor, type of element being visited).

## Motivation

* Need to define a new operation on an entire class hierarchy.
    * E.g., make a document model printable to HTML/Markdown.
* Do not want to keep modifying every class in the hierarchy.
    * I.e., an extension method won't do.
* Create an external component to handle rendering.
    * But avoid type checks.

## Summary

* Adding functionality to existing classes through double dispatch.
* Propagate an *accept(Visitor v)* method throughout the entire hierarchy.
* Create a visitor with *Visit(Foo)*, *Visit(Bar)*, ... for each element in the hierarchy.
* Each *accept()* simply calls *visitor.Visit(this)*.
* Using *dynamic*, we can invoke the right overload based on argument type alone (*dynamic dispatch*).
* Dynamic visitor comes with a performance cost.