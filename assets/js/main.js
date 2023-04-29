function changeBackground() {
  // Finde das Value für Red
  let red = document.getElementById("redslider").value;
  // Finde das Value für Grün
  let green = document.getElementById("greenslider").value;
  // Finde das Value für Blau
  let blue = document.getElementById("blueslider").value;
  // Setze nun den String für den rgb Code per concatenation zusammen
  let bg = "rgb(" + red + "," + green + "," + blue + ")";
  // Füge den rgb code per css als Background Color ein
  document.body.style.backgroundColor = bg;
  let output = document.querySelector(".output");
  // Füge den rgb code nun in den p Tag als Output ein
  output.innerHTML = bg;
}

function copyToClipboard(elementId) {
  // Finde das p-Element
  let element = document.getElementById("rgbcode");

  // Erstelle einen neuen Zwischenspeicher-Eintrag
  navigator.clipboard.writeText(element.textContent).then(
    // Wurde erfolgreich kopiert führe diese Funktion aus
    function () {
      console.log("Text erfolgreich in die Zwischenablage kopiert!");
      // Führe ein Alert aus
      alert("RGB Code erfolgreich kopiert: " + element.textContent);
    },
    // Wurde nicht kopiert führe diese Funktion aus
    function () {
      console.error("Fehler beim Kopieren des Textes in die Zwischenablage.");
      // Führe ein Alert aus
      alert("RGB Code nicht kopiert");
    }
  );
}
function randomizeRangeInputsOnKeyPress(
  key,
  rangeInput1Id,
  rangeInput2Id,
  rangeInput3Id
) {
  // Finde die Range-Input-Felder
  let rangeInput1 = document.getElementById("redslider");
  let rangeInput2 = document.getElementById("greenslider");
  let rangeInput3 = document.getElementById("blueslider");

  // Füge einen Event-Listener für die Tasten drücken hinzu
  document.addEventListener("keydown", function (event) {
    if (event.key === key) {
      // Verändere die Werte der Range-Input-Felder zufällig
      rangeInput1.value =
        Math.floor(Math.random() * (rangeInput1.max - rangeInput1.min + 1)) +
        parseInt(rangeInput1.min);
      rangeInput2.value =
        Math.floor(Math.random() * (rangeInput2.max - rangeInput2.min + 1)) +
        parseInt(rangeInput2.min);
      rangeInput3.value =
        Math.floor(Math.random() * (rangeInput3.max - rangeInput3.min + 1)) +
        parseInt(rangeInput3.min);
      // Speichere die RGB Werte und gebe diese in den Output Feld aus
      let output = document.querySelector(".output");
      let bg =
        "rgb(" +
        rangeInput1.value +
        "," +
        rangeInput2.value +
        "," +
        rangeInput3.value +
        ")";
      document.body.style.backgroundColor = bg;
      output.innerHTML = bg;
    }
  });
}

// Rufe die Funktion mit den entsprechenden Argumenten auf
randomizeRangeInputsOnKeyPress(
  "Enter",
  "redslider",
  "greenslider",
  "blueslider"
);
