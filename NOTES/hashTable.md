# HASH TABLES

- Hash table is a data structure that stores key-value pairs
- A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

# What makes a good hash function?
 - Fast (i.e. constant time complexity)
 - Doesn't cluster outputs at specific indices, but distributes uniformly
 - Deterministic (same input yields same output every time)

# COLLISION HANDLING
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

# Map() and Set() in JavaScript

Map() and Set() are two built-in JavaScript data structures that are related to the hash table. In fact, both of these data structures use hashing as an underlying mechanism for their implementation.

## Map()

The Map() data structure is similar to a hash table in that it allows you to store key-value pairs, where each key is unique. However, Map() provides additional functionality and methods that make it more versatile than a simple hash table. For example, Map() allows you to use any data type as a key, whereas a hash table typically only allows you to use strings or integers as keys.

Some of the methods provided by the Map() data structure include:
- set(key, value): sets the value for the specified key
- get(key): returns the value associated with the specified key
- has(key): returns a boolean indicating whether the specified key exists in the Map()
- delete(key): removes the specified key-value pair from the Map()
- clear(): removes all key-value pairs from the Map()
- keys(): returns an iterator of all keys in the Map()
- values(): returns an iterator of all values in the Map()
- entries(): returns an iterator of all key-value pairs in the Map()

## Set()

The Set() data structure is another built-in data structure in JavaScript that is similar to a hash table. However, Set() is designed to store unique values only and does not store key-value pairs. Like Map(), Set() uses hashing as an underlying mechanism for its implementation.

Some of the methods provided by the Set() data structure include:
- add(value): adds the specified value to the Set()
- delete(value): removes the specified value from the Set()
- has(value): returns a boolean indicating whether the specified value exists in the Set()
- clear(): removes all values from the Set()
- values(): returns an iterator of all values in the Set()

Both Map() and Set() are useful in a variety of scenarios and can help simplify and optimize your code.


