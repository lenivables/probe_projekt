let csvData = [];
let uploadedCsvData = []; // Variable, um nur die abgegebene CSV zu speichern
let mode = ""; // Um den aktuellen Modus zu speichern ("dc" oder "cd")
let currentPair = null; // Um das zufällig ausgewählte Paar zu speichern
const fileInput = document.getElementById('fileInput');
const fileDetails = document.getElementById('fileDetails');
const fileContent = document.getElementById('fileContent');
const field1 = document.getElementById('field1');
const field2 = document.getElementById('field2');
const submitBtn = document.getElementById('submitBtn');
const addBtn = document.getElementById('addBtn');
const showBtn = document.getElementById('showBtn');
const saveBtn = document.getElementById('saveBtn');
const printCsvBtn = document.getElementById('printCsvBtn');
const vocabMessage = document.getElementById('vocabMessage');
const csvMessage = document.getElementById('csvMessage');
const vocabOutput = document.getElementById('vocabOutput');
const csvOutput = document.getElementById('csvOutput');
const downloadMessage = document.getElementById('downloadMessage');
const resetMessage = document.getElementById('resetMessage');
const backToStart = document.getElementById('backToStart');
const backToStartFromSheet = document.getElementById('backToStartFromSheet');
const backToStartFromDownload = document.getElementById('backToStartFromDownload');
const confirmReset = document.getElementById('confirmReset');
const infoButton = document.getElementById('infoButton');
const infoModal = document.getElementById('infoModal');
const closeModal = document.getElementById('closeModal');
const revealBtn = document.getElementById('revealBtn'); // Aufdecken Button
const nextBtn = document.getElementById('nextBtn'); // Weiter Button
const backToDcCd = document.getElementById('backToDcCd'); // Zurück zu dc und cd Button

// Funktion zum Einklappen des Menüs nach Klick auf einen Menüpunkt
function collapseMenu() {
document.getElementById('menu-toggle').checked = false;  // Menü einklappen
}




// Füge den Event-Listener zu allen Menülinks hinzu
document.querySelectorAll('.menu-links a').forEach(menuLink => {
menuLink.addEventListener('click', function() {
    // Nur auf kleinen Bildschirmen einklappen (wenn das Hamburger-Menü sichtbar ist)
    if (window.innerWidth <= 768) {
        collapseMenu();
    }
});
});



// Funktion zum Ausblenden des Begrüßungstextes
function hideWelcomeText() {
    document.getElementById("welcomeText").style.display = "none";
}

// Funktion zum Einblenden des Begrüßungstextes
function showWelcomeText() {
    document.getElementById("welcomeText").style.display = "block";
}

// Funktion zum Ausblenden aller "Abfrage starten"-Elemente
function hideStartQueryElements() {
    document.getElementById("startQuerySection").style.display = "none";
    document.getElementById("dcBtn").style.display = "none";
    document.getElementById("cdBtn").style.display = "none";
    document.getElementById("revealBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("backToDcCd").style.display = "none";
    document.querySelectorAll('p').forEach(p => p.remove()); // Entferne alle resultierenden <p>-Elemente
}

// Info-Button: Zeige Info Modal und setze den Inhalt neu
infoButton.addEventListener("click", function() {
infoModal.style.display = "block"; // Modal anzeigen
infoModal.querySelector('.modal-content').innerHTML = `
<span class="close" id="closeModal">&times;</span>
<p>Ich bin eine Karteikarten Applikation für Chinesisch-deutsche Vokabeln. Für weitere Informationen, was ich alles kann, liess dir das readme.md in folgendem Github repo durch: https://github.com/lenivables/web_vokabeltrainer Viel Spass!</p>
`;

// Event Listener für den Schließen-Button neu setzen
document.getElementById("closeModal").addEventListener("click", function() {
infoModal.style.display = "none";
});
});


// Schließe das Modal, wenn der Schließen-Button gedrückt wird
closeModal.addEventListener("click", function() {
infoModal.style.display = "none";
}); 

// Schließe Modal, wenn der Benutzer außerhalb klickt
window.addEventListener("click", function(event) {
if (event.target == infoModal) {
infoModal.style.display = "none";
}
});
// Zurück-Button entfernen, wenn "Reset" gedrückt wird
document.getElementById("reset").addEventListener("click", function() {
    event.preventDefault();  // Verhindert das Neuladen der Seite
    hideWelcomeText();
    hideStartQueryElements(); // Füge dies hinzu
    document.getElementById("resetOptions").style.display = "block";
    document.getElementById("vocabForm").style.display = "none";
    document.getElementById("vocabSheetForm").style.display = "none";
    document.getElementById("downloadForm").style.display = "none";
});

// Event Listener für den Abbrechen-Button im Reset-Formular
document.getElementById("backToStartReset").addEventListener("click", function() {
    document.getElementById("resetOptions").style.display = "none";
    showWelcomeText();
});

// Zwischenspeicher leeren und Erfolgsmeldung anzeigen
confirmReset.addEventListener("click", function() {
    csvData = [];  // Zwischenspeicher leeren
    resetMessage.innerHTML = "Zwischenspeicher wurde erfolgreich geleert.";
});

// Event Listener für Menüpunkt "Einzelne Vokabel"
document.getElementById("singleVocab").addEventListener("click", function() {
    event.preventDefault();  // Verhindert das Neuladen der Seite
    hideWelcomeText();
    hideStartQueryElements(); // Füge dies hinzu
    document.getElementById("vocabForm").style.display = "block";
    document.getElementById("vocabSheetForm").style.display = "none";
    document.getElementById("resetOptions").style.display = "none";
    document.getElementById("downloadForm").style.display = "none";
});

// Event Listener für Menüpunkt "Vokabel-Sheet eingeben"
document.getElementById("vocabSheet").addEventListener("click", function() {
    event.preventDefault();  // Verhindert das Neuladen der Seite
    hideWelcomeText();
    hideStartQueryElements(); // Füge dies hinzu
    document.getElementById("vocabForm").style.display = "none";
    document.getElementById("vocabSheetForm").style.display = "block";
    document.getElementById("resetOptions").style.display = "none";
    document.getElementById("downloadForm").style.display = "none";
});

// Event Listener für Menüpunkt "Abfrage starten"
document.getElementById("startQuery").addEventListener("click", function() {
    event.preventDefault();  // Verhindere, dass der Link die Seite neu lädt
    hideWelcomeText();
    document.getElementById("vocabForm").style.display = "none";
    document.getElementById("vocabSheetForm").style.display = "none";
    document.getElementById("resetOptions").style.display = "none";
    document.getElementById("downloadForm").style.display = "none";
    
    // Zeige den Bereich für Abfrage starten und die Buttons "dc" und "cd"
    document.getElementById("startQuerySection").style.display = "block";
    document.getElementById("dcBtn").style.display = "block"; // Zeige den "dc"-Button an
    document.getElementById("cdBtn").style.display = "block"; // Zeige den "cd"-Button an
});

// Event Listener für Menüpunkt "Download"
document.getElementById("download").addEventListener("click", function() {
    event.preventDefault();  // Verhindert das Neuladen der Seite
    hideWelcomeText();
    hideStartQueryElements(); // Füge dies hinzu
    document.getElementById("vocabForm").style.display = "none";
    document.getElementById("vocabSheetForm").style.display = "none";
    document.getElementById("resetOptions").style.display = "none";
    document.getElementById("downloadForm").style.display = "block";  // Download-Formular anzeigen
});

// Event Listener für "Zurück zur Startseite" auf der "Abfrage starten"-Seite
document.getElementById("backToStartFromQuery").addEventListener("click", function() {
    hideStartQueryElements(); // Abfrage-Elemente ausblenden
    showWelcomeText();  // Begrüßungstext anzeigen
});

// CSV-Datei einlesen und zum Zwischenspeicher hinzufügen (nicht überschreiben)
submitBtn.addEventListener('click', function() {
if (fileInput.files.length > 0) {
const selectedFile = fileInput.files[0];
const reader = new FileReader();
reader.onload = function(event) {
    const content = event.target.result;
    const newCsvData = content.split('\n').map(row => row.split(','));
    uploadedCsvData = newCsvData;  // Speichere nur die abgegebene CSV-Datei hier
    csvData = csvData.concat(newCsvData);  // Inhalt zum Zwischenspeicher hinzufügen
    fileDetails.textContent = 'Datei erfolgreich geladen: ' + selectedFile.name;
    csvMessage.innerHTML = '<p class="success">CSV erfolgreich abgegeben.</p>';  // Erfolgsnachricht anzeigen
};
reader.readAsText(selectedFile);
} else {
fileDetails.textContent = 'Keine CSV-Datei ausgewählt.';
}
});

// Neue Werte in den Zwischenspeicher hinzufügen und Erfolg/Fehlermeldung anzeigen
addBtn.addEventListener('click', function() {
    const newValue1 = field1.value.trim();
    const newValue2 = field2.value.trim();
    
    if (newValue1 && newValue2) {
        csvData.push([newValue1, newValue2]);
        field1.value = '';
        field2.value = '';
        vocabMessage.innerHTML = '<p class="success">Vokabel abgegeben.</p>';  // Erfolgsnachricht
    } else {
        vocabMessage.innerHTML = '<p class="error">Bitte beide Felder ausfüllen.</p>';  // Fehlermeldung
    }
});

// Inhalt des Zwischenspeichers abrufen und anzeigen
showBtn.addEventListener('click', function() {
    if (csvData.length > 0) {
        let content = 'Aktueller Inhalt des Zwischenspeichers:\n';
        csvData.forEach(row => {
            content += row.join(', ') + '\n';
        });
        vocabOutput.textContent = content;
    } else {
        vocabOutput.textContent = 'Zwischenspeicher ist leer.';
    }
});

// CSV-Datei ausgeben
printCsvBtn.addEventListener('click', function() {
if (uploadedCsvData.length > 0) {
let content = 'Inhalt der abgegebenen CSV-Datei:\n';
uploadedCsvData.forEach(row => {
    content += row.join(', ') + '\n';
});
csvOutput.textContent = content;
} else {
csvOutput.textContent = 'Keine CSV-Datei abgegeben oder CSV ist leer.';
}
});

// CSV Datei aus dem Zwischenspeicher erstellen und zum Download bereitstellen
saveBtn.addEventListener('click', function() {
    if (csvData.length > 0) {
        const csvContent = csvData.map(row => row.join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'csv_speicher.csv';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        downloadMessage.innerHTML = '';  // Leere Nachricht entfernen
        fileDetails.textContent = 'CSV-Datei wurde erstellt und zum Download bereitgestellt.';
    } else {
        downloadMessage.innerHTML = '<p class="error">Zwischenspeicher leer, keine Vokabeln zum Downloaden gefunden.</p>';  // Fehlermeldung
    }
});

// Zurück zur Startseite
backToStart.addEventListener('click', function() {
    document.getElementById("vocabForm").style.display = "none";
    showWelcomeText();
});

backToStartFromSheet.addEventListener('click', function() {
    document.getElementById("vocabSheetForm").style.display = "none";
    showWelcomeText();
});

backToStartFromDownload.addEventListener('click', function() {
    document.getElementById("downloadForm").style.display = "none";
    showWelcomeText();
});


// Event Listener für den "dc"-Button
document.getElementById("dcBtn").addEventListener("click", function () {
document.getElementById("dcBtn").style.display = "none";
document.getElementById("cdBtn").style.display = "none";
showRandomPairBeforeComma();  // Zeige den Wert vor dem Komma
document.getElementById("neueVokabelBtn").style.display = "none"; 
mode = "dc";  // Modus auf "dc" setzen
});




// Event Listener für den "cd"-Button
document.getElementById("cdBtn").addEventListener("click", function () {
document.getElementById("dcBtn").style.display = "none";
document.getElementById("cdBtn").style.display = "none";
showRandomPairAfterComma();  // Zeige den Wert nach dem Komma
document.getElementById("neueVokabelBtn").style.display = "block"; 
mode = "cd";  // Modus auf "cd" setzen
});


// Event Listener für den "neue Vokabel"-Button
document.getElementById("neueVokabelBtn").addEventListener("click", function () {
showNewRandomPairAfterComma();  // Neue Funktion aufrufen
});
// document.getElementById("nextBtn").addEventListener("click", function () {
//         // Entferne alle angezeigten Paare
//         document.querySelectorAll('p').forEach(p => p.remove());
//         if (mode === "dc") {
//             showRandomPairAfterComma();  // Nächste Abfrage im dc-Modus
//         }
//     });

function showNewRandomPairAfterComma() {
if (csvData.length > 0) {
const randomIndex = Math.floor(Math.random() * csvData.length);  // Wähle einen zufälligen Index
currentPair = csvData[randomIndex];  // Speichere das zufällige Paar in currentPair
const valueAfterComma = currentPair[1];  // Wert nach dem Komma (zweiter Wert des Paars)

// Entferne alte Anzeige, wenn vorhanden
document.querySelectorAll('p').forEach(p => p.remove());

// Erstelle und zeige das neue Ergebnis
const resultElement = document.createElement("p");
resultElement.innerText = `Die chinesische Vokabel ist: ${valueAfterComma}`;
document.body.appendChild(resultElement);

// Zeige den Aufdecken-Button wieder an
document.getElementById("revealBtn").style.display = "block";
} else {
alert("Zwischenspeicher ist leer.");  // Wenn keine Daten vorhanden sind
}
}



// Event Listener für den Aufdecken-Button
document.getElementById("revealBtn").addEventListener("click", function () {
if (currentPair) {
if (mode === "dc") {
    // Wenn im "dc"-Modus, zeige den Wert nach dem Komma an
    const valueAfterComma = currentPair[1];
    const revealElement = document.createElement("p");
    revealElement.innerText = `Die chinesische Vokabel ist: ${valueAfterComma}`;
    document.body.appendChild(revealElement);
} else if (mode === "cd") {
    // Wenn im "cd"-Modus, zeige den Wert vor dem Komma an
    const valueBeforeComma = currentPair[0];
    const revealElement = document.createElement("p");
    revealElement.innerText = `Die deutsche Übersetzung ist: ${valueBeforeComma}`;
    document.body.appendChild(revealElement);
}

// Verstecke den "Reveal"-Button nach der Enthüllung
document.getElementById("revealBtn").style.display = "none";
}
});

// Event Listener für den "Weiter"-Button
document.getElementById("nextBtn").addEventListener("click", function () {
// Entferne alle angezeigten Paare
document.querySelectorAll('p').forEach(p => p.remove());
if (mode === "dc") {
    showRandomPairBeforeComma();  // Nächste Abfrage im dc-Modus
}
});

// Event Listener für den "Zurück zu dc und cd"-Button
document.getElementById("backToDcCd").addEventListener("click", function () {
// Verstecke unnötige Buttons
document.getElementById("revealBtn").style.display = "none";
document.getElementById("nextBtn").style.display = "none";
document.getElementById("backToDcCd").style.display = "none";
document.getElementById("neueVokabelBtn").style.display = "none"; // Verstecke den Button "neue Vokabel"

// Zeige die dc und cd Buttons wieder an
document.getElementById("dcBtn").style.display = "block";
document.getElementById("cdBtn").style.display = "block";

// Entferne alle angezeigten Paare
document.querySelectorAll('p').forEach(p => p.remove());
});

// Funktion zum Anzeigen eines zufälligen Werts vor dem Komma (dc-Button)
function showRandomPairBeforeComma() {
if (csvData.length > 0) {
    const randomIndex = Math.floor(Math.random() * csvData.length);
    currentPair = csvData[randomIndex];
    const valueBeforeComma = currentPair[0];  // Wert vor dem Komma

    const resultElement = document.createElement("p");
    resultElement.innerText = `Die deutsche Vokabel ist: ${valueBeforeComma}`;
    document.body.appendChild(resultElement);

    // Zeige den "Reveal"-Button, um den Wert nach dem Komma anzuzeigen
    document.getElementById("revealBtn").style.display = "block";
    document.getElementById("nextBtn").style.display = "block";  // Zeige den "Weiter"-Button
    document.getElementById("backToDcCd").style.display = "block";  // Zeige den "Zurück zu dc und cd"-Button
    mode = "dc";  // Modus auf "dc" setzen
} else {
    alert("Zwischenspeicher ist leer.");
}
}

// Funktion zum Anzeigen eines zufälligen Werts nach dem Komma (cd-Button)
function showRandomPairAfterComma() {
if (csvData.length > 0) {
    const randomIndex = Math.floor(Math.random() * csvData.length);
    currentPair = csvData[randomIndex];
    const valueAfterComma = currentPair[1];  // Wert nach dem Komma

    const resultElement = document.createElement("p");
    resultElement.innerText = `Die chinesische Vokabel ist: ${valueAfterComma}`;
    document.body.appendChild(resultElement);

    // Zeige den "Reveal"-Button, um den Wert vor dem Komma anzuzeigen
    document.getElementById("revealBtn").style.display = "block";
    document.getElementById("nextBtn").style.display = "none";  // Verstecke den "Weiter"-Button bei cd
    document.getElementById("backToDcCd").style.display = "block";  // Zeige den "Zurück zu dc und cd"-Button
    mode = "cd";  // Modus auf "cd" setzen
} else {
    alert("Zwischenspeicher ist leer.");
}
}

document.getElementById("dropdown-btn").addEventListener("click", function() {
this.classList.toggle("active");
const dropdownContent = this.nextElementSibling;
if (this.classList.contains("active")) {
dropdownContent.style.display = "block";  // Dropdown-Inhalte anzeigen
} else {
dropdownContent.style.display = "none";  // Dropdown-Inhalte verstecken
}
});
