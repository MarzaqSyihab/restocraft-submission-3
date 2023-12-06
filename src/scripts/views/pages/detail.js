import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestoIDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div style="padding-top: 100px; text-align:center;" id="loading-text">Loading...</div>
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
      <div id="review-form">
        <h3>Beri Review</h3>
        <input type="text" id="review-name" placeholder="Nama">
        <textarea id="review-content" placeholder="Review Anda"></textarea>
        <button id="submit-review">Kirim Review</button>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoContainer = document.querySelector('#resto');
    const loadingText = document.querySelector('#loading-text');

    try {
      loadingText.style.display = 'block';

      const resto = await RestoSource.restoDetail(url.id);
      console.log(url.id);
      restoContainer.innerHTML = createRestoIDetailTemplate(resto);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto: {
          id: resto.id,
          name: resto.name,
          pictureId: resto.pictureId,
          address: resto.address,
          city: resto.city,
          rating: resto.rating,
          description: resto.description,
        },
      });

      loadingText.style.display = 'none';

      // Inisialisasi penanganan submit review
      this._initReviewForm(url.id);
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data restoran:', error);
      loadingText.textContent = 'Gagal memuat data. Silakan coba lagi nanti.';
    }
  },

  _initReviewForm(restoId) {
    const submitButton = document.getElementById('submit-review');
    const reviewNameInput = document.getElementById('review-name');
    const reviewContentInput = document.getElementById('review-content');

    submitButton.addEventListener('click', async () => {
      const reviewData = {
        id: restoId,
        name: reviewNameInput.value,
        review: reviewContentInput.value,
      };

      try {
        const response = await RestoSource.addReview(reviewData);

        // Tampilkan hasil review yang baru ditambahkan
        const customerReviews = response.customerReviews
          .map(
            (review) => `
          <li>
            <h4>${review.name}</h4>
            <p>${review.review}</p>
            <p>${review.date}</p>
          </li>
        `,
          )
          .join('');

        const reviewList = document.querySelector('#resto .resto-info ul');
        reviewList.innerHTML = customerReviews;

        // Reset formulir review
        reviewNameInput.value = '';
        reviewContentInput.value = '';
      } catch (error) {
        console.error('Terjadi kesalahan saat menambahkan review:', error);
        // eslint-disable-next-line no-alert
        alert('Gagal menambahkan review. Silakan coba lagi.');
      }
    });
  },
};

export default Detail;
