function beerSong(){

  var bottlesOfBeer = 99;

  while (bottlesOfBeer>0){
    if (bottlesOfBeer == 1){
      console.log(bottlesOfBeer+" bottle of Beer on the wall, take it and now there's none left!");
    }else{
      console.log(bottlesOfBeer+" bottles of Beer on the wall, take one and now there's "+(bottlesOfBeer-1)+" left!");
    }
    bottlesOfBeer--
  }
}
