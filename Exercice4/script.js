

// Recuperons les inputs et le form
let form = document.forms[0];
const radiusInput = document.forms[0].elements.radius;
const volumeInput = document.forms[0].elements.volume;

// ajout de mon listener
form.addEventListener('submit', (event) => {
 
    event.preventDefault();

    // recuperation de radius
    const radius = radiusInput.value;

    // la formule de calcul
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // le resultat
    volumeInput.value = volume;
});