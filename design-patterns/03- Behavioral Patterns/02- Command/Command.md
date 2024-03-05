# Command

An object which represents an instruction to perform a particular action. Contains all the information necessary for the action to be taken.

## Motivation

* Ordinary C# statements are perishable.
    * Cannot undo a flied/property assignment.
    * Cannot directly serialize a sequence of actions (calls).
* Want an object that represents an operation.
    * X should change its property Y to Z
    * X should do W().
* Uses: GUI commands, multi-level undo/redo, macro recording and more!

## Summary

* Encapsulate all details of an operation in a separate object.
* Define instruction for applying the command (either in the command itself, or elsewhere).
* Optionally define instructions for undoing the command.
* Can create composite commands (a.k.a. macros).
* Good for audit, replay, undo/redo.
* Part of CQS/CQRS (Query is also, effectively, a command). 
    * CQS: Command Query Separation.
    * CQRS: Command Query Segregation.
