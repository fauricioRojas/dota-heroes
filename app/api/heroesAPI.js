import heroes from './heroes';
class HeroesAPI {
  static getAllHeroes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(heroes);
      }, 500);
    });
  }

  static getHeroe(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(heroes.filter(heroe => { return heroe.id === id }));
      }, 500);
    });
  }
}

export default HeroesAPI;
