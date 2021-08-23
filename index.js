const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector(".lucky-number")
const checkBtn = document.querySelector(".btn-check");
const output = document.querySelector(".output-para");

function sumOfDOB(){
    
    const dob = dateOfBirth.value;
    if(dob=="" || luckyNumber.value==""){
        output.innerText = "Please enter both fields";
    }else{
    const finaldate = dob.replaceAll("-","");
        let sum = 0;
        for(var i = 0;i<finaldate.length;i++){
            sum += Number(finaldate[i])
        }
        calculateAns(sum,luckyNumber.value);
    }
}

function calculateAns(sum,luckyNumber){

    console.log(sum, luckyNumber)
    if(sum%luckyNumber === 0){
        output.innerText =  "Your birthday is lucky!!🎉🎉";
    }else{
        output.innerText = "Your birthday is not lucky😞";
    }
}

checkBtn.addEventListener("click",sumOfDOB );