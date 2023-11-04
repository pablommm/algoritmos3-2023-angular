
export type JugadorJSON = {
    //id :number
    nombre: string
    camiseta: number

}
  
  export class Jugador {
    constructor(
      public localidadesBuenosAires: string = '',
      public localidadesMendoza: string = '',
      public localidadesCordoba: string = '',

    ) {}
  
        static fromJson(jugador: object): Jugador {
            return Object.assign(new Jugador(), jugador)
          }
      
    }
  