import { apiConection } from "./apiConection.js";
import buildCard from "./showVideos.js";

const searchButton = document.querySelector('[data-search-button]');
const searchInput = document.querySelector('[data-search]');

async function searchVideo(event, dataSearch) {
    event.preventDefault();
    const search = await apiConection.searchVideo(dataSearch);
    const list = document.querySelector('[data-list]');

    list.innerHTML = '';

    search.forEach(element => list.appendChild(
        buildCard(element.titulo, element.descricao, element.url, element.imagem
    )));

    if(search.length === 0) {
        list.className = "videos__container--error"
        list.innerHTML = `<h2 class="mensagem__error">Não existem vídeos com este termo</h2>`;
    }
}

searchButton.addEventListener('click', event => searchVideo(event, searchInput.value));
searchInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        searchVideo(event, searchInput.value);
    }
});