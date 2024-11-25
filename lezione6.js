/*
React e Virtual DOM
Cos'è React?
React è una libreria JavaScript per costruire interfacce utente.

Componenti: In React, l'interfaccia è divisa in piccoli componenti riutilizzabili, ognuno dei quali gestisce la propria logica e stato.
Virtual DOM (VDOM): React utilizza una copia virtuale del DOM reale per ottimizzare gli aggiornamenti dell'interfaccia.
Perché il Virtual DOM è importante?
Efficienza: Il VDOM riduce il numero di interazioni dirette con il DOM reale.
Invece di aggiornare ogni elemento manualmente, React costruisce una versione virtuale del DOM, confronta le differenze con lo stato precedente (diffing) e aggiorna solo gli elementi modificati.
Migliori performance: Minimizza i ricalcoli e riduce il lavoro del browser.
Declaratività: React consente agli sviluppatori di dichiarare cosa visualizzare, gestendo autonomamente il come.
*/