
scoreEnter = 100;
init();
dice();



function dice() {
    document.querySelector('.roll-dice').addEventListener('click', function() {
        
        if(playing) {
            // Chiffre aléatoire
            var dice = Math.floor(Math.random() * 6 + 1);
            
            // Association de l'image du dé en fonction du nombre
            var diceDom = document.querySelector('.dice img');

            diceDom.style.display = 'block';

            diceDom.src = './SRC/Img/dice-' + dice + '.png';

            // Mise a jour du score 'Current'.

            if(dice !== 1) {
                // On catch le score du round.

                roundScore += dice;

                document.querySelector('#current-score-' + actualPlayer).textContent = roundScore;

                // On verifie que le dernier roll est égal
            } else {
                nextPlayer();
            }
            lastDice = dice;
        }
    });
}
    // Boutton Hold
document.querySelector('.hold').addEventListener('click', function() {
    if(playing) {
        // Score actuel -> Global
        scores[actualPlayer] += roundScore;

        // Update

        document.querySelector('.global-score-' + actualPlayer).textContent = scores[actualPlayer];
        console.log('Joueur ' + actualPlayer + scores[actualPlayer]);

        // Init des 100 point pour win
        var winningScore = scoreEnter;

    // On regarde si le joueur a gg
    if (scores[actualPlayer] >= winningScore) {
        document.querySelector('#player-' + actualPlayer + '-name').textContent = 'Gagnant !';

        // On set diplay none le dé
        document.querySelector('.dice').getElementsByClassName.display = 'none';

        // Ajout du point pour le tour.
        document.querySelector('.player-' + actualPlayer).classList.add('winner');
        // On remove la classe
        document.querySelector('.player-' + actualPlayer).classList.remove('active');
        playing = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // Changement de joueur
    // Si le joueur est égal à 0, passe a joueur suivant, sinon reste à 0.
    actualPlayer == 1 ? actualPlayer = 2 : actualPlayer = 1;
    // reset
    roundScore = 0;

    document.querySelector('.one_global p:last-child').textContent = '0';
    document.querySelector('.two_global p:last-child').textContent = '0';
    // toggle active
    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.player-2').classList.toggle('active');
}

document.querySelector('.new-game-button').addEventListener('click', init);

function init() {
    scores = [0, 0, 0];
    roundScore = 0;
    actualPlayer = 1;
    playing = true;

    // Remet a zéro tout les scores.
    document.querySelector('.global-score-1').textContent = '0';
    document.querySelector('.global-score-2').textContent = '0';
    document.getElementById('current-score-1').textContent = '0';
    document.getElementById('current-score-2').textContent = '0';

    // Changement du nom des joueurs (pour peut etre plus tard).
    document.getElementById('player-1-name').textContent = 'Joueur 1';
    document.getElementById('player-2-name').textContent = 'Joueur 2';

    // Supprime la classe Winner*
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-2').classList.remove('winner');

    // Supprime la classe active*
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-2').classList.remove('active');
    document.querySelector('.player-1').classList.add('active');
}