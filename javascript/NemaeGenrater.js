const adjectives = ['Crazy','Amazing','Fire','Craz','Lemon','Millol','Lactra','Cort','Marada'];
const shopName = ['Engine','Foods','Garments','Silvers','Millon','Mactro','Canvas','Code','Gold','Garden','Harvest','Beauty','Bloom','Energize'];
const Words = ['Bros','Limited','Hub','Mag','Frooza','Meta'];
const GenrateNames = (Name) => {
  const ComName = Name;
  // Get a random index from the array
  const rnd1 = Math.floor(Math.random() * adjectives.length);
  const rnd2 = Math.floor(Math.random() * shopName.length);
  // const rnd2 = ComName;
  const rnd3 = Math.floor(Math.random() * Words.length);

  // Get the random element using the random index
  const randomWord = adjectives[rnd1];
  const randomWord2 = shopName[rnd2];
  const randomWord3 = Words[rnd3];
  // Print or use the random word
  console.log(randomWord, randomWord2 , randomWord3);
}
GenrateNames('mahdi')
