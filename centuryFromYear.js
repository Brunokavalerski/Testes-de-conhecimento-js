function centuryFromYear(year) {  
    return Math.floor((year-1)/100) + 1;  
}    

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(2005));