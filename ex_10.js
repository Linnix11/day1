function calculateSandwiches() {

    let breadCount = Math.floor(Math.random() * 6) + 10; 
    let hamCount = Math.floor(Math.random() * 4) + 2;    
    let tunaCount = Math.floor(Math.random() * 2) + 1;   
    let saladCount = Math.floor(Math.random() * 7);       
    let tomatoCount = Math.floor(Math.random() * 2) + 1;  

    const hamSandwiches = Math.min(Math.floor(breadCount / 2), hamCount); 
    const tunaSandwiches = Math.min(Math.floor(breadCount / 2), tunaCount, Math.floor(saladCount / 2)); 
    const vegetarianSandwiches = Math.min(Math.floor(breadCount / 2), saladCount, Math.floor(tomatoCount / 2)); 

 
    document.write("<br/>number of ham sandwiches :" , hamSandwiches);
    document.write("<br/>number of tuna sandwiches :", tunaSandwiches);
    document.write("<br/>number of vegetarian sandwiches :", vegetarianSandwiches);

    
    breadCount -= (hamSandwiches + tunaSandwiches + vegetarianSandwiches) * 2;
    hamCount -= hamSandwiches;
    tunaCount -= tunaSandwiches;
    saladCount -= (tunaSandwiches + vegetarianSandwiches);
    tomatoCount -= vegetarianSandwiches;


	console.log("C GOOOOOOD")
}


calculateSandwiches();
