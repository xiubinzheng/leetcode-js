/*
Given a matrix of size n x m, the elements in the matrix are 0、1、2. 0 for the sea, 1 for the island, and 2 for the city on the island(You can assume that 2 is built on 1, ie 2 also represents the island).
If two 1 are adjacent, then these two 1 belong to the same island. Find the number of islands with at least one city.
Notice

    We only consider up, down, left and right as adjacent.
    n <= 100，m <= 100.
    You can assume that the four sides of the matrix are surrounded by the sea.

Have you met this question in a real interview?
Example

Given mat =
[
     [1,1,0,0,0],
     [0,1,0,0,1],
     [0,0,0,1,1],
     [0,0,0,0,0],
     [0,0,0,0,1]
]

, return 0.

Explanation:
There are 3 islands, but none of them contain cities.

Given mat =
[
     [1,1,0,0,0],
     [0,1,0,0,1],
     [0,0,2,1,2],
     [0,0,0,0,0],
     [0,0,0,0,2]
]

, return 2.

Explanation:
There are 3 islands, and two of them have cities.


0 for sea, 1 for island, 2 for city( 2 also represents city) 
    
	mat 1

[
     [1,1,0,0,0],
     [0,1,0,0,1],
     [0,0,0,1,1],
     [0,0,0,0,0],
     [0,0,0,0,1]
]


	mat 2
[
     [1,1,0,0,0],
     [0,1,0,0,1],
     [0,0,2,1,2],
     [0,0,0,0,0],
     [0,0,0,0,2]
]

island 1, first  0 
island 2, second 2
island 3, third  1

[[1,1,0,0,0],
 [0,1,0,0,1],
 [0,0,2,1,2],
 [0,0,0,0,0],
 [0,0,0,0,2]]


cityisland(matrix)
		
linearly scan all the matrix row elements from row 0 to n:
	linearly scan all the columns to perform a column scan
		each time we go through an element:
			we check its all 4 sides to see if it is a one or 2
				only check the below condition if
				mat[row][col] is a 1 or 2:
				matrix[row][col] === 1 ||2 
				push a new entry to the array	
				if(matrix[row][col]===2){
				then we increment the top element of the matrix by 1
				}				

				row-1,
				row+1,
				col-1,
				col+1, 
				
helper(matrix,row, col,arr):
	if matrix at row, col is 0 or row<=0 || row>=matrix.length || col >= matrix[row].legnth || col<= 0
		return do nothing

		helper(		row-1,
				row+1,
				col-1,
				col+1, 
		)
    

[[1,1,0,0,0],
 [0,1,0,0,1],
 [0,0,2,1,2],
 [0,0,0,0,0],
 [0,0,0,0,2]]
*/

/**
 * @param grid: an integer matrix
 * @return: an integer 
 */
/**
 * @param grid: an integer matrix
 * @return: an integer 
 */
const numIslandCities = function (m) {
	

	let islandCount = new Array(); 

    for(let i=0;i<m.length;i++)
	{
		console.log(m);
		for(let j=0;j<m[0].length;j++)
		{
		    console.log('i: '+i+' j: '+j+' m[i][j]: '+m[i][j]);

			if(m[i][j]===2 || m[i][j]===1 )
			{

				islandCount.push(0);
				if(m[i][j]===2)
			{
			    console.log(m[i][j]);
				islandCount[islandCount.length-1]++;
			}
			
			helper(m,i,j);
			}
			
		}
	}

	let count = 0;
	for(let x=0;x<islandCount.length;x++){
		if(islandCount[x]>0)count++;
	}
	console.log(islandCount);
	return count;
}

function helper(m, i, j ){
	if(i<0 || j <0 || i>= m.length || j>= m[0].length || m[i][j]===0)
	{
		return;
	}
	
		m[i][j]=0;
		helper(m,i-1,j);
		helper(m,i+1,j);
		helper(m,i,j-1);	
		helper(m,i,j+1);
}

let test = 
[[1,1,0,0,0],
 [0,1,0,0,1],
 [0,0,2,1,2],
 [0,0,0,0,0],
 [0,0,0,0,2]];

console.log(numIslandCities(test));