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

# Creating a hash table
To create a hash table in JavaScript, you can simply create an empty object:
const hashTable = {};

# Adding a key-value pair
 To add a key-value pair to the hash table, you can use the following syntax:
hashTable[key] = value;
 For example:
hashTable['apple'] = 5;
hashTable['banana'] = 3;

# Retrieving a value
To retrieve a value from the hash table, you can use the following syntax:
hashTable[key];
 For example:
console.log(hashTable['apple']); // Output: 5

# Removing a key-value pair
To remove a key-value pair from the hash table, you can use the delete keyword:
delete hashTable[key];
 For example:
delete hashTable['apple'];

# Checking if a key exists
To check if a key exists in the hash table, you can use the in keyword or the hasOwnProperty method:
key in hashTable;
hashTable.hasOwnProperty(key);
 For example:
console.log('apple' in hashTable); // Output: false
console.log(hashTable.hasOwnProperty('banana')); // Output: true

# Getting all keys
To get all keys in the hash table, you can use the Object.keys() method:
Object.keys(hashTable);
// For example:
console.log(Object.keys(hashTable)); // Output: ['banana']

# Getting all values
To get all values in the hash table, you can use the Object.values() method:
Object.values(hashTable);
 For example:
console.log(Object.values(hashTable)); // Output: [3]