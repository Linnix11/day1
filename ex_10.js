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


        displayThisTexte(`<p>Nombre de sandwichs au jambon : ${hamSandwichCount}</p>`);
        displayThisTexte(`<p>Nombre de sandwichs au thon : ${tunaSandwichCount}</p>`);
        displayThisTexte(`<p>Nombre de sandwichs végétariens : ${vegetarianSandwichCount}</p>`);


        displayIngredients();
    }
 
 console.log ("C GOOD")

    calculateSandwiches();
