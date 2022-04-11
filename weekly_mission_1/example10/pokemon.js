export default class Pokemon{
    constructor(nombrePokemon)
    {
      this.nomPoke = nombrePokemon
    }
  
    sayHello()
    {
      console.log(`Mi pokemon ${this.nomPoke} te saluda!!!`)
    }
  
    sayMessage(mensaje)
    {
      console.log(`Mi pokemon ${this.nomPoke} dice: ${mensaje}`)
    }
  }
  