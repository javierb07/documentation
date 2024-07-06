# Solid Principles

Useful principles of object-oriented design.

- Design principles introduced by Robert C. Martin.
- Frequently referenced in Design Pattern literature.

SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.
Although the SOLID principles apply to any object-oriented design, they can also form a core philosophy for methodologies such as agile development or adaptive software development.

## Single Responsibility Principle

- There should never be more than one reason for a class to change. In other words, every class should have only one responsibility. This is also related to the separation of concerns.
  - A class should only have one reason to change.
  - _Separation of concerns_ - different classes handling different, independent tasks/problems.

## Open-Closed Principle

- Classes should be open for extension but closed for modification.

## Liskov Substitution Principle

- Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.
- Related to design by contract.
- You should be able to substitute a base type for a subtype.

## Segregation

- Many client-specific interfaces are better than one general-purpose interface.
- Don't put too much into an interface; split into separate interfaces
- _YAGNI_ - You Ain't Going to Need It

## Dependency Inversion Principle

- High-level modules should not depend upon low-level ones; use abstractions.
- Depend upon abstractions, not concretions.
