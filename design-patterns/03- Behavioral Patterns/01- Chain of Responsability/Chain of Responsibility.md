# Chain of Responsibility

Sequence of handlers processing an event one after another.
A chain of components who al get a change to process a command or a query, optionally having default processing implementation and an ability to terminate the processing chain.

## Motivation

* Unethical behavior by an employee; who takes the blame?
    * Employee
    * Manager
    * CEO
* You click a graphical element on a form:
    * Button handles it, stops further processing.
    * Underlying group box.
    * Underlying window.
* CCG (collectible card game) computer game:
    * Creature has attach and defense values.
    * Those can be boosted by other cards:

## Command Query Separation

* Command: Asking for an action or change (e.g., please set your attack value to 2).
* Query: Asking for information (e.g., please give your attack value).
* CQS: Having separate means of sending commands and queries to e.g., direct field access.

## Summary

* Allows components to process information/events in a chain.
* Each element in the chain refers to the next element; or make a list and go through it.
* Chain of Responsibility can be implemented as a chain of references or a centralized construct.
* Enlist objects in the chain, possibly controlling their order.
* Object removal from chain (e.g., in *Dispose()*)
