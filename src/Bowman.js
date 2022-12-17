import Character from './Character';

export default class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    super.getHealthAndLevel();
    this.attack = 25;
    this.defence = 25;
  }
}
