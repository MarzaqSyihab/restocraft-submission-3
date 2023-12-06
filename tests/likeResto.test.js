import * as TestFactories from './helper/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    addLikeButtonContainer();
  });

  // eslint-disable-next-line no-undef
  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: 'rqdv5juczeskfw1e867',
    });

    // eslint-disable-next-line no-undef
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: 'rqdv5juczeskfw1e867',
    });

    // eslint-disable-next-line no-undef
    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: 'rqdv5juczeskfw1e867',
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan restoran berhasil disukai
    const resto = await FavoriteRestoIdb.getResto('rqdv5juczeskfw1e867');
    // eslint-disable-next-line no-undef
    expect(resto).toEqual({ id: 'rqdv5juczeskfw1e867' });

    await FavoriteRestoIdb.deleteResto('rqdv5juczeskfw1e867');
  });

  // eslint-disable-next-line no-undef
  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({
      id: 'rqdv5juczeskfw1e867',
    });
    // Tambahkan restoran dengan ID 'rqdv5juczeskfw1e867' ke daftar restoran yang disukai
    await FavoriteRestoIdb.putResto({ id: 'rqdv5juczeskfw1e867' });
    // Simulasikan pengguna menekan tombol suka resto
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada restoran ganda
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([
      { id: 'rqdv5juczeskfw1e867' },
    ]);
    await FavoriteRestoIdb.deleteResto('rqdv5juczeskfw1e867');
  });

  // eslint-disable-next-line no-undef
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
