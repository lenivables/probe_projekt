# Vokabelapplikation

## Einleitung

### Idee und Motivation
Die Idee zur **Vokabelapplikation** entstand aus einem von einem Chinesisch-Sprachkurs, der an der DHBW angeboten wird und den ich seit Januar 2024 besuche. In diesem Dreivierteljahr haben sich viele Vokabeln angestaut. Mit der Zeit wurde es immer anstrengender, diese auf physische Karteikarten zu übertragen und vor Allem auch unterwegs mitzunehmen, um diese in der Bahn oder Tram auf dem Arbeitsweg zu lernen. Eine digitale Applikation, in der man die Vokabeln lernen könnte, wäre nicht nur handlicher, sondern würde auch Kosten einsparen, da keine Karteikarten und Karteikästen mehr benötigt werden würden. 

## Aufbau des Chinesischkurses
Im Chinesischen gibt es keine europäischen Sprachniveaus (wie A1,B2,C1...), sondern sechs HSK-Prüfungen. In den ersten beiden HSK-Prüfungen, werden noch keine Schriftzeichen abgefragt, ab der HSK3 schon. Grob lässt sich sagen, dass HSK1 etwa dem europäischen A1 Sprachniveau, HSK2 de, europäischen A2 Sprachniveau, HSK3 dem europäischen B1 Sprachniveau usw. entspricht. Nach der erfolgreichem Ablegen der HSK6 Prüfung gilt man als fließend chinesisch sprechend und schreibend. Pro HSK Prüfung gibt es eine festgelegte Anzahl an Vokabeln, die beherrscht werden müssen. Auf Basis dieser müssen auch ganze Sätze gebildet werden. 
Aktuell hat der Chinesischkurs der DHBW bereits die Vokabeln der HSK1 und HSK2 behandelt. 

## Anforderungen
Die Applikation sollte folgende Anforderungen erfüllen:

- **Benutzerfreundlichkeit und Gerätunabhängigkeit:** Die Web Applikation soll sowohl am Handy als auch am Laptop genutzt werden können, sodass sie sowohl Zuhause als auch unterwegs funktional ist. Außerdem soll die Applikation möglichst intuitiv und eindach nutzbar sein, sodass die Applikation in kurzen Zeiträumen im Alltag genutzt werden kann. 
-  **Beachten der Geographie des Arbeitsweges:** Da ich in der Schweiz bei der Coop Genossenschaft arbeite, befinde ich mich während des Großteils meines Arbeitsweges in der Schweiz. Hierbei ist eine Einschränkung, dass mein Mobilfunkvertrag mir monatlich nur 1GB in der Schweiz erlaubt. Dadurch ergibt sich die Anforderung, dass die Applikation nur einmal geladen werden soll und die Vokabel-Abfrage danach auch offline funktioniert. Es sollen durch die Applikation also möglichst keine neuen Tabs geöffnet werden, sondern alles soll sich in einem Fenster abspielen. 
- **schnelle Nutzung** Durch eine intuitive und einfache Benutzung sollen möglichst schnell VOkabeln eingespeißt werden, sodass man die Zeit des Zugfahrens möglichst effiziernt nutzen kann und nicht viel Zeit beim Eingeben der Vokabeln, die man abfragen möchte verschwendet.
- **mehrere Vokabeln gleichzeitig hinzufügen:** Da es einen festgelegten Umfang an Vokabeln gibt, sollen diese in geordneten Sheets in die Applikation geladen werden. Es gibt die einzelnen Vokabeln der HSK1 Lektion, die einzelnen Vokabeln der HSK2 Lektion und ein Sammelsurium an Übungssätzen. Diese drei Vokabelbündel sollen entweder einzeln oder in Kombination miteinander in die Applikation eingespeist werden können. 
- **einzelne Vokabeln hinzufügen:** Es sollen jedoch auch einzelne Vokabeln manuell eingefügt werden können, sodass spontan die Vokabeln, die man sich abfragen möchte, erweitert werden können.
- **Kompabilität von einzeln eingetragenen VOkabeln und eingegebenen VOkabel-Sheets** Wenn einzelne Vokabeln eingetragen wurden, soll weiterhin die Möglichkeit bestehen VOkabel-Sheets einzugeben, ohne dass die einzeln eingetragenen Vokabeln überschrieben werden. Umgekehrt sollen auch zuerst Vokabel-Sheet(s) eingegeben werden können und danach weitere einzelne manuell eingegebene VOkabeln hinzugefügt werden können, sodass individuelle Kombinationen aus Vokabeln abgefragt werden können. 
- **Vokabeln downloaden:** Wenn man nicht nur einzelne vorgefertigte Vokabel-Sheets eingefügt hat, sondern eine individuelle Kombination aus Vokabeln erstellt hat, soll es die Möglichkeit geben, diese Kombination als Vokabel-Sheet herunterladen zu können. So kann die individuelle Kombination bei erneutem Abfragen einfach als Sheet eingefügt werden und die Kombination muss nicht nochmal manuell eingegeben werden, sodass Zeit gespart werden kann.
- **Reset der abgefragten Vokabeln** Wenn man die Kombination aus Vokabeln ändern möchte, soll man nicht jedesmal die ganze Seite neu laden. Stattdessen soll es einen Button geben, der die Vokabelliste, die akutell abgefragt wird, leert und neue Vokabeln erstellt oder hochgeladen werden können.

## Ausarbeitung eines Prototypen
In der ersten Konzepterstellung wurde noch auf Papier mehrere Skizzen erstellt, die das gewünschte Layout der Applikation visualisiert haben. Ursprünglich war die Applikation anders aufgebaut als die schlussendlich gebaute Applikation. Der Infobutton, der "zurück zur Startseite"-Button, das Layout der "deutsch-chinesisch" und "chinesisch-deutsch" Buttons ist jedoch vom ersten Konzept beibehalten worden. Zunächst geplant war, dass immer alle HSK Lektionen und Sätze geladen werden, unabhängig davon, welche Vokabeln man schlussendlich abfragen möchte. Dies hat sich jedoch als Performance mindernd herausgestellt, da auch wenn man nur 20 einzelne Vokabeln abfragen möchte, insgesamt etwa 500 Vokabeln geladen werden müssen. Es hat sich als sinnvoller erwiesen, immer nur die Vokabeln in die Applikation zu laden, wie viele man auch abfragen möchte. 
Der erste Prototyp der Applikation umfasst grundlegende Funktionen wie das Hinzufügen und Testen von Vokabeln sowie eine einfache Benutzeroberfläche. 

![image](https://github.com/user-attachments/assets/063f9791-b0f9-41c7-b9cb-5ce2e99b040f)
![image](https://github.com/user-attachments/assets/116b96dd-f292-4e25-a0a6-554e33dbb386)
(Skizzen des ersten Prototypes)

Der Prototyp hat sich trotzdem als sehr sinnvoll erwiesen, obwohl er auf dem Weg der Implementierung deutlich abgeändert wurde, da durch die Visualisierung des gewünschten Endproduktes von Anfang an ein roter Faden das Projekt durchzogen hat und so die Konsistenz des Designs und die Benutzerfreundlichkeit besonders beachtet wurden. 

## Finales Layout
- **Menü:**
 - Abfrage starten: es erscheinen drei Buttons "deutsch-chinesisch", "chinesisch-deutsch" und "zurück zur Startseite". Beim drücken einer der ersten zwei Buttons erscheint ein neues Formular mit den Buttons "Aufdecken", "Weiter", "zurück zur Sprachasuwahl" und "zirück zur Startseite". Zudem wird eine random Vokabel aus den eingegebenen Vokabeln gezogen und der deutsche bzw. chinesische Teil ausgegeben. Beim Klicken auf "Aufdecken" wird das chinesische bzw. deutsche Pendant der ausgewählten Vokabel ausgegeben. Beim Drücken auf "Weiter" wird eine neue random Vokabel aus den eingegebenen Vokabeln ausgewählt und die Abfrage beginnt aufs Neue. Beim Klicken auf "zurück zur Sprachauswahl" kann neu gewählt werden, ob man von deutsch auf chinesisch oder umgekehrt Vokabeln angezeigt bekommen möchte. 
 - neue Vokabel:
   -einzelne Vokabel:Es erscheinen zwei Textfelder, in die die deutsche und chinesische Übersetzung einer Vokabel eingegeben werden können. Zusätzlich erscheinen die Buttons "Abgeben", "Abrufen" und "zurück zur Startseite". Bei Klicken auf "Abgeben" wird die eingegebene Vokabel in den Zwischenspeicher geladen -vorausgesetz beide Felder beinhalten mindestens 1 Schriftzeichen. Bei Klicken auf "Abrufen" erscheint der komplette Inhalt des Zwischenspeichers, sodass überprüft verifiziert werden kann, dass die eingegebenen Vokabeln wirklich in den Zwischenspeicher geladen wurden und bestehende Vokabeln nicht überschrieben wurden.  
   - Vokabel-sheet eingeben: Hier erscheinen die Buttons "Datei auswählen", "Fertig", "abgegebene csv-Datei ausgeben" und "zurück zur Startseite". Über den Button "Datei auswählen" können nur csv-Dateien eingefügt werden. Bei Klicken auf "Fertig" wird der Inhalt der csv-Datei in den Zwischenspeicher geladen. Über den Button "abgegebene csv-Datei ausgeben" wird der Inhalt des Zwischenspeichers ausgegeben, sodass fverifiziert werden kann, dass der gesamte Inhalt der Datei eingegeben wurde und bereits vorher eingegebene VOkabeln nicht überschrieben wurden. 
  - Download: Es erscheinen die Buttons "Ende" und "zurück zur Startseite". Beim Klicken auf "Ende" wird eine csv-Datei namens "csv_speicher.csv" von dem gesamten Zwischenspeicher erstellt und heruntergeladen. Wenn der Zwischenspeicher keine Vokabeln erhält wird keine leere csv-Datei erstellt, sondern eine Info ausgegeben, dass der Zwischenspeicher leer ist und keine Vokabeln zum herunterladen gefunden wurde. So werden unnötige Downloads vermieden.
  - Reset: Es erscheinen die Buttons "abbrechen" und "durchführen". Beim Klicken auf "abbrechen" wird man zurück zur Startseite geleitet, beim Klicken auf "durchführen" wird der gesamte Zwischenspeicher geleert. Hierbei wird keine csv-Datei vom Zwischenspeicher erstellt.


## Code
### HTML Code
Hier könnte der HTML-Code eingefügt werden.

### CSS Code
Hier könnte der CSS-Code eingefügt werden.

### JavaScript Code
Hier könnte der JavaScript-Code eingefügt werden.
