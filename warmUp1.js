// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
function fullname(firstname,lastname){
	return firstname+' '+lastname
}
function multiply(number,multiple){
	if(number/multiple===0) {
		return 'yes' 
  }
       return 'no'
}
function ageInSeconds(age){
	return age*60*60*24*365
}