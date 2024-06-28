document.getElementById('gameForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const gameName = document.getElementById('gameName').value.trim();
  await findGames(gameName);
});

const apiKey = '0670e5d6973e40a380d811f432d0ce68';
const platformId = 7;

const findGames = async (gameName) => {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?platforms=${platformId}&search=${gameName}&key=${apiKey}`);
    const data = await response.json();
    let gamesHTML = '';
    data.results.forEach(element => {
      gamesHTML += `
      <div class="card bg-gray-800 text-white p-4 rounded">
        <img src="${element.background_image}" class="card-img-top mb-4 rounded" alt="${element.name}">
        <div class="card-body">
          <h5 class="card-title text-2xl font-bold mb-2">${element.name}</h5>
          <p class="card-text mb-2">Release Date: ${element.released}</p>
          <p class="card-text">Rating: ${element.rating}</p>
        </div>
      </div>
      `;
    });
    document.getElementById('contenedor').innerHTML = gamesHTML;
  } catch (error) {
    console.log('Error:', error);
  }
}
