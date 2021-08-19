const input=document.querySelectorAll(".angle");
const istriangleBtn= document.querySelector("#check-btn");
const outputDiv=document.querySelector("#output");

function findSum(angle1,angle2,angle3)
{
    const sum = angle1+angle2+angle3;
    return sum;
}

function validateTriangle(){

    var sumofAngles= findSum(Number(input[0].value),Number(input[1].value),Number(input[2].value))

    if(sumofAngles=== 180)
    {
        outputDiv.innerText="Yay, the angles form a Triangle";
    }else{
        outputDiv.innerText="Nah, the angles do not form a Triangle";
    }
}

istriangleBtn.addEventListener('click', validateTriangle)