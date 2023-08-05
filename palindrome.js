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

var date = 
{
    day:5,
    month:6,
    year:2000
}

console.log(ConvertDateToString(date))