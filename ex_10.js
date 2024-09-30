function calculateSandwiches() {
        let hamSandwichCount = 0;
        let tunaSandwichCount = 0;
        let vegetarianSandwichCount = 0;


        while (breadCount >= 2 && hamCount >= 1) {
            hamSandwichCount++;
            breadCount -= 2;
            hamCount -= 1;
        }


        while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
            tunaSandwichCount++;
            breadCount -= 2;
            tunaCount -= 1;
            saladCount -= 2;
        }


        while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) {
            vegetarianSandwichCount++;
            breadCount -= 2;
            saladCount -= 1;
            tomatoCount -= 2;
        }


        displayThisText("number of ham sandwiches :" + hamSandwichCount);
        displayThisText("number of tuna sandwiches :" + tunaSandwichCount);
        displayThisText("number of vegetarian sandwiches :" + vegetarianSandwichCount);


        displayIngredients();
    }
 
 console.log ("C GOOD")

    calculateSandwiches();
