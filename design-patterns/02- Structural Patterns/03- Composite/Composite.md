# Composite

Treating individual and aggregate objects uniformly.
A mechanism for treating individual (scalar) objects and compositions of objects in a uniform manner.

The Composite pattern describes a group of objects that is treated the same way as a single instance of the same type of object. 

Composite should be used when clients ignore the difference between compositions of objects and individual objects.

For example, when dealing with tree-structured data, programmers often must discriminate between a leaf-node and a branch. This makes code more complex, and therefore, more error-prone. 
The solution is an interface that allows treating complex and primitive objects uniformly. 
Other examples are menus that contain menu items, each of which could be a menu. Directories that contain files, each of which could be a directory.

## Motivation

* Objects use other objects' fields/properties/members through inheritance and composition.
* Composition lets us make compound objects.
    * E.g., a mathematical expression composed of simple expressions; or
    * A grouping of shapes that consists of several shapes.
* Composite design pattern is used to treat both single (scalar) and composite objects uniformly.
    * I.e., Foo and Collection<Foo> have common APIs.

## Summary

* Objects can use other objects via inheritance/composition.
* Some composed and singular objects need similar/identical behaviors.
* Composite design pattern lets us treat both types (individual and composition) of objects uniformly.
* C# has special support for the *enumeration* concept.
* A single object can masquerade as a collection with *yield return this;*
* The key concept is that you can manipulate a single instance of the object just as you would manipulate a group of them.