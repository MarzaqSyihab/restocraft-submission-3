import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
    <h2 class="content-heading">Your Liked Restaurant</h2>
    <div id="restos" class="restos">

    </div>
  </div>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');

    if (restos.length === 0) {
      restosContainer.innerHTML = '<h2 class="resto-item-not-found">Tidak ada restoran untuk ditampilkan</h2>';
    } else {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }
  },
};

export default Favorite;
