// Flags UI variables
    const england = document.querySelector("#flagEngland");
    const italy = document.querySelector("#flagItaly");
    const spain = document.querySelector("#flagSpain");
    const bio = document.querySelector("#bio");



// Event listeners
    
    // English
    england.addEventListener("click", englishBio);

    // Italian Event 
    italy.addEventListener("click", italianBio);

    // Spanish Event
    spain.addEventListener("click", spanishBio);



// Changing the language

    // English

    function englishBio() {
        console.log("test");
        bio.textContent = "Hello";
    }

    // Italian

    function italianBio() {
        bio.textContent = "Ciao";
    }

    // Spanish

    function spanishBio() {
        bio.textContent = "Hola";
    }