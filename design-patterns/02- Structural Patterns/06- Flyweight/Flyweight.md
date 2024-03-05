# Flyweight

A space optimization technique that lets us use less memory by storing externally the data associated with similar objects.

The Flyweight design pattern efficiently supports a large number of objects.
A flyweight is an object that minimizes memory usage by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory. 

For example, when representing large text documents, creating an object for each character in the document would result in a huge number of objects that couldn't be processed efficiently. Instead, for every character there might be a reference to a flyweight glyph object shared by every instance of the same character in the document; only the position of each character in the document would need to be stored internally.

As another example, modern web browsers use this technique to prevent loading the same images twice. When a browser loads a web page, it traverses through all images on that page. The browser loads all new images and places them in the internal cache. For already loaded images, a flyweight object is created, which has some unique data-like position within the page, but the image itself is referenced from the cache.

## Motivation

* Avoid redundancy when storing data.
* E.g., MMORPG:
    * Plenty of users with identical first/last names.
    * No sense in storing same first/last name over and over again
    * Store a list of names and pointers to them
* .NET performs string interning, so an identical string is stored only once.
* E.g., bold or italic text in the console:
    * Don't want each character to have a formatting character.
    * Operate on *ranges* (e.g., line number, start/end positions).

## Summary

* Efficiently support very large numbers of similar objects.
* Store common data externally.
* Define the idea of "ranges" on homogeneous collections and store data related to those ranges.
* .NET string interning *is* the Flyweight pattern.
* To enable safe sharing between clients and threads, Flyweight objects must be immutable. 
* Flyweight objects are by definition value objects. The identity of the object instance is of no consequence; therefore, two Flyweight instances of the same value are considered equal.
