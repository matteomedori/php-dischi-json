# PHP Dischi JSON

Pagina web che mostra alcuni tra i più importanti album musicali della storia.
Cliccando sull' immagine dell'album vengono mostrati nome, autore e anno di realizzazione dell'album.

All'avvio della pagina viene invocata la funzione che fa una chiamata axios al server per recuperare le informazioni degli album(nome, autore, anno, url e id) che vengono salvate in una variabile.
Cliccando sull'immagine di un album viene invocata la funzione getInfo che tramite una chiamata al server salva le informazioni che voglio mostrare in pagina in una variabile infoDisco inizializzata a null.
Il server infatti quando riceve una chiamata in get ricevendo un parametro id restituisce solo il disco con quel determinato id, anziché l'elenco completo con tutti gli album.
Nella pagina le info dell'album vengono mostrare quando infoDisco è diverso da null.
