// richiamo container
let container = document.querySelector(".container");

// Creare l’array di oggetti con le informazioni fornite (nome, ruolo e foto)
const ourTeam = [
    {
        "nomeCognome" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "picture" : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nomeCognome" : "Angela Caroll",
        "role" : "Chief Editor",
        "picture" : "img/angela-caroll-chief-editor.jpg"
    },
    {
        "nomeCognome" : "Walter Gordon",
        "role" : "Office Manager",
        "picture" : "img/walter-gordon-office-manager.jpg"
    },
    {
        "nomeCognome" : "Angela Lopez",
        "role" : "Social Media Manager",
        "picture" : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nomeCognome" : "Scott Estrada",
        "role" : "Developer",
        "picture" : "img/scott-estrada-developer.jpg"
    },
    {
        "nomeCognome" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "picture" : "img/barbara-ramos-graphic-designer.jpg"
    },
]

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let i = 0; i < ourTeam.length; i++) {
    let numeroIesimo = ourTeam[i];


    for(let key in numeroIesimo) {
        console.log(key + " : " + numeroIesimo[key]);

    // Stampare le stesse informazioni su DOM sottoforma di stringhe
    // container.innerHTML += `
    // <div>${numeroIesimo[key]}</div>
    // `;
    }

    // Trasformare la stringa foto in una immagine effettiva
    container.innerHTML += `
    <div class="card">
        <div class="img_team">
            <img src="${numeroIesimo["picture"]}">
        </div>
        <div class="name">${numeroIesimo["nomeCognome"]}</div>
        <div class="role">${numeroIesimo["role"]}</div>
    </div>
    `;
}



