const thisIsThePlayer = (callback) => {
  const player = { name: "Spartacus", life: 100, strength: 100, agility: 100 };
  callback(player);
};

const sayHello = (thisIsThePlayer) => {
  console.log("Hello, " + (thisIsThePlayer.name));
};




thisIsThePlayer(sayHello);
