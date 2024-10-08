# Vokabelapplikation

## Einleitung

### Idee und Motivation
Die Idee zur **Vokabelapplikation** entstand aus einem Chinesisch-Sprachkurs, der an der DHBW angeboten wird und den ich seit Januar 2024 besuche. In diesem Dreivierteljahr haben sich viele Vokabeln angestaut. Mit der Zeit wurde es immer anstrengender, diese auf physische Karteikarten zu übertragen und vor Allem auch unterwegs mitzunehmen, um diese in der Bahn oder Tram auf dem Arbeitsweg zu lernen. Eine digitale Applikation, in der man die Vokabeln lernen könnte, wäre nicht nur handlicher, sondern würde auch Kosten einsparen, da keine Karteikarten und Karteikästen mehr benötigt werden würden. 

## Aufbau des Chinesischkurses
Im Chinesischen gibt es keine europäischen Sprachniveaus (wie A1,B2,C1...), sondern sechs HSK-Prüfungen. In den ersten beiden HSK-Prüfungen, werden noch keine Schriftzeichen abgefragt, ab der HSK3 schon. Grob lässt sich sagen, dass HSK1 etwa dem europäischen A1 Sprachniveau, HSK2 dem europäischen A2 Sprachniveau, HSK3 dem europäischen B1 Sprachniveau usw. entspricht. Nach dem erfolgreichen Ablegen der HSK6 Prüfung gilt man als fließend chinesisch sprechend und schreibend. Pro HSK Prüfung gibt es eine festgelegte Anzahl an Vokabeln, die beherrscht werden müssen. Auf Basis dieser müssen auch ganze Sätze gebildet werden. 
Aktuell hat der Chinesischkurs der DHBW bereits die Vokabeln der HSK1 und HSK2 behandelt. 

## Anforderungen
Die Applikation sollte folgende Anforderungen erfüllen:

- **Benutzerfreundlichkeit und Gerätunabhängigkeit:** Die Web Applikation soll sowohl am Handy als auch am Laptop genutzt werden können, sodass sie sowohl Zuhause als auch unterwegs funktional ist. Außerdem soll die Applikation möglichst intuitiv und eindach nutzbar sein, sodass die Applikation in kurzen Zeiträumen im Alltag genutzt werden kann. 
-  **Beachten der Geographie des Arbeitsweges:** Da ich in der Schweiz bei der Coop Genossenschaft arbeite, befinde ich mich während des Großteils meines Arbeitsweges in der Schweiz. Hierbei ist eine Einschränkung, dass mein Mobilfunkvertrag mir monatlich nur 1GB in der Schweiz erlaubt. Dadurch ergibt sich die Anforderung, dass die Applikation nur einmal geladen werden soll und die Vokabel-Abfrage danach auch offline funktioniert. Es sollen durch die Applikation also möglichst keine neuen Tabs geöffnet werden, sondern alles soll sich in einem Fenster abspielen. 
- **schnelle Nutzung** Durch eine intuitive und einfache Benutzung sollen möglichst schnell Vokabeln eingespeißt werden, sodass man die Zeit des Zugfahrens möglichst effizient nutzen kann und nicht viel Zeit beim Eingeben der Vokabeln, die man abfragen möchte, verschwendet.
- **mehrere Vokabeln gleichzeitig hinzufügen:** Da es einen festgelegten Umfang an Vokabeln gibt, sollen diese in geordneten Sheets in die Applikation geladen werden. Es gibt die einzelnen Vokabeln der HSK1 Lektion, die einzelnen Vokabeln der HSK2 Lektion und ein Sammelsurium an Übungssätzen. Diese drei Vokabelbündel sollen entweder einzeln oder in Kombination miteinander in die Applikation eingespeist werden können. 
- **einzelne Vokabeln hinzufügen:** Es sollen jedoch auch einzelne Vokabeln manuell eingefügt werden können, sodass die Vokabeln, die man sich abfragen möchte, spontan erweitert werden können.
- **Kompabilität von einzeln eingetragenen Vokabeln und eingegebenen VOkabel-Sheets** Wenn einzelne Vokabeln eingetragen wurden, soll weiterhin die Möglichkeit bestehen VOkabel-Sheets einzugeben, ohne dass die einzeln eingetragenen Vokabeln überschrieben werden. Umgekehrt sollen auch zuerst Vokabel-Sheet(s) eingegeben werden können und danach weitere einzelne manuell eingegebene VOkabeln hinzugefügt werden können, sodass individuelle Kombinationen aus Vokabeln abgefragt werden können. 
- **Vokabeln downloaden:** Wenn man nicht nur einzelne vorgefertigte Vokabel-Sheets eingefügt hat, sondern eine individuelle Kombination aus Vokabeln erstellt hat, soll es die Möglichkeit geben, diese Kombination als Vokabel-Sheet herunterladen zu können. So kann die individuelle Kombination bei erneutem Abfragen einfach als Sheet eingefügt werden und die Kombination muss nicht nochmal manuell eingegeben werden, sodass Zeit gespart werden kann.
- **Reset der abgefragten Vokabeln** Wenn man die Kombination aus Vokabeln ändern möchte, soll man nicht jedesmal die ganze Seite neu laden. Stattdessen soll es einen Button geben, der die Vokabelliste, die akutell abgefragt wird, leert und neue Vokabeln erstellt oder hochgeladen werden können.

## Ausarbeitung eines Prototypen
In der ersten Konzepterstellung wurden noch auf Papier mehrere Skizzen erstellt, die das gewünschte Layout der Applikation visualisiert haben. Ursprünglich war die Applikation anders aufgebaut als die schlussendlich gebaute Applikation. Der Infobutton, der "zurück zur Startseite"-Button, das Layout der "deutsch-chinesisch" und "chinesisch-deutsch" Buttons ist jedoch vom ersten Konzept beibehalten worden. Zunächst geplant war, dass immer alle HSK Lektionen und Sätze geladen werden, unabhängig davon, welche Vokabeln man schlussendlich abfragen möchte. Dies hat sich jedoch als Performance mindernd herausgestellt, da auch wenn man nur 20 einzelne Vokabeln abfragen möchte, insgesamt etwa 500 Vokabeln geladen werden müssen. Es hat sich als sinnvoller erwiesen, immer nur die Vokabeln in die Applikation zu laden, die man auch abfragen möchte. 
Der erste Prototyp der Applikation umfasst grundlegende Funktionen wie das Hinzufügen und Testen von Vokabeln sowie eine einfache Benutzeroberfläche. 

![image](https://github.com/user-attachments/assets/063f9791-b0f9-41c7-b9cb-5ce2e99b040f)
![image](https://github.com/user-attachments/assets/116b96dd-f292-4e25-a0a6-554e33dbb386)
(Skizzen des ersten Prototypes)

Der Prototyp hat sich trotzdem als sehr sinnvoll erwiesen, obwohl er auf dem Weg der Implementierung deutlich abgeändert wurde, da durch die Visualisierung des gewünschten Endproduktes von Anfang an ein roter Faden das Projekt durchzogen hat und so die Konsistenz des Designs und die Benutzerfreundlichkeit besonders beachtet wurden. 

## Finales Layout
- **Menü:**
 - Abfrage starten: es erscheinen drei Buttons "deutsch-chinesisch", "chinesisch-deutsch" und "zurück zur Startseite". Beim drücken einer der ersten zwei Buttons erscheint ein neues Formular mit den Buttons "Aufdecken", "Weiter", "zurück zur Sprachasuwahl" und "zurück zur Startseite". Zudem wird ein beliebiges Vokabelpaar aus den eingegebenen Vokabeln gezogen und der deutsche bzw. chinesische Teil ausgegeben. Beim Klicken auf "Aufdecken" wird das chinesische bzw. deutsche Pendant der ausgewählten Vokabel ausgegeben. Beim Drücken auf "Weiter" wird eine neues beliebiges Vokabelpaar aus den eingegebenen Vokabeln ausgewählt und die Abfrage beginnt aufs Neue. Beim Klicken auf "zurück zur Sprachauswahl" kann neu gewählt werden, ob man von deutsch auf chinesisch oder umgekehrt Vokabeln angezeigt bekommen möchte. 
 - neue Vokabel:
   -einzelne Vokabel:Es erscheinen zwei Textfelder, in die die deutsche und chinesische Übersetzung einer Vokabel eingegeben werden können. Zusätzlich erscheinen die Buttons "Abgeben", "Abrufen" und "zurück zur Startseite". Bei Klicken auf "Abgeben" wird die eingegebene Vokabel in den Zwischenspeicher geladen -vorausgesetz beide Felder beinhalten mindestens 1 Schriftzeichen. Bei Klicken auf "Abrufen" erscheint der komplette Inhalt des Zwischenspeichers, sodass verifiziert werden kann, dass die eingegebenen Vokabeln wirklich in den Zwischenspeicher geladen und bestehende Vokabeln nicht überschrieben wurden.  
   - Vokabel-sheet eingeben: Hier erscheinen die Buttons "Datei auswählen", "Fertig", "abgegebene csv-Datei ausgeben" und "zurück zur Startseite". Über den Button "Datei auswählen" können nur csv-Dateien eingefügt werden. Bei Klicken auf "Fertig" wird der Inhalt der csv-Datei in den Zwischenspeicher geladen. Über den Button "abgegebene csv-Datei ausgeben" wird der Inhalt des Zwischenspeichers ausgegeben, sodass verifiziert werden kann, dass der gesamte Inhalt der Datei eingegeben wurde und bereits vorher eingegebene VOkabeln nicht überschrieben wurden. 
  - Download: Es erscheinen die Buttons "Ende" und "zurück zur Startseite". Beim Klicken auf "Ende" wird eine csv-Datei namens "csv_speicher.csv" von dem gesamten Zwischenspeicher erstellt und heruntergeladen. Wenn der Zwischenspeicher keine Vokabeln erhält wird keine leere csv-Datei erstellt, sondern eine Info ausgegeben, dass der Zwischenspeicher leer ist und keine Vokabeln zum herunterladen gefunden wurde. So werden unnötige Downloads vermieden.
  - Reset: Es erscheinen die Buttons "abbrechen" und "durchführen". Beim Klicken auf "abbrechen" wird man zurück zur Startseite geleitet, beim Klicken auf "durchführen" wird der gesamte Zwischenspeicher geleert. Hierbei wird keine csv-Datei vom Zwischenspeicher erstellt.


## Technische Architektur der Applikation
Die Vokabeltrainer-Applikation ist in drei Bestandteile aufgebaut: Die grundlegende Struktur bietet die html-Datei (index.html), das Design der in der html-Datei festgelegten Struktur wird in der css-Datei (designsheet.css) festgelegt. Die Logik, die bei Betätigen der Menüpunkte und Buttons, die in der html-Datei erstellt wurden, ausgeführt wird, ist in einer javascript-Datei (script_vocabtrainer.js) untergebracht.
### HTML Code
Zunächst wird im Head-Teil der html-Datei festgelegt, dass die Datei in deutscher Sprache und dem im WWW gängigen "UFT-8" zu verstehen sind. Hier wird auch auf das stylesheet -also die css-Datei- verlinkt, sodass das Styling ausgelagert in der css-Datei liegt, wodurch die html-Datei übersichtlicher wird.

![image](https://github.com/user-attachments/assets/b40b4fa7-9103-4fd6-8e84-605bdb674481)

Im auf den head-Teil folgenden body-Teil der html-Datei werden drei grosse Div's erstellt: Einen für das Menü, einen für das Info-Modal und einen für alle restlichen Buttons, Textfelder und Labels,die im Laufe der Nutzung der Applikation gezeigt und genutzt werden.

![image](https://github.com/user-attachments/assets/50a6e1cf-9b97-4253-a05b-aaf4cffb423e)

Im ersten Div, das für das Menü zuständig ist, sind einzelne weitere Div's, die das Menü inklusive der beiden Menüunterpunkte, die, wenn man auf "neue Vokabel" klickt, erscheinen, beinhalten. 

![image](https://github.com/user-attachments/assets/ce3f1d74-d3dd-4103-b233-93db284ad389)

Auch im Info-Modal wird der Text, der angezeigt wird, sobald man auf das Info-Modal anklickt, in ein weiteren Div gepackt. Hier wird auf das Repository, in dem die Dateien inklusive das readme.md liegt,verwiesen, sodass bei Fragen der Code und das readme.md gelesen und analysiert werden können.  

![image](https://github.com/user-attachments/assets/0a247271-0a7a-4b61-b3c1-85cd5de41534)

Dadurch, dass jedem Div, Button, Label etc. eine Id zugewiesen wird, wird jede Komponente individuell entsprechend des css gestyled. Dadurch sieht nicht alles gleich aus, sondern einzelne Buttons haben verschiedene Farben, Größen und Grade der Abrundung ihrer Ecken. 

### CSS Code
Durch das Css ist es möglich, die Applikation responsive zu gestalten: Es wird bevor die html-Datei weiter ausgeführt wird, geschaut, wie breit der Bildschirm ist, auf dem die Seite geladen werden soll. Wenn der Bildschirm maximal 768 Pixel in der Breite umfasst, wird das Menü samt seiner Unterpunkte statt eines Balkenmenüs als ein Hamburgermenü dargestellt. Dies bedeutet, dass bei breiten Bildschirmen (breiter als 768 Pixel) die Mneüpunkte nebeneinander angezeigt werden. Bei kleinen Bildschirmen werden diese hingegen untereinander angezeigt. 

![image](https://github.com/user-attachments/assets/7dbc6bce-6dd4-4339-831a-514eda5ae9ea)

(css Styling für schmale Bildschirme)

![image](https://github.com/user-attachments/assets/91354708-3034-4a1f-aa5e-b685049dc9c7)
(Aussehen des Menüs bei schmalen Bildschirmen) 

![image](https://github.com/user-attachments/assets/ad3aed60-0762-4995-b325-d3148666670d)

(css Styling für breite Bildschirme)

![image](https://github.com/user-attachments/assets/d636fdf7-5740-4622-8f77-717a9666751c)

(Aussehen der Menüs bei breiteren Bildschirmen)


Durch das Styling ist es so möglich, für Buttons, die genau gleich aussehen sollen, nur einmal die gewünschte Optik zu beschreiben, statt dies bei beiden Buttons einzeln zu müssen. So bleibt der Code nicht nur übersichtlicher, sondern auch kürzer. Besonders hilfreich war dieses Vorgehen bei den "zurück zur Startseite"-Buttons, da diese mehrfach vorkommen, aber nur einmal gestyled werden mussten. 

![image](https://github.com/user-attachments/assets/b985e5a5-086c-4edf-93a9-f2885a887319)

(css der Buttons "deutsch-chinesisch" und "chinesisch-deutsch")

![image](https://github.com/user-attachments/assets/b253d02f-1d28-410b-98a5-0c244225e21a)

(Verweis im html-Dokument auf das css Styling für die Buttons über die ID "dcBtn" bzw. "cdBtn")

![image](https://github.com/user-attachments/assets/51e9c190-9eac-46a5-ae78-4a50c885456f)

(gleiches Aussehen der Buttons beim Aufrufen der html-Datei im Browser)

### JavaScript Code
Zunächst werden in der Datei sämtliche Variablen und Konstanten, die im Folgenden genutzt und gebraucht werden, gesetzt. 
![image](https://github.com/user-attachments/assets/9c8b9f47-346a-4169-8355-ff6c52ca76c7)

Im Anschluss werden Schritt für Schritt einzelne Fuktionen definiert, die ausgeführt werden sollen, sobald auf die Buttons oder Menüpunkte,auf die die Funktionen verlinken, gedrückt werden. 
#### Beispiele für Implementierung in Java
##### Anzeigen des Wilkommenstextes
Beispielsweise wird die Funktion showWelcomeTedxt() beim ersten Öffnen der Seite und beim Betätigen des "zurück zur Startseite"-Buttons ausgeführt, sodass der Willkommenstext eingeblendet wird. Die Funktion hideWelcomeText wird dagegen ausgeführt, sobald auf ein Menüpunkt geklickt wird, da dann die Buttons, Felder etc. des jeweiligen Menüpunktes gezeigt werden sollen und der Willkommenstext nicht mehr benötigt wird.

![image](https://github.com/user-attachments/assets/bfd0d022-4e3f-42ac-8312-58c02b3f8ae9)

(definieren der Funktionen in der Javascript-Datei)

##### Abfrage der ersten Vokabel nach Auswählen der Sprachasuwahl
Die Abfrage der Vokabeln erfolgt zufällig: Es wird ein zufälliger Index innerhalb der Länge des Zwischenspeichers ausgewählt. Danach wird das Wertepaar, das sich an diesem Indedx befindet, als Vokabel, die abgefragt werden soll, festgelegt. Der Wert an Indexstelle 1 (also an 2. Stelle) wird als chinesische Vokabel ausgewählt und ausgegeben. (Bzw. bei der "deutsch-chinesisch"-Auswahl wird die deutsche Vokabel zuerst ausgegeben). Durch klicken auf den "Aufdecken"-Button wird die deutsche Übersetzung angezeigt, also der Wert an 0. Indexstelle des zufällig ausgesuchten Wertpaares. Wenn der Zwischenspeicher allerdings leer ist, wird eine Warnung ausgegeben, die den Nutzer informiert, dass der Zwischenspeicher leer ist -also noch gar keine Vokabeln vorhanden sind, die abgefragt werden könnten. 

![image](https://github.com/user-attachments/assets/6516c6ad-8775-4127-a721-19812e00013c)

(Funktion, die ausgeführt wird, sobald der Button "chinesisch-deutsch" gedrückt wird)

##### Hochladen einer csv-Datei
Durch den EventListener des Submit-Buttons können lokal gespeicherte csv-Datein in die Applikation geladen werden. Diese werden in den Zwischenspeicher (in dem sich bereits andere Vokabeln befinden können) geladen und stehen somit zur Abfrage zur Verfügung. So können auch mehrere Dateien hintereinander in den Zwischenspeicher hochgeladen werden, sodass mehrere Vokabel-Sheets gleichzeitig abgefragt werden können. Zudem wird der Inhalt der csv-Datei noch in einen weiteren Zwischenspeicher geladen. In diesem Zwischenspeicher befindet sich stets nur der Inhalt der aktuell eingegebenen Datei, sodass bei Betätigen des Buttons "abgegebene csv-Datei ausgeben" nur der Inhalt der csv-Datei ausgegeben wird und nicht andere Vokabeln, die bereits vor Hochladen der csv-Datei im Zwischenspeicher waren, auch ausgegeben werden. 

![image](https://github.com/user-attachments/assets/5093c953-76d5-46d4-8f89-b1adefda88fc)

##### Downloaden des Zwischenspeichers
Zusätzlich gibt es eine fast gegensätzliche Implementierung in der Javascript-Datei, die den ganzen Inhalt des Zwischenspeichers, in der sich alle Vokabeln und nicht nur die aktuell abgegebene csv-Datei befindet, in eine csv Datei umwandelt und sie für den Nutzer der Applikation zum Herunterladen unter dem Namen "csv_speicher.csv" zur Verfügung stellt. Dies geschieht allerdings nur, wenn mindestens eine VOkabel im Zwischenspeicher hinterlegt ist, sodass keine leere csv-Datei heruntergeladen werden kann. So können einzigartige Kombinationen aus Vokabelsheets und manuell eingegebenen Vokabeln lokal gespeichert werden und für künftige Abfragen weiterhin genutzt werden, indem sie als Vokabel-Sheets eingegeben werden. 

![image](https://github.com/user-attachments/assets/dbf7c470-9740-43f0-96b3-9a43b4c546f2)

## Herausforderung innerhalb des Erstellungsproozesses
### Möglichkeit, lokale csv-Dateien einzubinden
Eine große Herausforderung war es, Zugriff auf lokale Dateien zu ermöglichen, um eine möglichst schnelle Eingabe bereits aufgeschriebener Vokabeln zu ermöglichen. Gelöst wurde das Problem, indem in einer neuen html-Datei, abgesondert vom bisherigen Code, ein Button erstellt wurde, der auf lokale Dateien zugreifen konnte. Erst als diese Datei reibubgslos funktionierte, wurde der Code in den bereits bestehenden Code der Webapplikation eingefügt, sodass dort der Lösungscode nur noch richtig eingebettet werden musste, statt ihn in dem großen Wirrwar der html-Datei entwickeln zu müssen. 

![image](https://github.com/user-attachments/assets/ecc1c2ce-7912-4f0b-8497-6e65f45c0a75)

(Darstellung der zweiten html-Datei, die genutzt wurde, um den lokalen Dateizugriff einzeln zu entwickeln)

### Anpassen des Menüs auf die Bildschirmbreite
Auch eine große Hürde war die Anforderung, dass das Design responsive gestaltet werden sollte. Hier war zwar nur das Menü, das angepasst werden musste, dies hat jedoch einige Zeit gekostet. Hauptproblem hierbei war einerseits, dass alle Verlinkungen richtig übernommen werden mussten (es geschah mehrmals, dass beim Klicken auf Menüpunkte nichts mehr passierte, da ihre Verlinkung nicht richtig gesetzt wurde) und andererseits, dass die Untermenüpunkte von "neue Vokabel" auch angezeigt wurden. Hierbei tat sich das Hamburger-Menü anfangs sehr schwer. Außerdem stellte sich bei einem Probelauf auf einem Handy heraus, dass es sehr praktisch ist, wenn sich das Menü nach Klicken auf einen Menüpunkt automatisch schliesst, da dieses sonst einen zu großen Platz auf dem Bildschrim einnehmen würde. Bei großen Bildschirmen war dieser Makel vorher nicht aufgfallen, da genügend Platz für ein stets ausgeklapptes Menü zur Verfügung stand.

### benutzerfreundliches Design & Validierung der Implementierung
Schlussendlich war die Konzeptionierung der Webapplikation die größte Hürde. Es sollte ein intuitives Design sein, das aber auch einen gewissen Spaß an der Applikation und damit am Vokabellernen bringen sollte. Zusätzlich sollten alle gewünschten Funktionen der Applikation schnell erreichbar sein, das Menü sollte also nicht zu sehr verschachtelt sein, sodass schnell zwischen den ausführbaren Aktionen gewechselt werden kann. Auch war es zunächst schwierig zu überprüfen, ob die Implementierungen stimmen, sodass eine "probe.csv" (befindet sich auch im Repo) angelegt wurde, die deutsch-englische Vokabeln, statt deutsch-chinesische VOkabelb beinhaltete, sodass einfach überprüft werden konnte, ob wirklich die zusammengehörenden Wertepaare bei der Abfrage ausgegeben werden. Zudem war erst bei schlussendlicheer Benutzung ersichtlich, wie benutzerfreundlich das Design und wie korrekt der Code wirklich ist, dies wurde durch drei halbstündige Sessions auf Herz und Nieren getestet. 

## Fazit:
Nach vielen Korrekturen und Anpassungen hat sich eine nutzbare Webapplikation ergeben, die maßgeschneidert auf den Use Case passt: Es kann sowohl von Deutsch zu Chinesisch, als auch von Chinesisch zu Deutsch übersetzt werden. Da immer ein random Vokabelpaar aus dem Zwischenspeicher entnommen wird, kann man sich die Vokabeln nicht nach Reihenfolge merken, sodass diese wirklich gelernt werden müssen. Auch ist bisher nie ein Fehler beim Ausgeben der Übersetzung eines Wertpaares passiert. Durch die Möglichekeit, einzelne Vokabeln manuell einzugeben oder einzelne/merhere csv-Dateien anzuhängen, ist es möglich entweder nur einzelne Lektionen oder alle Lektionen und Sätze gleichzeitig abzufragen. Außerdem ist es möglich, dass Sonderzeichen wie á oder à berücksichtigt und mitangezeigt werden, da diese in der chinesischen Lautschrift *deutlich* zu der Bedeutung eines Wortes beitragen (Bsp. mā bedeutet Mutter,mǎ dagegen Pferd). Dazu ist die Applikation offline nutzbar, sobald die Seite einmal geladen wurde und die csv-Dateien eingegeben wurden. 




