# Cycle Detection

In computer science, cycle detection or cycle finding is the algorithmic problem of finding a cycle in a sequence of iterated function values.

Several algorithms for finding cycles quickly and with little memory are known. Robert W. Floyd's tortoise and hare algorithm moves two pointers at different speeds through the sequence of values until they both point to equal values. Alternatively, Brent's algorithm is based on the idea of exponential search. Both Floyd's and Brent's algorithms use only a constant number of memory cells, and take a number of function evaluations that is proportional to the distance from the start of the sequence to the first repetition. Several other algorithms trade off larger amounts of memory for fewer function evaluations.

The applications of cycle detection include testing the quality of pseudorandom number generators and cryptographic hash functions, computational number theory algorithms, detection of infinite loops in computer programs and periodic configurations in cellular automata, automated shape analysis of linked list data structures, and detection of deadlocks for transactions management in DBMS.

## Floyd's tortoise and hare

Time complexity: O(n), as the loop is traversed once. 
Auxiliary Space: O(1), only two pointers are used therefore constant space complexity.

```python
class Node:
    def __init__(self, d):
        self.data = d
        self.next = None
  
# initialize a new head for the linked list
head = None
  
# detect if there is a loop
# in the linked list
def detectLoop(head):
    slowPointer = head
    fastPointer = head
  
    while (slowPointer != None
           and fastPointer != None
           and fastPointer.next != None):
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
        if (slowPointer == fastPointer):
            break
 
    # if no loop exists
    if (slowPointer != fastPointer):
            return None
     
    # reset slow pointer to head
    # and traverse again
    slowPointer = head
    while (slowPointer != fastPointer):
      slowPointer = slowPointer.next
      fastPointer = fastPointer.next
     
    return slowPointer
   
  
# inserting new values
head = Node(50)
head.next = Node(40)
head.next.next = Node(30)
head.next.next.next = Node(20)
head.next.next.next.next = Node(10)
  
# adding a loop for the sake
# of this example
temp = head
while (temp.next != None):
    temp = temp.next
# loop added
temp.next = head
 
loopStart = detectLoop(head)
if (loopStart == None):
    print("Loop does not exists")
else:
    print(f"Loop does exists and starts from {loopStart.data}")
```