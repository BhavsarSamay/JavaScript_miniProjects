let counterElement=document.getElementById("counterValue")
function onIncrement()
{
    let previousElement=counterElement.textContent
    counterElement.textContent=parseInt(previousElement)+1
    if (counterElement.textContent>0)
    {
        counterElement.style.color="green"
    }
    else if (counterElement.textContent<0)
    {
        counterElement.style.color="red"
    }
    else
    {
        counterElement.style.color="black"
    }
}
function onReset()
{
    counterElement.textContent=0
    if (counterElement.textContent>0)
    {
        counterElement.style.color="green"
    }
    else if (counterElement.textContent<0)
    {
        counterElement.style.color="red"
    }
    else
    {
        counterElement.style.color="black"
    }
}
function onDecrement()
{
    let previousElement=counterElement.textContent
    
    counterElement.textContent=parseInt(previousElement)-1
    if (counterElement.textContent>0)
    {
        counterElement.style.color="green"
    }
    else if (counterElement.textContent<0)
    {
        counterElement.style.color="red"
    }
    else
    {
        counterElement.style.color="black"
    }
}