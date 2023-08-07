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

function CheckPalindromeBirthday(date)
{
    if (CheckPalindrome(date))
    {
        console.log("Yayyyyyyy. Your birthday is a palindrome")
    }
    else
    {
        var count = 0;
        while(1)
        {
            count++;
            date = GetNextDate(date);
            if (CheckPalindrome(GetNextDate(date)))
            {
                console.log("You are unlucky by "+ count + " days");
                console.log(date)
                break;
            }
        }
    }
}

var date = 
{
    day:2,
    month:2,
    year:2020
}
console.log(CheckPalindromeBirthday(date))

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