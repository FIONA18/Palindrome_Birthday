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

var date = 
{
    day:11,
    month:1,
    year:2010
}

console.log(CheckPalindrome(date))