const members = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

const container = document.querySelector(".team-container")

const addMemberButton = document.getElementById("addMemberButton")
addMemberButton.addEventListener("click", memberGenerator);

inserTeam();

//Funzione per inserire tutto il Team nella struttura html
function inserTeam(){
  
  container.innerHTML= "";

  for(let member of members){
    insertMember(member);
  }
}

// Funzione per inserire un nuovo membro nella struttura html
function insertMember(member){

  let output = container.innerHTML;

  const {name, role, image} = member;

  output += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="img/${image}"
        alt="${name}"
      />
    </div>
    <div class="card-text">
      <h3>${name}</h3>
      <p>${role}</p>
    </div>
  </div>
  `;
  
  container.innerHTML = output;
}

//Funzione per creare i nuovi membri e aggiungerli al Team
function memberGenerator(){
  
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const image = document.getElementById("image").value;

  const newMember = {
    name,
    role,
    image,
  }
  
  insertMember(newMember);
  members.push(newMember);
  
  reset();
}

// Funzione per ressettare
function reset(){
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('image').value = '';
}