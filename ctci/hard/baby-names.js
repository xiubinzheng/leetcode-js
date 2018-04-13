/**
 * 17.7 Baby Names
 * Input : 
 * 	Names : John (15), Jon (12), Chris (13), Kris (4), Christopher (19)
 * 	Synonyms : (Jon, John), (John, Johnny), (Chris, Kris), (Chris, Christopher)
 * Output : John (27), Kris (36)
 */

let test = {
    "John": 10,
    "Jon": 3,
    "Davis": 2,
    "Kari": 3,
    "Johnny": 11,
    "Carlton": 8,
    "Carleton": 2,
    "Jonathan": 9,
    "Carrie": 5
};

let synonyms  = new Array(
    ['Johathan','John'],
    ['Jon','Johnny'],
    ['Johnny','John'],
    ['Kari','carrie'],
    ['Carleton','Carlton']
    );

console.log(test);

console.log(synonyms);

 function getnames(names, synonyms){
    let graph =  constructGraph(names);
    connectEdges();


    return res;
 }

