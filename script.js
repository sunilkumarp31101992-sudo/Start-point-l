
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
