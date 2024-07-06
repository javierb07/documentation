# Singleton

Singleton is a creational design pattern, which ensures that only one instance of a class is created.
A component which is instantiated only once.
Sometimes called anti-pattern, but it has it uses when used appropriately.

> When discussing which patterns to drop, we found that we still love them all. (Not really - I'm in favor of dropping Singleton. Its use is almost always a design smell.)
>
> -- <cite>Erich Gamma</cite>

## Motivation

- For some components it only makes sense to have on in the system:
  - Database repository.
  - Object factory.
- E.g., the constructor is expensive:
  - We only do it once.
  - We provide everyone with the same instance.
- Want to prevent anyone creating additional copies.
- Need to take care of lazy instantiation and thread safety.

## Summary

- Making a 'safe' (thread-safe) singleton is easy: construct a static Lazy<T> and return its Value.
- Singletons are difficult to test.
- Instead of directly using a singleton, consider depending on an abstraction (e.g., an interface).
- Consider defining singleton lifetime in DI container

## Uses

Singleton may be used when:

- There is need to access to a shared resource.
- Access to a shared resource will be requested from multiple, separate parts of the program.
- Only one object can be instantiated.

## Example

A good example is a Logger, which is used in every part of the system to log some information. For example, in a social network, every activity of a user should be logged (login, logout, comment, posts, likes).
Instead of instantiating a new Logger instance over and over again for each activity type, it would be better to have a single instance and access it when needed. In other words, it is better to use the same Logger instance to log user logins, logouts, comments, posts, and likes, when necessary.
