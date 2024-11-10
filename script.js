let modeCaca = false; // Détermine si on est en mode Caca ou Cadeaux

// Fonction pour afficher le message de remerciement
function showThanks() {
    document.querySelector('.container').classList.add('hidden');
    document.querySelector('.thankyou').classList.remove('hidden');
}

// Fonction pour générer les confettis
function showConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    // Générer des confettis toutes les 100 ms
    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Position et couleur aléatoires
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);

        // Faire disparaître les confettis après 4 secondes
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }, 100);
}

// Fonction pour générer des étoiles
function generateStars() {
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');
    document.body.appendChild(starContainer);

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 5 + 's';
        starContainer.appendChild(star);
    }
}

// Fonction pour générer des cadeaux festifs qui tombent
function generateGifts() {
    const giftContainer = document.createElement('div');
    giftContainer.classList.add('gift-container');
    document.body.appendChild(giftContainer);

    for (let i = 0; i < 30; i++) { // Augmenter le nombre de cadeaux
        const gift = document.createElement('div');
        gift.classList.add('gift');

        // Styles variés pour chaque cadeau
        gift.style.left = Math.random() * 100 + 'vw';
        gift.style.width = Math.random() * 30 + 20 + 'px';
        gift.style.height = Math.random() * 30 + 20 + 'px';
        gift.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        gift.style.borderRadius = Math.random() > 0.5 ? '5%' : '50%';
        gift.style.animationDelay = Math.random() * 5 + 's';
        gift.style.animationDuration = Math.random() * 3 + 5 + 's'; // Durée de chute variable

        giftContainer.appendChild(gift);


    }
}

// Fonction pour générer des cacas
function generatePoops() {
    const poopContainer = document.createElement('div');
    poopContainer.classList.add('poop-container');
    document.body.appendChild(poopContainer);

    setInterval(() => {
        const poop = document.createElement('div');
        poop.classList.add('poop');
        poop.textContent = "💩"; // Le caca

        poop.style.left = Math.random() * 100 + 'vw'; // Position aléatoire
        poopContainer.appendChild(poop);
    }, 300); // Crée un nouveau caca toutes les secondes
}

// Fonction pour alterner entre les modes Cadeaux et Caca
function toggleMode() {
    modeCaca = !modeCaca;

    // Enlever les cacas ou les cadeaux existants
    document.querySelectorAll('.gift-container, .poop-container').forEach(container => {
        container.remove();
    });

    // Si on est en mode caca, afficher des cacas, sinon des cadeaux
    if (modeCaca) {
        generatePoops(); // Afficher les cacas
        document.querySelector('.button').textContent = 'Mode Cadeaux'; // Changer le texte du bouton
    } else {
        generateGifts(); // Afficher les cadeaux
        document.querySelector('.button').textContent = 'Mode Caca'; // Changer le texte du bouton
    }
}

let currentSlide = 0; // Garde la trace de l'image actuellement affichée

// Affiche la galerie de photos
function showGallery() {
    document.querySelector('.gallery').classList.remove('hidden');
    document.querySelector('.container').classList.add('hidden');
    showSlide(currentSlide);
}

// Ferme la galerie de photos
function closeGallery() {
    document.querySelector('.gallery').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
}

// Affiche l'image actuelle
function showSlide(index) {
    const slides = document.querySelectorAll('.photo-slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Passe à la photo suivante
function nextSlide() {
    const slides = document.querySelectorAll('.photo-slide');
    currentSlide = (currentSlide + 1) % slides.length; // Revenir au début si on atteint la fin
    showSlide(currentSlide);
}


// Initialiser le mode par défaut
generateGifts();  // Commencer par afficher les cadeaux
generateStars();   // Créer les étoiles
