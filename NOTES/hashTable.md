# HASH TABLES

- Hash table is a data structure that stores key-value pairs
- A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

# What makes a good hash function?
 - Fast (i.e. constant time complexity)
 - Doesn't cluster outputs at specific indices, but distributes uniformly
 - Deterministic (same input yields same output every time)

- COLLISION HANDLING
- When two different keys hash to the same index in a hash table, this is called a collision.
- There are several ways to handle collisions:
-  Separate Chaining: Each index in the array of the hash table points to a linked list of key-value pairs that collided at that index.
-  Linear Probing: When a collision occurs, the index is incremented by 1 until an empty slot is found.
-  Quadratic Probing: When a collision occurs, the index is incremented by successive squares until an empty slot is found.

# TIME COMPLEXITY
- Average case:
-  Search: O(1)
-  Insert: O(1)
-  Delete: O(1)

# Worst case:
- Search: O(n)
- Insert: O(n)
- Delete: O(n)
