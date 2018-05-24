class LFUCache {

    constructor(capacity) {
        this.cap = capacity;
        this.vals = new Map();
        this.counts = new Map();
        this.lists = new Map();
        this.lists.set(1, []);
        this.min = -1;
    }

    get(key) {
        if (!this.vals.has(key))
            return -1;
        let count = this.counts.get(key);
        this.counts.set(key, count + 1);
        this.lists.get(count).splice(this.lists.get(count).indexOf(key), 1);
        if (count === this.min && this.lists.get(count).length === 0)
            this.min++;
        if (!this.lists.has(count + 1))
            this.lists.set(count + 1, []);
        this.lists.get(count + 1).push(key);
        return this.vals.get(key);
    }

    put(key, value) {
        if (this.cap <= 0)
            return;

        if (this.vals.has(key)) {
            this.vals.set(key, value);
            this.get(key);
            return;
        }
        if (this.vals.length >= this.cap) {
            let evit = this.lists.get(this.min).iterator().next();
            this.lists.get(min).splice(list.get(this.min).indexOf(evit), 1);
            this.vals.delete(evit);
        }
        this.vals.set(key, value);
        this.counts.set(key, 1);
        this.min = 1;
        this.lists.get(1).push(key);
    }
}



let cache = new LFUCache(2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.get(3); // returns 3.
cache.put(4, 4); // evicts key 1.
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4