$("#btn-buscar-filme").on("click", async (e) => {
  e.preventDefault();
  console.log($("#input-buscar-filme").val());
  if ($("#input-buscar-filme").val() !== undefined && $("#input-buscar-filme").val() !== "") {
    $("#lista-filmes").empty();
    iniciaExecucao($("#input-buscar-filme").val());
  } else {
    alert("Digite um filme para buscar");
  }
});

const iniciaExecucao = async (filme) => {
  const url = `https://www.omdbapi.com/?apikey=74a491af&s=${filme}`;
  const response = await fetch(url);
  let data;
  if (response) {
    data = await response.json();
  }
  console.log(`entrou aqui`);
  const arrayData = data.Search;
  for (let index = 0; index < arrayData.length; index++) {
    console.log(`data for[${index}]`, arrayData[index]);
    cards(arrayData[index], index);
  }
};

const cards = (objFilme, index) => {
  const { Title, Year, imdbID, Type, Poster } = objFilme;
  const card = `
        <div class="card" id="card-${index}">
            <img src=${Poster} class="card-img-top" alt=${imdbID}>
            <div class="card-body">
                <div>
                    <h2 class="card-title">${Title}</h2>
                </div>
                <div class="card-info">
                    <h5 class="card-type">${Type}</h5>
                    <h5 class="card-year">${Year}</h5>
                    <h5 class="card-imdbID">${imdbID}</h5>
                </div>
                <button class="btn-detalhes" id="btn-${index}">Detalhes</button>
            </div>
        </div>
    `;
  $(`btn-${index}`).data("objFilme", objFilme);
  $("#lista-filmes").append(card);
};

$(".btn-detalhes").on("click", () => {
  console.log("clicou no botão");
});
console.log("A");
