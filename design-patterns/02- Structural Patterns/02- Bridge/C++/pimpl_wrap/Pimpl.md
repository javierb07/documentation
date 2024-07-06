# Pimpl Idiom

The pimpl idiom (Pointer to IMPLementation) is a design pattern used in C++ to achieve the following
goals:

- Encapsulation: Hide implementation details from the class's public interface.
- Reducing Compilation Dependencies: Minimize the recompilation of code when implementation details change.
- Binary Compatibility: Allow changing the private implementation without breaking binary compatibility.

## How the pimpl Idiom Works

The pimpl idiom involves splitting a class into two parts:

- Public Interface: Contains the class's public members and a pointer to the implementation.
- Private Implementation: Contains the actual implementation details.
