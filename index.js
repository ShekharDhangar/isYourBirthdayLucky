const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector(".lucky-number")
const checkBtn = document.querySelector(".btn-check");
const output = document.querySelector(".output-para");

checkBtn.addEventListener("click",sumOfDOB )

function sumOfDOB(){
    
    const dob = dateOfBirth.value;
    const finaldate = dob.replaceAll("-","");
        let sum = 0;
        for(var i = 0;i<finaldate.length;i++){
            sum += Number(finaldate[i])
        }

        if(sum && dob)
        calculateAns(sum,luckyNumber.value);
        else
        output.innerText = "Enter both fields";
        
}

function calculateAns(sum,luckyNumber){
    console.log(sum, luckyNumber)
    if(sum%luckyNumber === 0){
        output.innerText =  luckyNumber + " is a Lucky number!!🎉🎉";
    }else{
        output.innerText = luckyNumber +" is not a Lucky Number😞";
    }
}
