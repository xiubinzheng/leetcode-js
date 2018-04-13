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

class LRUCache{
	constructor(capacity)
	{
		this.capacity = capacity;
		this.map = new Map();
		this.usageRecord = new Array();	
	}
/** 
 * @param {number} key
 * @return {number}
 */
	get(key){
		if(this.map.has(key))
		{
		  if(this.usageRecord.length === this.capacity)
		 {
			this.usageRecord.shift();
		 }
		this.usageRecord.push(key);
		  return this.map.get(key);
		}
		
		return -1;
	}
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
	put(key,value)
	{
		
		  if(this.usageRecord.length === this.capacity)
		 {
			this.usageRecord.shift();
		 }
		this.usageRecord.push(key);
		this.map.set(key,value);
	}
}