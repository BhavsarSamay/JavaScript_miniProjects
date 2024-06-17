
function calculate()
{
    let billAmount=document.getElementById("billAmount").value
    let percentageTip=document.getElementById("percentageTip").value
    if(billAmount==='' || percentageTip==='')
    {
        document.getElementById("errorMessage").textContent="Please Enter a Valid Input"
        document.getElementById("errorMessage").style.color="red"
    }
    else
    {
    billAmount=parseInt(billAmount)
    percentageTip=parseInt(percentageTip)
    calculatedTip=(percentageTip/100)*billAmount
    document.getElementById("tipAmount").value=calculatedTip
    document.getElementById("totalAmount").value=calculatedTip+billAmount
    }
    
}