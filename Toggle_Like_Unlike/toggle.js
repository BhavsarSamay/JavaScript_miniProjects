let img=document.getElementById("puppyImage")
let button=document.getElementById("likeButton")
let icon=document.getElementById("likeIcon")
let a=0;
function onClickLikeButton()
{
    if (a===0)
    {
    img.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png"
    button.style.backgroundColor="#0967d2"
    button.style.color="white"
    icon.style.color='#0967d2'
    a=1
    }
    else
    {
    img.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png"
    button.style.backgroundColor="#cbd2d9"
    button.style.color="#9aa5b1"
    icon.style.color='#cbd2d9'
    a=0
    }
}