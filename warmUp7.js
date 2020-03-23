// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
//answer :
5>7
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'
function helloWorld (code){
	switch(code){
		case"fr":
		return"Bonjour tout le monde";
		break;
		case"es":
		return "Hola,Mundo";
		break;
		default:
		return"Hello,World"
	}

}
//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function reverseArray([1,2,3]){
	
}