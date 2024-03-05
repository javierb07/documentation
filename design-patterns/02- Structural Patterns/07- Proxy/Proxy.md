# Proxy

An interface for accessing a particular resource.
A class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or some other added functionality.

The Proxy design pattern provides a placeholder for another object to control access to it.

A proxy is a class functioning as an interface to something else, such as a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate.
A proxy acts as a wrapper object that is being called by the client to access the real serving object behind the scenes. For the client, usage of a proxy object is similar to using the real object, because both implement the same interface.

## Motivation

* Yor are calling *foo.Bar()*
* This assumes that foo is in the same process as Bar().
* What if, later on, you want to put all *Foo*-related operations into a separate process?
    * Can you avoid changing your code?
* Proxy to the rescue!
    * Same interface, entirely different behavior.
* This is called a *communication proxy*.
    * Other types: logging, virtual, guarding, ...  

## Proxy vs. Decorator

* Proxy provides an identical interface; decorator provides an enhanced interface.
* Decorator typically aggregates (or has reference to) what it is decorating; proxy doesn't have to.
* Proxy might not even be working with a materialized object.

## Summary

* Provide a surrogate object that forwards calls to the real object while performing additional functions.
* A proxy has the same interface as the underlying object.
* To create a proxy, simply replicate the existing interface of an object.
* Add relevant functionality to the redefined member functions.
* Different proxies (access control, communication, logging, caching, etc.) have completely different behaviors.
* Dynamic proxy creates a proxy dynamically, without the necessity of replicating the target object API.
* A proxy can:
    * Hide information about the real object from the client.
    * Perform optimization like on-demand loading.
    * Do additional housekeeping jobs like audit tasks.

## Possible Usage Scenarios

### Remote Proxy
In distributed object communication, a local object represents a remote object. The local object is a proxy for the remote object, and method invocation on the local object results in remote method invocation on the remote object. An example would be an ATM implementation, where the ATM might hold proxy objects for bank information that exists in the remote server.

### Virtual Proxy
In place of a complex or heavy object, a skeleton representation may be advantageous in some cases. When an underlying image is huge in size, it may be represented using a virtual proxy object, loading the real object on demand.

### Protection Proxy
A protection proxy might be used to control access to a resource based on access rights