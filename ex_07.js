function checkPassword() {
    let passwords = ["IAmAHacker", "forty-two", "azerty", "efebh65^", "de_fzHef", "HGC1__100"];
    let password = passwords[Math.floor(Math.random() * passwords.length)];
   
   console.log("Password entered: " + password);

    
    if (password === "forty-two") {
        console.log("Success");
    } else {
        console.log("Wrong password");
    }
}


checkPassword();
