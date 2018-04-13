/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let color = new Array(graph.length).fill(0);
     let res =  new Array();
     
     for(let i=0;i<graph.length;i++){
         if(dfs(i,color,graph))
             res.push(i);
     }
     return res;
 };
 
 
 function dfs(node,color,graph){
     
     if(color[node]>0)
         return color[node] ===2;
     
     color[node] = 1;
     for(let i=0;i<graph[node].length;i++){
        if(node==2){
            console.log("graph[node]: "+graph[node]);
            console.log("neighbor: "+graph[node][i]);
            console.log(color[graph[node][i]]);
        }
         if(color[node]===2)
             contiune;
         if(color[graph[node][i]]===1 || !dfs(graph[node][i],color,graph))
                 return false;
     }
     color[node]=2;
     return true;
     
 }

 let graph = [[1,2],[2,3],[5],[0],[5],[],[]];
            /*  0     1    2   3   4  5  6   */
 console.log(eventualSafeNodes(graph));