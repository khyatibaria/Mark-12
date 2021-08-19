const sides=document.querySelectorAll(".side");
const checkHypoBtn= document.querySelector("#check-btn");
const outputDiv=document.querySelector("#output");


function sumofSquares(side1,side2)
{
    const squares= side1*side1+side2*side2;
    return squares;
}

function calculateHypo (){

    var squares=sumofSquares(Number(sides[0].value,),Number(sides[1].value,));
    var hypotenuse= Math.sqrt(squares);
    
    outputDiv.innerText="The calculated value of Hypotenus is"+hypotenuse;
}

checkHypoBtn.addEventListener('click',calculateHypo)