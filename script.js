const container = document.querySelector(".team-container")
const addMemberButton = document.getElementById("addMemberButton")


const members = [];


// Ciclo For per inserire nel html la struttura della card prendendo quelli presenti nel members
addMemberButton.addEventListener("click", memberdGenerator);{
  for(let i in members){

    container.innerHTML += 
    `
    <div class="team-card">
      <div class="card-image">
        <img src="${members[i].image}"/>
      </div>
      <div class="card-text">
        <h3>${members[i].name}</h3>
        <p>${members[i].role}</p>
      </div>
    </div>
    `
  }
}

//Funzione per generare le Card e li pusho nell members Array.
function memberdGenerator(){
  
  const newMember = {
    name: document.getElementById("name").value,
    role: document.getElementById("role").value,
    image: document.getElementById("image").value
  }

  members.push(newMember);
  console.log(members);
}
