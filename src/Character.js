export default class Character {
  constructor(playerData) {
    if ((playerData.name.length > 2) && (playerData.name.length < 10)) {
      this.name = playerData.name;
    } else {
      throw new Error('Неверное количество букв в имени!');
    }

    const options = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (options.some((el) => el === playerData.type)) {
      this.type = playerData.type;
    } else {
      throw new Error('Неверно выбран тип героя');
    }

    this.attack = playerData.attack;
    this.defence = playerData.defence;
  }

  getHealthAndLevel() {
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack * 0.2);
      this.defence += (this.defence * 0.2);
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего!');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Уже ранен');
    }
  }
}
