function reverseString(str)
{
    return str.split('').reverse().join('');
}

function isPalindrome(str)
{
    return str === reverseString(str);
}

function ConvertDateToString(date)
{
    var dateString =
    {
        day:'',
        month:'',
        year:''
    }
    if (date.day < 10)
    {
        dateString.day = '0' + date.day;
    }
    else
    {
        dateString.day =  date.day.toString();
    }

    if (date.month < 10)
    {
        dateString.month = '0' + date.month;
    }
    else
    {
        dateString.month =  date.month.toString();
    }
    dateString.year = date.year.toString();
    return dateString;
    
}

function GetDateFormatsArray(date)
{
    var dateString = ConvertDateToString(date);
    var ddmmyyyy = dateString.day + dateString.month + dateString.year;
    var mmddyyyy = dateString.month + dateString.day + dateString.year;
    var yyyymmdd = dateString.year + dateString.month + dateString.day;
    var ddmmyy =dateString.day + dateString.month + dateString.year.slice(-2);
    var mmddyy = dateString.month + dateString.day + dateString.year.slice(-2);
    var yymmdd = dateString.year.slice(-2) + dateString.month + dateString.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function CheckPalindrome(date)
{
    var result = false;
    var alldateformats = GetDateFormatsArray(date);

    for(var i=0;i< alldateformats.length;i++)
    {
        if(isPalindrome(alldateformats[i]))
        {
            result =true;
            break;
        }
    }
    return result;
}
function IsLeapYear(year)
{
    if(year % 400 === 0)
    {
        return true;
    }
    if(year % 100 === 0)
    {
        return false;
    }
    if(year % 4 === 0)
    {
        return true;
    }
    return false;
}
function GetNextDate(date)
{
    var montharray = [31,28,31,30,31,30,31,31,30,31,30,31]
    date.day = date.day+1;
    var month = date.month;
    var year = date.year;
    if (month === 2)
    {
        if(IsLeapYear(year))
        {
            if(date.day > 29)
            {
                date.day = 1;
                date.month = date.month+1;
            }
            
        }
        else
        {
            if(date.day > 28)
            {
                date.day = 1;
                date.month = date.month+1;
            }
        }
    }
    else
    {
        if (date.day > montharray[month-1])
        {
                date.day = 1;
                date.month = date.month+1;
        }
    }
    
    if (date.month > 12)
    {
        date.month = 1;
        date.year= date.year +1;
    }
    return date;
    
}

function GetPreviousDate(date)
{
    var montharray = [31,28,31,30,31,30,31,31,30,31,30,31]
    if (IsLeapYear(date.year)) {
        montharray[1] = 29;
    }
    date.day = date.day - 1;
    var month = date.month;
    var year = date.year;
    if (month === 3)
    {
        if(date.day < 1)
        {
            date.day = montharray[1];
            date.month = date.month-1;
        }
    }
    else
    {
        if (date.day < 1)
        {
                date.month = date.month-1;
                if (date.month < 1)
                {
                    date.month = 12;
                    date.year= date.year - 1;
                }
                date.day = montharray[date.month-1];
        }
    }
    
   
    return date;
}
function GetFuturePalindromeBday(date)
{
        let count = 0;
        var currentdate = { day: date.day, month: date.month, year: date.year };
        while(1)
        {
            count++;
            currentdate = GetNextDate(currentdate);
            if (CheckPalindrome(currentdate))
            {
                break;
            }
        }
        return [ count, currentdate]
}

function GetPastPalindromBday(date)
{
    let count = 0;
    var currentdate = { day: date.day, month: date.month, year: date.year };
  
        while(1)
        {
            count++;
            currentdate = GetPreviousDate(currentdate);
            if (CheckPalindrome(currentdate))
            {
                break;
            }
        }
        return [ count, currentdate]
        
}

function CheckPalindromeBirthday(date)
{
    if (CheckPalindrome(date))
    {
        console.log("Yayyyyyyy. Your birthday is a palindrome")
    }
    else
    {
       
        var FuturePalindromeBdayData = GetFuturePalindromeBday(date);
        var PastPalindromBdayData = GetPastPalindromBday(date);
        console.log(FuturePalindromeBdayData);
        console.log(PastPalindromBdayData);
        if (FuturePalindromeBdayData[0] < PastPalindromBdayData[0])
        {
            console.log("You are unlucky by "+ FuturePalindromeBdayData[0] + " days");
            console.log(FuturePalindromeBdayData[1])
        }
        else
        {
            console.log("You are unlucky by "+ PastPalindromBdayData[0] + " days");
            console.log(PastPalindromBdayData[1])
        }
    }
}

// var date = 
// {
//     day:2,
//     month:2,
//     year:2020
// }

// var bday = 
// {
//     day:5,
//     month:2,
//     year:2020
// }

// CheckPalindromeBirthday(bday)

var testCases = [
    { day: 2, month: 2, year: 2020 }, // Leap year
    { day: 11, month: 2, year: 2020 }, // Leap year
    { day: 29, month: 2, year: 2020 }, // Leap year
    { day: 31, month: 12, year: 2021 }, // Regular year
    { day: 12, month: 1, year: 2022 }, // Regular year
    { day: 10, month: 10, year: 2001 }, // Regular year
    { day: 8, month: 8, year: 2010 }, // Regular year
    { day: 9, month: 2, year: 2121 }, // Leap year
];

for (var i = 0; i < testCases.length; i++) {
    console.log(`Testing case ${i + 1}:`);
    var testCase = testCases[i];
    console.log("Input:", testCase);
    CheckPalindromeBirthday(testCase);
    console.log("----------------------");
}
//console.log(CheckPalindromeBirthday(date))

//Testcases
/* console.log(GetNextDate(date))

console.log(IsLeapYear(2000)); // true (divisible by 400)
console.log(IsLeapYear(2020)); // true (divisible by 4 and not by 100)
console.log(IsLeapYear(1900)); // false (divisible by 100 but not by 400)
console.log(IsLeapYear(2022)); // false (not divisible by 4)

// Testing GetNextDate function
console.log(GetNextDate({ year: 2022, month: 2, day: 28 })); // { year: 2022, month: 3, day: 1 }
console.log(GetNextDate({ year: 2020, month: 2, day: 28 })); // { year: 2020, month: 2, day: 29 }
console.log(GetNextDate({ year: 2020, month: 12, day: 31 })); // { year: 2021, month: 1, day: 1 }
console.log(GetNextDate({ year: 2021, month: 12, day: 31 })); // { year: 2022, month: 1, day: 1 }
console.log(GetNextDate({ year: 2000, month: 2, day: 28 })); // { year: 2000, month: 2, day: 29 }
console.log(GetNextDate({ year: 2000, month: 2, day: 29 })); // { year: 2000, month: 3, day: 1 } */


// Test cases for GetPreviousDate function
// var date1 = { year: 2024, month: 2, day: 1 };
// console.log("Input:", date1);
// console.log("Previous Date:", GetPreviousDate(date1));

// // Regular year test
// var date2 = { year: 2021, month: 1, day: 1 };
// console.log("Input:", date2);
// console.log("Previous Date:", GetPreviousDate(date2));

// // End of a month test
// var date3 = { year: 2023, month: 8, day: 1 };
// console.log("Input:", date3);
// console.log("Previous Date:", GetPreviousDate(date3));

// // Beginning of a year test
// var date4 = { year: 2023, month: 1, day: 1 };
// console.log("Input:", date4);
// console.log("Previous Date:", GetPreviousDate(date4));

// // Beginning of a leap year test
// var date5 = { year: 2024, month: 1, day: 1 };
// console.log("Input:", date5);
// console.log("Previous Date:", GetPreviousDate(date5));

// console.log(GetPreviousDate({ year: 2021, month: 3, day: 1 }))