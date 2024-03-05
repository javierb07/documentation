# Mediator

A component that facilitates communication between other components without them necessarily being aware of each other or having direct (reference) access to each other.

## Motivation

* Components may go in and out of a system at any time:
    * Chat room participants.
    * Players in a MMORPG.
* It makes no sense for them to have direct references to one another.
    * Those references may go dead.

## Summary

* Provides mediation services between two objects:
    * E.g., message passing, chat room.
* Create the mediator and have each object in the system refer to it.
    * E.g., in a field.
* Mediator engages in bidirectional communication with its connected components.
* Mediator has functions the components can call.
* Components have function the mediator can call.
* Event processing (e.g., Rx) libraries make communication easier to implement.
