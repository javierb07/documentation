# Linked Lists

A linked list is a sequential-access data structure used for storing ordered elements. They prioritize quick and easy data insertion and deletion over item lookup. All linked lists are collections of node data structures that are connected by pointers - that's where the "link" in "linked list" comes from.

You’ll use linked lists to solve problems in which having quick insertion and deletion is important, and when it’s not important to be able to have random access to elements.

## Types of Linked Lists

We primarily see two types of linked lists:

* Singly linked list: (most common) Each node contains the data we want to store, as well as a next pointer to the next node in the linked list. Singly linked lists support traversal in only one direction.

* Doubly linked list: Each node contains the data we want to store, as well as next and previous pointers to the node's neighboring elements. Doubly linked lists support traversal in both directions.

Doubly linked lists require more space per node and their basic operations are more expensive than for singly linked lists. However, they are often easier to manipulate than singly linked lists because they allow for fast and easy sequential access to the list in both directions.

## Essential Vocab
* Pointer: The memory location of a data structure.
* Node: A data structure with two fields. The data field contains the information we want to store, and the next field, which is a pointer to the next node in the linked list. A linked list can be thought of as a series of nodes. Nodes for doubly linked lists need next and previous pointers.

![node_example](./images/node_example.png "node_example").

A node for a singly linked list and a doubly linked list
* Head: A pointer to the first node in the linked list. All nodes are accessible from the head node by visiting the chain of previous nodes.
* Tail: The last element in the linked list. The `next` pointer of the tail element points to `null` to indicate the end of the list.
* Size: The number of elements in the linked list.

![linked_list](./images/linked_list.png "linked_list").

### Strengths and Weaknesses
Linked lists are often compared to arrays, a data structure that provides random access to elements, meaning that their strengths and weaknesses are frequently compared to those of arrays as well.

#### Strengths
* Linked lists store ordered lists of data in nodes.
* Linked lists allow for quick ```(O(1))``` addition and removal of elements (advantage over an array).
* Linked lists can be resized dynamically.
* The size of a linked list is only limited by the amount of available memory.
#### Weaknesses
* Linked lists can require more space in memory than arrays do.
* Linked lists are sequential-access instead of random-access, meaning that accessing the ```ith``` element can be slow because you must iterate over ```i``` elements to get there.

#### Common Operations Cheat Sheet
Use a Linked List when:
* You don't know the number of elements in your list before you start.
* You have lists that need to grow (e.g. accepting input from files, the internet, other streams, etc.)
* You need to implement a more sophisticated data structure like a heap, stack, or queue.

| Operation                  | Description                               | Time complexity                            | Mutates structure?  |
| :----:                     | :----:                                    | :----:                                     | :----:              |
| ```find(value)```          | Returns a pointer to the ```node``` containing value in the data field, or ```NULL``` if it isn't in the list. This method can be used for ```membership checking``` as well.                                       | ```O(n)```                                 | No                  |
| ```find(index)```          | Returns a pointer to the ```index```th node from the head pointer, or NULL if ```index``` is longer than the length of the list.| ```O(index)```                             | No                  |
| ```addBeginning(value)```  | Adds a new node with a data field containing ```value``` to the beginning of the list  | ```O(1)```                                 | Yes                 |
| ```addAfter(value, n)```   | Adds a new node with a data field containing ```value``` after node ```n```  | ```O(1)```                                 | Yes                 |
| ```remove(value)```        | Removes first instance of value from list | ```O(n)``` if we need to find the element. | Yes                 |
| ```removeNextElement(n)``` | Removes node after ```n```		         | ```O(1)```                                 | Yes                 |
| ```removeThisElement(n)``` | Removes node n	                         | ```O(1)``` on doubly linked-list           | Yes                 |
