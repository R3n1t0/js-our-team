const container = document.querySelector(".team-container")
const addMemberButton = document.getElementById("addMemberButton")


const memberCards = [
  /* {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg"
  }, */
  
]

// Ciclo For per inserire nel html la struttura della card prendendo quelli presenti nel memberCards
for(let i in memberCards){

  container.innerHTML += 
  `
  <div class="team-card">
    <div class="card-image">
      <img src="img/wayne-barnett-founder-ceo.jpg"/>
    </div>
    <div class="card-text">
      <h3></h3>
      <p>Founder & CEO</p>
    </div>
  </div>
  `
}

//Funzione per ricevere le info dagli Input.
function getInputValue() {
  let nameValue = document.getElementById("name").value;
  let roleValue = document.getElementById("role").value;
  let imageValue = document.getElementById("image").value;

  memberCards.push({
    name: nameValue,
    role: roleValue,
    image: imageValue
  })
}

