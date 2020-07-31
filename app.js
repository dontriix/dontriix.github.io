window.onload=function() {
// Flags variables

    const england = document.getElementById(flagEngland);
    const italy = document.getElementById(flagItaly);
    const spain = document.getElementById(flagSpain);
    const bioText = document.getElementById(bio);

// Event listeners

// English
    england.addEventListener("click", englishBio);



// Italian
    italy.addEventListener("click", italianBio);



// Spanish
    spain.addEventListener("click", spanishBio);




// Changing the language

    function englishBio() {
        console.log("test");
    }

}
