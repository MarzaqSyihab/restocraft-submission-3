// eslint-disable-next-line no-undef
Feature('Unliking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/home');
});

// eslint-disable-next-line no-undef
Scenario('unliking a restaurant', async ({ I }) => {
  I.seeElement('.resto-item');
  // eslint-disable-next-line no-undef
  const likedRestoName = await I.grabTextFrom(
    // eslint-disable-next-line no-undef
    locate('.resto-item').first().find('.resto-name a'),
  );

  // liking the restaurant
  I.click('.resto-item a'); // Mengklik restoran untuk melihat detailnya
  I.seeElement('#likeButton');
  I.click('#likeButton');
  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');
  // eslint-disable-next-line no-undef
  I.seeElement(locate('.resto-item').withText(likedRestoName));

  // Unliking the restaurant
  I.click('.resto-item a'); // Mengklik restoran untuk melihat detailnya
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');

  // Pastikan restoran tersebut tidak lagi ada dalam daftar kesukaan
  // eslint-disable-next-line no-undef
  I.dontSeeElement(locate('.resto-item').withText(likedRestoName));
});
