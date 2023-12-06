import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item-header">
      <img class="resto-item-header-poster lazyload" crossorigin="anonymous" alt="${
  resto.name
}" 
 src="${
  resto.pictureId
    ? CONFIG.BASE_IMAGE_URL + resto.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
      <div class="resto-item-header-rating">
        <p>⭐️<span class="resto-item-header-rating-score">${
  resto.rating
}</span></p>
      </div>
    </div>
    <div class="resto-item-content">
      <h3 class="resto-name"><a href="/#/detail/${resto.id}">${
  resto.name
}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createRestoIDetailTemplate = (resto) => `
<h2 class="resto-name">${resto.name}</h2>
<div class="resto-info">
    <div class="img">
        <img class="resto-poster" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}" />
    </div>
    <div class="information">
        <h3>Information</h3>
        <h4>City</h4>
        <p class="text-primary">${resto.city}</p>
        <h4>Rating</h4>
        <p class="text-primary">⭐️ ${resto.rating}</p>
        <h4>Address</h4>
        <p class="text-primary"> ${resto.address}</p>
    </div>
</div>

<div class="resto-meal">
    <div class="resto-food">
        <h4>Menu Makanan</h4>
        <p>${resto.menus.foods
    .map((foods) => `<li class="text-primary">${foods.name}</li>`)
    .join('')}</p>
    </div>
    <div class="resto-drink">
        <h4>Menu Minumanan</h4>
        <p>${resto.menus.drinks
    .map((drinks) => `<li class="text-primary">${drinks.name}</li>`)
    .join('')}</p>
    </div>
</div>

<div class="resto-description">
  <h3>Overview</h3>
  <p class="text-primary">${resto.description}</p>
</div>

<div class="customer-reviews">
  <h3>Customer Reviews</h3>
  <ul>
    ${resto.customerReviews
    .map(
      (review) => `
      <li>
        <h4>${review.name}</h4>
        <p>${review.review}</p>
        <p class="date">${review.date}</p>
      </li>
    `,
    )
    .join('')}
  </ul>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoIDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
