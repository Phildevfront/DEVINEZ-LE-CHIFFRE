//Déclaration d'une variable et d'une fonction

let nombreSecret; /* variable */
let count;

function getRandomArbitrary(min, max) { /*fonction*/
return Math.round(Math.random() * (max - min)  + min);
}
// Debut du jeu (départ boucle)

while (true) {
        nombreSecret = getRandomArbitrary(0, 10);
        count = 0;

        let nombreUtilisateur = prompt('Devinez le nombre entre 0 et 10');
        nombreUtilisateur = Number(nombreUtilisateur);


        while (true) {
            
            count = ++count;
            
            if (nombreSecret > nombreUtilisateur) {
                nombreUtilisateur = prompt(`C'est plus !`);
            }
            else if (nombreSecret < nombreUtilisateur) {
                nombreUtilisateur = prompt(`C'est moins !`);
            }

            if (nombreUtilisateur === null) { break; }

            nombreUtilisateur = Number(nombreUtilisateur);


            if (nombreSecret === nombreUtilisateur) {
               // alert(`Gagné ! Le nombre était bien : ` + nombreSecret +  ` 
               // Vous avez trouvez en ` + count + ` coups`);

                alert(`Gagné ! Le nombre était bien : ${nombreSecret}

                Vous avez trouvez en ${count} coups !`);
                break;
            }

        } // fin du while des tentatives

       
        let rejouer = prompt ('voulez-vous rejouer une partie');
        if (rejouer === 'non'){
            break;
        }
        // retour au début du jeu (départ boucle)

} // fin du while de partie
