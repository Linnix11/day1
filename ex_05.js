function updateCardInfo(className, value) {
document.getElementsByClassName(className)[0].textContent = value;
}


function displayInCard(str) {
    const args = str.split(",");

    
    const firstName = args[0];
    const lastName = args[1];
    const cardNumber = args[2];
    const expiryDate = args[3];

    
    updateCardInfo("card-number", cardNumber);
    updateCardInfo("card-name", firstName + " " + lastName);
    updateCardInfo("card-expiry", expiryDate);
}


let firstname = "John";
let lastname = "Doe";
let cardCode = "1111 2222 3333 4444";
let expiryDateMonth = 21;
let expiryDateYear = 2042;


let computedBankInfo = firstname + "," + lastname + "," + cardCode + "," + expiryDateMonth + "/" + expiryDateYear;

displayInCard(computedBankInfo);

console.log ("Sa Marche")