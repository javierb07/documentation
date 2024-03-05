# State

A patten in which the object's behavior is determined by its state. An object transitions from one state to another (something needs to *trigger* a transition).
A formalized construct which manages state and transitions is called a *state machine*.

## Motivation

* Consider an ordinary telephone.
* What you do with it depends on the state of the phone/line:
    * If it's ringing or you want to make a call, you can pick it up.
    * Phone must be off the hook to talk/make a call.
    * If you try calling someone, and it's busy, you put the handset down.
* Changes in state can be explicit or in response to event (observer pattern).

## Summary

* Given sufficient complexity, it pays to formally define possible states and events/triggers.
* Model systems by having one of a possible states and transitions between these states.
* Such a system is called a *state machine*.
* Special frameworks exists to orchestrate state machines. 
* Can define:
    * State entry/exit behaviors.
    * Action when a particular event causes a transition.
    * Guard conditions enabling/disabling a transition.
    * Default action when no transitions are found for an event.