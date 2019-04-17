/**
 * Two fighters will enter a function and will take turns attacking until one fighter looses all of their health. The fighter with health renames is declared the winner
 *
 * @param   { Object } fighter1      First fighter to fight
 * @param   { Object } fighter2      Second fighter to fight
 * @param   { String } firstAttacker Name of the first righter to attachk
 * @returns { String }               Name of fighter whose health is above 0
 */

function declareWinner(fighter1, fighter2, firstAttacker) {
  while(fighter1.health > 0 || fighter2.health > 0) {

    if(fighter1.toString() === firstAttacker) {
      fighter2.health -= fighter1.damagePerAttack;
    } 
    else {
      fighter1.health -= fighter2.damagePerAttack;
    }
    
    if(fighter1.health <= 0) {
      return fighter2.toString();
    }
    else if(fighter2.health <= 0) {
      return fighter1.toString();
    }

    if(fighter1.toString() !== firstAttacker) {
      fighter2.health -= fighter1.damagePerAttack;
    }
    else {
      fighter1.health -= fighter2.damagePerAttack;  
    }

    if(fighter1.health <= 0) {
      return fighter2.toString();
    }
    else if(fighter2.health <= 0) {
      return fighter1.toString();
    }
  }
 
}

function declareWinner2(fighter1, fighter2, firstAttacker) {
  while(fighter1.health > 0 || fighter2.health > 0) {

    if(fighter1.toString() === firstAttacker) fighter2.health -= fighter1.damagePerAttack;
    else fighter1.health -= fighter2.damagePerAttack;
    
    if(fighter1.health <= 0) return fighter2.toString();
    else if(fighter2.health <= 0) return fighter1.toString();

    if(fighter1.toString() !== firstAttacker) fighter2.health -= fighter1.damagePerAttack;
    else fighter1.health -= fighter2.damagePerAttack; 

    if(fighter1.health <= 0) return fighter2.toString();
    else if(fighter2.health <= 0) return fighter1.toString();
  }
 
}

function declareWinner3(fighter1, fighter2, firstAttacker) {
  /** 
   * Find out how many rounds the player can survive
   * 
   * @param   { Object } defender The player whose health will be subtracted from
   * @param   { Object } fighter  The player whose attack points will be used to subtract
   * @returns { Number }          Number of times the health gets subtracted from before reaching 0 or lower
  */
  let roundSurvived = function(defender, fighter) {
    let rounds = 0;
    while(defender.health > 0) {
      rounds+=1;
      defender.health -= fighter.damagePerAttack;
    }

    return rounds;
  }

  let player1 = roundSurvived(fighter1, fighter2);
  let player2 = roundSurvived(fighter2, fighter1);

  if(player1 > player2 ) {
    return fighter1.toString();
  } 
  else if (player2 > player1) {
    return fighter2.toString();
  }
  else {
    return firstAttacker;
  }
}

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

console.log(declareWinner3(new Fighter("Lew", 10, 2), new Fighter("Harry", 5,4), "Lew"), "Lew");
console.log(declareWinner3(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
console.log(declareWinner3(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
console.log(declareWinner3(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
console.log(declareWinner3(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
// console.log(declareWinner3(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")