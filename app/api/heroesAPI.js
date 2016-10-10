import heroes from './heroes';
class HeroesAPI {
  static getAllHeroes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(heroes);
      }, 500);
    });

  }
}

export default HeroesAPI;
