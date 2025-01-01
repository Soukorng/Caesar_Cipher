
function leap(){
    let year = prompt("Enter a year:");
    year = Number(year);
    if (isNaN(year)) {
        alert("Please enter a valid year.");
    } else {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            alert(year + " is a leap year.");
        } else {
            alert(year + " is not a leap year.");
        }
    }
}


