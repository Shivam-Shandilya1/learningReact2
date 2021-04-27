    var num1,num2;
    function add (num1,num2)
    {
        return (num1+num2);
    }
    function subs(num1,num2)
    {
        return (num1-num2);
    }
    function mul (num1,num2)
    {
        return (num1*num2);
    }
    function divide (num1,num2)
    {
        var result = (Math.round((num1/num2)*100))/100;
        return result;
    }

export {add,subs,mul,divide};