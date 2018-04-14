
/*
Given an array of meeting time intervals consisting of start 
and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Have you met this question in a real interview? 
Example
Given intervals = [(0,30),(5,10),(15,20)], return 2.
*/


/**
 * @param intervals: an array of meeting time intervals
 * @return: the minimum number of conference rooms required
 */


/*
https://github.com/jzysheep/LeetCode/blob/master/253.%20Meeting%20Rooms%20II.cpp
*/

var minMeetingRooms = function(intervals) {
    var schedule = {};
    
    intervals.forEach((interval)=>{
        schedule[interval.start] = schedule[interval.start] || 0;
        schedule[interval.start]++;
        
        schedule[interval.end] = schedule[interval.end] || 0;
        schedule[interval.end]--;
    });
    
    console.log(schedule);
    var maxRooms = 0;
    var rooms = 0;
    
    for(var i in schedule) {
        console.log(i,':',schedule[i]);
        rooms += schedule[i];
        maxRooms = Math.max(maxRooms, rooms);
    }
    
    return maxRooms;
};


const minMeetingRooms2 = function(intervals) {
    intervals.sort(function(a,b){return a.start-b.start;});
    var schedule = new Map();
    
    for(var i=0;i<intervals.length;i++)
    {
        if(schedule.has(intervals[i].start)){
            schedule.set(intervals[i].start,schedule.get(intervals[i].start)+1);
        }else{
            schedule.set(intervals[i].start,1);
        }
        if(schedule.has(intervals[i].end)){
            schedule.set(intervals[i].end,schedule.get(intervals[i].end)-1);
        }else{
            schedule.set(intervals[i].end,-1);
        }
    }
    console.log(schedule);
    var maxRooms = 0;
    var rooms = 0;
    var mapAsc = new Map([...schedule.entries()].sort());

    for(var [key,value] of mapAsc.entries()) {
        
        console.log(key,':',value);
        rooms += value;
        maxRooms = Math.max(maxRooms, rooms);
    }
    
    return maxRooms;
};

let  data = [
    {start: 9, end: 12},
    {start: 2, end: 7},
    {start: 5, end: 17},
    {start: 12, end: 17},
  ];

  let  data2 = [
    {start: 5, end: 8},
    {start: 6, end: 8}
  ];

console.log(minMeetingRooms(data2));
console.log('---------------');
console.log(minMeetingRooms2(data2));

