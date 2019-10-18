# Tantalum

In einer Microservice-Architektur tritt ein Service sehr häufig als Server und Client gleichzeitig auf: Er nimmt Daten an seinen Schnittstellen an und muss, um seine Aufgabe zu erfüllen, sehr oft einen anderen Service rufen.
Um die Funktionalität des eigenen Service isoliert zu testen, sollen hier verschiedene Möglichkeiten aufgezeigt werden.

Der tantalum-server ist ein Microservice, der uns unter /api/cars eine List der Autos in unserem Fahrzeugpool zurückgibt.

Im tantulum-client entwickeln wir eine Klasse, die die Summe aller gefahrener Kilometer unserer Autos berechnet.

1. Möglichkeit: Benutze das CDI-Framework um ein Mock-Objekt des Clients im App-Kontext zu haben.
