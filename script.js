function compute()
{
    p= document.getElementById("principal").value;
    rate= document.getElementById("rate").value;
    years= document.getElementById("years").value;
    var year= new Date().getFullYear()+parseInt(years);
    interest= (p*rate*years)/100;

    amount= parseInt(p)+parseFloat(interest);    
    var result= document.getElementById("result");
    
    if(year<=0)
        {
            alert("Please Enter Valid Year");
            document.getElementById("year").focus();   
        }
        else{
                result.innerHTML = "If you deposit &#8377" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will have to return an amount of &#8377" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
        }
    
    if(p<=0)
    {
        alert("Please Enter Valid Principal");
        document.getElementById("principal").focus();   
    }
    else{           
        result.innerHTML = "If you deposit &#8377" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will have to return an amount of &#8377" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }

}
   
function updateRate()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rate;
}