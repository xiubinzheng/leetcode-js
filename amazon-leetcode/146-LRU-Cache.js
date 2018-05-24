/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?


[key1, key2,key3 ]
  0    1     2


get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.


put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.


invalidate the least recently used item before inserting a new item. -- > shift the beginning off of the array
 
[key1, key2,key3 ]   -> [ key2, key3, key1 ]



*/

/**
 * @param {number} capacity
 */
class LRUCache {
	constructor(cap) {
		this.cap = cap;
		this.map = new Map();
		this.cache = new Array();
	}

	get(key) {
		/*
		if the key already exist
		find the index in the cache array and delete that key from the cache
		and push it on top of the cache
		finally returnt the value of that key from the array
		*/
		if (this.map.has(key)) {
			let index = this.cache.indexOf(key);
			this.cache.splice(index, 1);
			this.cache.push(key);
			return this.map.get(key);
		}
		// return -1 if not founc
		return -1;
	}

	/*we only invalidate when it reaches capacity*/
	put(key, val) {
		if (this.map.has(key)) // if this key already exist
		{
			/* delete the exisiting key by finding its 
			index and replace it a the top of the array
			the set the key value pair in the map 
				*/
			let index = this.cache.indexOf(key);
			this.cache.splice(index, 1);

		} else /*if this is a new element */ {

			/*if the capacity has been reached,
			remove the least recently used key from the array
			and delete that same key from the map
			*/
			if (this.cache.length === this.cap) {
				let tbd = this.cache.shift();
				this.map.delete(tbd);
			}
		}
		// these actions are performed regardless
		this.cache.push(key);
		this.map.set(key, val);
	}

}