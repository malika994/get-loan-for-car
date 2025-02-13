const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
    //if it was not qualify the result is undefined
    if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
        return "You qualify for a duplex, condo, and car loan.";

    }
    //if it was not qualify the result is undefined
    else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
        return "You qualify for a condo and car loan.";
    }
    //if it was not qualify the result is undefined
    else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {

        return "you cavalified for car loan";
    }
}

console.log(getLoanMessage(30001, 990));


