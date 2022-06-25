let personagem = [
    {   id: 1,

        main: {
            name: "Akoruu",
            breed_type: "hibrido",   //raça
            breed_first: "vampiro",    //raça principal
            breed_last: "Lobisomen",     //raça secundária
            level: "20",
            img: "https://i1.sndcdn.com/avatars-000570604419-uz024k-t240x240.jpg"
        },

        life: {
            HP: 30,
            sanity: 30
        },
        
        power: {
            force: 50,
            force_modifier: 5,

            resistance: 50,
            resistance_modifier: 5,

            dexterity: 50,
            dexterity_modifier: 5,

            presence: 50,
            presence_modifier: 5,

            constitution: 50,
            constitution_modifier: 5
        }
    },

    {   id: 2,

        main: {
            name: "Uhane",
            breed_type: "Monoraça",   //raça
            breed_first: "Dragão",    //raça principal
            breed_last: "",     //raça secundária
            level: "20",
            img: "https://i1.sndcdn.com/avatars-000570604419-uz024k-t240x240.jpg"
        },

        life: {
            HP: 30,
            sanity: 30
        },
        
        power: {
            force: 50,
            force_modifier: 5,

            resistance: 50,
            resistance_modifier: 5,

            dexterity: 50,
            dexterity_modifier: 5,

            presence: 50,
            presence_modifier: 5,

            constitution: 50,
            constitution_modifier: 5
        }
    }
];
let idDoPersonagem = 0;

// adicionarPersonagens();
mostrarTituloPagina(personagem, idDoPersonagem);

function mostrarTituloPagina(personagem, i) {
    const personEscolhido = personagem;
    const titlePage = document.querySelector(".title-page");
    titlePage.innerHTML = '';
    titlePage.innerHTML += `${personEscolhido[i].main.name}`
}

function adicionarPersonagens() {
    const principalNovoNome = '';
    const mainBreedType = '';
    const mainBreedFirst = '';
    const mainBreedLast = '';
    const mainLevel = '';
    const mainImg = '';
    
    const lifeHP = '';
    const lifeSanity = '';

    const powerForce = '';
    const powerMForce = '';
    const powerResistence = '';
    const powerMResistence = '';
    const powerDexterity = '';
    const powerMDexterity = '';
    const powerPresence = '';
    const powerMPresence = '';
    const powerConstituition = '';
    const powerMConstituition = '';

    personagem.push({
        main: {
            name: `${principalNovoNome}`,
            breed_type: `${mainBreedType}`,   //raça
            breed_first: `${mainBreedFirst}`,    //raça principal
            breed_last: `${mainBreedLast}`,     //raça secundária
            level: `${mainLevel}`,
            img: `${mainImg}`
        },

        life: {
            HP: lifeHP,
            sanity: lifeSanity
        },
        
        power: {
            force: powerForce,
            force_modifier: powerMForce,

            resistance: powerResistence,
            resistance_modifier: powerMResistence,

            dexterity: powerDexterity,
            dexterity_modifier: powerMDexterity,

            presence: powerPresence,
            presence_modifier: powerMPresence,

            constitution: powerConstituition,
            constitution_modifier: powerMConstituition
        }
    });
}

function mostrarTudo() {
    const mostrarTudo = `
    <div class="main">
        <p>nome: ${personagem[0].main.name}</p>
        <p>Tipo de Raça: ${personagem[0].main.breed_type}</p>
        <p>Raça Principal: ${personagem[0].main.breed_first}</p>
        <p>Raça Secundária: ${personagem[0].main.breed_last}</p>
        <p>Nível: ${personagem[0].main.level}</p>
        <p>img: ${personagem[0].main.img}</p>
    </div>
    `

    let fichaDaPersonagem = document.querySelector(".fichaDaPersonagem");
    fichaDaPersonagem.innerHTML = "";
    fichaDaPersonagem.innerHTML += mostrarTudo;
}