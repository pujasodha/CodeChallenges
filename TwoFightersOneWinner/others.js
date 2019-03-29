function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

//=========================================

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

//=========================================

function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  
  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}


//=========================================

function declareWinner(fighter1, fighter2, firstAttacker) {
  if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name)
  if (fighter1.health <= 0) return fighter2.name
  if (fighter2.health <= 0) return fighter1.name

  return declareWinner(new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack), fighter1, fighter2.name)
}

//=========================================

function declareWinner(fighter1, fighter2, firstAttacker) {
  var attacker = (fighter1.name === firstAttacker)
    ? fighter1
    : fighter2;
  
  function noOneWins(){
    return ((fighter1.health > 0) && (fighter2.health > 0));
  }
  
  function getNextAttacker(attacker){
    return (attacker === fighter1) ? fighter2 : fighter1;
  }
  
  function getDefender(attacker){
    return getNextAttacker(attacker);
  }
  
  function killRound(attacker){
    var defender = getDefender(attacker);
    defender.health -= attacker.damagePerAttack;
  }
  
  function getWinner(){
    return (fighter1.health > 0) 
      ? fighter1.name 
      : fighter2.name;
  }
  
  while(noOneWins()) {
    killRound(attacker);
    attacker=getNextAttacker(attacker);
  }
  
  return getWinner();
}

//=========================================

Object.defineProperties(Fighter.prototype, {
  isDead: {get: function() { return this.health <= 0; } },
  attack: {value: function(other) { other.health -= this.damagePerAttack; } }
});

function declareWinner(fighter1, fighter2, firstAttacker) {
  var [a,b] = (fighter1.name === firstAttacker) ? [fighter1, fighter2] : [fighter2, fighter1];
  while(true)
  {
    a.attack(b);
    if (b.isDead) return a.name;
    b.attack(a);
    if (a.isDead) return b.name;
  }
}

//=========================================

function declareWinner(fighter1, fighter2, firstAttacker) {
  var first = firstAttacker === fighter1.name ? fighter1 : fighter2,
      second = first === fighter1 ? fighter2 : fighter1,
      fight = true;
  while(first.health > 0 && second.health > 0) {
    if(fight) {
      second.health -= first.damagePerAttack;
      fight = false;
    }
    else {
      first.health -= second.damagePerAttack;
      fight = true;
    }
  }
  return first.health > 0 ? first.name : second.name;
}


//=========================================

function declareWinner(fighter1, fighter2, firstAttacker) {
  var res = Math.ceil(fighter1.health / fighter2.damagePerAttack) - 
            Math.ceil(fighter2.health / fighter1.damagePerAttack);
  return res > 0 ? fighter1.name : (res < 0? fighter2.name : firstAttacker);
}


//=========================================

const declareWinner = (f1, f2, fa) => {
  
  if (f2.name === fa) [f1, f2] = [f2, f1];

  while (f1.health > 0) {
    f2.health -= f1.damagePerAttack;
    [f1, f2] = [f2, f1];
  }
  
  return f2.name;
};

//=========================================

const declareWinner = (f1, f2, fa) => (f1.health-=(f2.name===fa?f2.damagePerAttack:0)) > 0 && (f2.health-=(f1.name===fa?f1.damagePerAttack:0)) > 0 ? declareWinner(f1,f2,f1.name===fa?f2.name:f1.name) : f1.health <= 0 ? f2.name : f1.name;



//=========================================

const declareWinner = (f1, f2, first) => {
  var n1 = Math.ceil(f2.health/f1.damagePerAttack),
  n2 = Math.ceil(f1.health/f2.damagePerAttack);
  return n1 === n2 ? first : n1 < n2 ? f1.name : f2.name;
};


//=========================================

const declareWinner = (f1, f2, a) => {
  let turn = f1.name === a;
  while (f1.health * f2.health > 0) {
    (turn ? f2 : f1).health -= (turn ? f1 : f2).damagePerAttack;
    turn = !turn;
  }
  return (f1.health > 0 ? f1 : f2).name;
}

//=========================================

function declareWinner(fighter1, fighter2, firstAttacker) {

  let fight = (f1, f2) => (f2.health -= f1.damagePerAttack, f2.health <= 0 ? f1.name : fight(f2, f1));

  return fighter2.name === firstAttacker 
       ? fight(fighter2, fighter1)
       : fight(fighter1, fighter2);
  
}


//=========================================

function declareWinner(fighter1, fighter2, firstAttacker) {
  [attacker,opponent] =  String(fighter1) == firstAttacker ? [fighter1,fighter2] : [fighter2,fighter1]
  if(attacker.health <= 0){
    return(opponent.name);
  }else{
     opponent.health -= attacker.damagePerAttack;
     return(declareWinner(fighter1, fighter2,opponent.name))
  }
}

//=========================================