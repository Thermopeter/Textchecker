var fileReader = new FileReader(); 
var text = ""
   fileReader.onload = function(event) {
    	console.log("Text transposed")
        text = fileReader.result  
        textPruefer(text)     
        
    }; 
    fileReader.onerror = function() {
        alert(fileReader.error);
    }; 

function checkFile() {
    var inputFiles = document.getElementById("file-input")
    var file = inputFiles.files[0]
    if (!file) {
        alert("no file chosen")
        return
    }
    
    console.log("File loaded")
    fileReader.readAsText(file)
}

function textPruefer (text) {
    
    var placeholderText = text.slice(text.indexOf("hinzugefügt.")+("hinzugefügt.").length,)
    document.getElementById("result").innerText= placeholderText
    var lines = placeholderText.split('\n')
    lines = lines.slice(1) // Löscht die erste leere Zeile
    var deletedLines = 0 //Anzahl der am Anfang des Textes gelöschten Zeilen
    var errorCounter = 0 // Anzahl Fehler

    //Nachrichten ohne Einfluss
    var sonderNachricht = false
    var checkSondernAchricht = () => {
            if (placeholderText.includes("hinzugefügt") || placeholderText.includes("Admin")){
                sonderNachricht = true;
        }   else {
            sonderNachricht = false
        }
    }
    
    //Startüberprüfung - Text wird "zugeschnitten"
    while (!lines[0].includes(": 1")){
        console.log("start falsch")
        deletedLines+=1
        lines=lines.slice(1,)
    }
    
    // Erzeugung Objekt Sender
    var personOne = {
        name: "",
        anzahlNachrichten: 0,
        letzteNachricht: ""
    }

    var personTwo = {
        name: "",
        anzahlNachrichten: 0,
        letzteNachricht: ""
    }

    //Namen von Person 1 finden
    placeholderText = lines[0].trim()
    //console.log(placeholderText)
    personOne.name = (placeholderText.slice(placeholderText.indexOf("-")+1,placeholderText.indexOf(":",placeholderText.indexOf(":")+1)).trim())
    personOne.letzteNachricht = placeholderText
    
    //Namen von Person 2 finden
    //prüfen ob kein Fehler vorliegt
    var i = 1
    do {
	placeholderText = lines[i].trim()
	    console.log(placeholderText.slice(placeholderText.length-1,))
	    if (placeholderText.includes(": 2") && placeholderText.slice(placeholderText.length-1,) == "2")
	    {   
	
	        personTwo.name = (placeholderText.slice(placeholderText.indexOf("-")+1,placeholderText.indexOf(":",placeholderText.indexOf(":")+1)).trim())
	    }
        i++
        if (i > 3){
            alert("Fehler am Anfang")
            i = 0
            break
        }
    } while (personTwo.name==="");
    
    
    //Array der schreibenden Personen
    var akteure = [personOne,personTwo]
    console.log(akteure)



    lines.forEach((element, index) => {
        var autor = element.          
        
    });

    
}