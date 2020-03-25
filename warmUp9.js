// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
function isArray(arr){
	for(var i=0;i<arr.length;i++){
		return true;
	}
	
	return false;
}

var isArray = array => (Array.isArray(array) ? true : false);
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
// /2-Write a JavaScript function to get the first n element of an array.
//   /ex  first([1,2,3],1)=>[1]
///    first([1,2,3,4]2)=>[1,2]

<<<<<<< HEAD
function firstElement(arr){
	for (var i=0;i<arr.length;i++){
	}
	return arr[0];
}
=======
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
<<<<<<< HEAD
//    first([1,2,3,4]2)=>[1,2]
var first = (arr, n) => arr.splice(0, n);
=======
//    first([1,2,3,4],2)=>[1,2]
>>>>>>> 0e47aea7be29872390744ebf393e4da84d716048

>>>>>>> 0e47aea7be29872390744ebf393e4da84d716048
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
