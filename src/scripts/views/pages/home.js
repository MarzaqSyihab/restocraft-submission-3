import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content-heading">Explore Restaurants</h2>
      <div id="restos" class="restos">
        <p id="loading-text">Loading...</p>
      </div>
      <p id="error-text" style="color: red;"></p>
    </div>
      `;
  },

  async afterRender() {
    const restosContainer = document.querySelector('#restos');
    const loadingText = document.querySelector('#loading-text');
    const errorText = document.querySelector('#error-text');

    try {
      loadingText.style.display = 'block';
      errorText.textContent = '';
      const restos = await RestoSource.restoList();

      loadingText.style.display = 'none';

      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data restoran:', error);
      loadingText.style.display = 'none';
      errorText.textContent = 'Gagal memuat data. Silakan coba lagi nanti.';
    }
  },
};

export default Home;
