
function toggleDark(){
  document.body.classList.toggle('dark');
}
function filterCat(cat){
  document.querySelectorAll('.card').forEach(c=>{
    c.classList.remove('hide');
    if(cat!=='all' && !c.classList.contains(cat)) c.classList.add('hide');
  });
}
document.getElementById('search').addEventListener('input',e=>{
  const v=e.target.value.toLowerCase();
  document.querySelectorAll('.card').forEach(c=>{
    c.classList.toggle('hide', !c.innerText.toLowerCase().includes(v));
  });
});
function addCompany(){

  const name = document.getElementById('companyName').value;
  const url = document.getElementById('companyUrl').value;
  const logo = document.getElementById('companyLogo').value;
  const category = document.getElementById('companyCategory').value;

  if(!name || !url || !logo){
    alert("Please fill all fields");
    return;
  }

  const card = document.createElement('a');
  card.href = url;
  card.target = "_blank";
  card.className = `card ${category}`;

  card.innerHTML = `
    <img src="${logo}">
    <p>${name}</p>
  `;

  document.getElementById('cards').appendChild(card);

  // Clear form
  document.getElementById('companyName').value = "";
  document.getElementById('companyUrl').value = "";
  document.getElementById('companyLogo').value = "";
    }
function toggleForm(){
  document.getElementById("companyForm")
          .classList.toggle("hide");
}
