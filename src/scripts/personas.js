// LISTA DE 15 PERSONAS EXEMPLO
const personas = [
    { nome: "Lucas Andrade", desc: "Estudante de TI, curioso e detalhista." },
    { nome: "Marina Lopes", desc: "Designer criativa e organizada." },
    { nome: "Roberto Silva", desc: "Empresário buscando soluções eficientes." },
    { nome: "Julia Martins", desc: "Professora que ama tecnologia." },
    { nome: "Carlos Ferreira", desc: "Analista de dados, focado em performance." },
    { nome: "Laura Rocha", desc: "Empreendedora digital, focada em marketing." },
    { nome: "André Vasconcelos", desc: "Veterano de UX, observador e crítico." },
    { nome: "Patrícia Gomes", desc: "Estudante de psicologia, muito comunicativa." },
    { nome: "Eduardo Pinto", desc: "Dev full-stack, objetivo e prático." },
    { nome: "Amanda Sousa", desc: "Especialista em vendas e impacto social." },
    { nome: "Renato Dias", desc: "Engenheiro focado em otimização." },
    { nome: "Beatriz Costa", desc: "Gestora de projetos, metódica e calma." },
    { nome: "Fernando Prado", desc: "Criador de conteúdo, espontâneo e divertido." },
    { nome: "Isabela Almeida", desc: "Ilustradora apaixonada por cores." },
    { nome: "Ricardo Mendes", desc: "Consultor financeiro, analítico e exigente." }
];

// RENDERIZA O GRID
function carregarPersonas() {
    const grid = document.getElementById("grid-personas");

    // primeiro card: criar persona
    grid.innerHTML = `
        <div class="card criar">
            <img src="src/components/images/add-persona.png" alt="add icon" class="plus">
            <p>Criar Nova Persona</p>
        </div>
    `;

    // adiciona todos os cards
    personas.forEach((p, index) => { 
        
        // MUDANÇA 2: Adicione o onclick="abrirPersona(${index})" na div
        const card = `
            <div class="card" onclick="abrirPersona(${index})" style="cursor: pointer;">
                <div class="circle"></div>
                <h3>${p.nome}</h3>
                <p class="sub">${p.desc}</p>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// inicializa
carregarPersonas();


function abrirPersona(index) {
    // Pega os dados da persona 
    const persona = personas[index];
    
    // Salva no navegador para a próxima tela ler
    localStorage.setItem('personaAtiva', JSON.stringify(persona));
    
    // Redireciona
    window.location.href = 'infos-persona.html';
}
