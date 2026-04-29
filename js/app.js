function renderProducts(containerId, data){
  let html = "";

  data.forEach(p=>{
    html += `
    <div class="card ${p.tag}">
      <h4>${p.name}</h4>
      <p class="price">${p.price}</p>
      <p>${p.tag}</p>

      <a href="https://www.amazon.in/s?k=${p.keyword}&tag=gadgetsph019-21"
         target="_blank"
         class="btn-small">
         Check Price →
      </a>
    </div>
    `;
  });

  document.getElementById(containerId).innerHTML = html;
}
