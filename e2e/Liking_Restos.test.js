const assert = require('assert');
// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restos');
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item-not-found');
});

// eslint-disable-next-line no-undef
Scenario('liking a restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item-not-found');
  I.amOnPage('/#/home');

  // Memastikan ada restoran yang dapat disukai
  I.seeElement('.resto-item');

  // Mengambil nama restoran pertama
  const firstRestoName = await I.grabTextFrom(
    // eslint-disable-next-line no-undef
    locate('.resto-item').first().find('.resto-name a'),
  );

  // Mengklik restoran untuk melihat detailnya
  // eslint-disable-next-line no-undef
  I.click(locate('.resto-name a').first());

  // Memastikan halaman rincian restoran dimuat
  I.seeElement('#likeButton');

  // Menyukai restoran
  I.click('#likeButton');

  // Kembali ke halaman utama
  I.amOnPage('/');

  // Menuju halaman favorit
  I.click('Favorite');

  // Memastikan restoran yang disukai ada di daftar favorit
  I.seeElement('.resto-item');
  // eslint-disable-next-line no-undef
  const likedRestoName = await I.grabTextFrom(
    // eslint-disable-next-line no-undef
    locate('.resto-item').first().find('.resto-name a'),
  );

  assert.strictEqual(
    firstRestoName,
    likedRestoName,
    'firstRestoName and likedRestoName must have the same value',
  );
});
