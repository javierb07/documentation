# Adapter

Getting the interface you want from the interface you have.
A construct which adapts an existing interface X to conform to the required interface Y.

The Adapter pattern is a structural design pattern that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.

## Motivation

An electrical engineering analogy to understand the adapter design pattern motivation:

- Electrical devices have different power (interface) requirements.
  - Voltage (5V, 220V)
  - Socket/plug type (Europe, UK, USA)
- We cannot modify our gadgets to support every possible interface.
  * Some support possible (e.g., 120/220V)
  *Thus, we use a special device (an adapter) to give us the interface we require from the interface we have.

## Summary

- Implementing an Adapter is easy.
- Determine the API you have and the API you need.
- Create a component which aggregates (has a reference to, ..-) the adapted.
- Intermediate representations can pile up: use caching and other optimizations.
- The key idea in this pattern is to work through a separate Adapter that adapts the interface of an already existing class without changing it.

## Example

Let's consider you have an old class that implements some functionality needed in your new project. However, the way it is written is not compatible with the philosophy and architecture of the system currently being developed. In order to use the old class without rewriting the whole functionality from scratch, we can create an adapter, also called a wrapper, that translates, or maps, the old component to the new system.
Your program will then call the wrapper, which will redirect to the corresponding methods in the old class.
