import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

// eslint-disable-next-line no-undef
describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 'rqdv5juczeskfw1e867' });
  });

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto('rqdv5juczeskfw1e867');
  });

  // eslint-disable-next-line no-undef
  it('should display unlike widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 'rqdv5juczeskfw1e867',
      },
    });

    // eslint-disable-next-line no-undef
    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not display like widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 'rqdv5juczeskfw1e867',
      },
    });

    // eslint-disable-next-line no-undef
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to remove like restaurant from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 'rqdv5juczeskfw1e867',
      },
    });
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 'rqdv5juczeskfw1e867',
      },
    });
    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestoIdb.deleteResto('rqdv5juczeskfw1e867');
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
