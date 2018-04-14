/*
1. Write a javascript function for power(2,4) should give 16.

pow(2,4)

4
2*2
3
2*2*2
2
2*2*2*2
1

temp = n
while k is larger than 1
	temp = temp * k
	decrese k	

pow(n,k)
	
	

*/

function pow(n,k)
{
let temp = n;
while(k>1){
	temp *=n;
	k--;
}
return temp;
}


console.log(pow(2,5));



/*

Given an integer, write a function to determine if it is a power of two.


2 0 =1
2 1 = 2
2 2 = 4
2 3 = 8

8 2 = 4
4 2 = 2
2 2 = 1
1 2 = 0.5 - 0 

9 2 = 4,1 

remainder  =0
while(n>=1){
  if(n%2===1){
  false;	
  }
  n = n/2;
}
true;

*/

var isPowerOfTwo = function(n) {
	if(n<=0)return false;

    	while(n>1){
	if(n%2>0){
	return false;
	}
	n = n/2;
	}
	return true;
};
console.log(isPowerOfTwo(8));

/*
prime - one and itself
1, 1

ex of prime
3,5,7

1,  1
2,  1 2
3 , 1 3
4 , 1 2 4
5 , 1 5
7,  1 7
9,  1 3 9
10, 1 2 5

if n is 1 false
if n is 2 true
if n%2===1
if n%

*/

function isPrime(n){
	if(n<=1)return false;
	for(let i=2;i<n;i++){
		console.log(n+' '+i+' n%i: '+n%i);
		if(n%i===0)
			return false;
	}
	return true;
}


	console.log(20+': '+isPrime(37));


	for(let i=0;i>=-1;i++){
		console.log(pow(i,pow(i,i)));
	  }