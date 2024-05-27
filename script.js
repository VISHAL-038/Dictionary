document.getElementById("search-button").addEventListener("click", function() {
    var inputValue = document.getElementById("word-input").value;
    
    if(inputValue){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
        .then(response => response.json())
        .then((data) => {
            console.log("[data]", data);
            if(data[0] && data[0].meanings[0] && data[0].meanings[0].definitions[0].definition) {
                const definition = data[0].meanings[0].definitions[0].definition;
                document.getElementById("definition").innerText = definition;
            } else {
                document.getElementById("definition").innerText = "Definition not found";
            }
        })
        .catch((error) => {
            document.getElementById("definition").innerText = "Word not found";
            console.error("Error fetching the definition", error);
        });
    } else {
        document.getElementById("definition").innerText = "Please enter a word";
    }
});
