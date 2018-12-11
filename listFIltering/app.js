function filter_list(l) {
    // Return a new array with the strings filtered out

    //set emptry number array
    var num = [];

    //for loop for type of element - this one being a number - to loop through given array to find the numbers to push to the array
    for (var i = 0; i<l.length; i++) {
        if(typeof (l[i]) === 'number') {
            num.push(l[i])
        }
    }
    //return the new array
    return num 
}

