# Observer

An *observer* is an object that wishes to be informed about events happening in the system. The entity generating the events is an *observable*.

## Motivation

* We need to be informed when certain things happen:
    * Object's property changes.
    * Object does something.
    * Some external event occurs.
* We want to listen to events and be notified when they occur.
* Built into C# with the *event* keyword:
    * But then what is this IObservable<T>/IObserver<T> for?
    * What about INotifyPropertyChanging/Changed?
    * And what are BindingList<T>/

## Summary

* Built into C# with the *event* keyword.
* Additional support provided for properties, collections an observable streams.
* Observer is an intrusive approach: an observable must provide an event to subscribe to.
* Special care must be taken to prevent issues in multithreaded scenarios.
* .NET comes with observable collections.
* IObserver<T>/IObservable<T> are used in stream processing (Reactive Extensions).