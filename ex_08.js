

function checkSandwich(breadCount, hamCount, tunaCount) {
    // royal 
    if (breadCount >= 2 && hamCount >= 1 && tunaCount >= 1) {
        console.log("I can make a royal sandwich!");
    }
    // ham
    else if (breadCount >= 2 && hamCount >= 1) {
        console.log("I can make a ham sandwich!");
    }
    // tuna
    else if (breadCount >= 2 && tunaCount >= 1) {
        console.log("I can make a tuna sandwich!");
    }
    // rien
    else {
        console.log("I'd rather be fasting tonight...");
    }
}


checkSandwich(breadCount, hamCount, tunaCount); 
