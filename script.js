// Fonction pour générer une couleur aléatoire
function genererCouleurAleatoire() {
    const caracteresHexa = '0123456789ABCDEF';
    let couleur = '#';
    for (let i = 0; i < 6; i++) {
        couleur += caracteresHexa[Math.floor(Math.random() * 16)];
    }
    return couleur;
}

// Fonction pour changer la couleur du titre
function changerCouleurTitre() {
    const titre = document.getElementById('titre'); // Assurez-vous que l'élément titre a l'ID approprié
    titre.style.color = genererCouleurAleatoire();
}

// Événement de clic sur le bouton
document.getElementById('changerCouleurBtn').addEventListener('click', changerCouleurTitre);