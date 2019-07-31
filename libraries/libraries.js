//Checking if a field is text
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//Checking if a number is Float
function isFloat(n){
    //var num = return Number(n) === n && n % 1 !== 0;
    if (isNumber(n) !== true) {
    	return false;
    } else {
    	if (n % 1 !== 0) {
	    	return true;
	    } else {
	    	return false;
	    }
    }
}