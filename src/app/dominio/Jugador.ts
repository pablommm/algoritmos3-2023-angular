
export type JugadorJSON = {
    id :number
    nombre: string
    camiseta: number

}
  
  export class Jugador {
    constructor(
      public id: number = 0,
      public nombre: string = '',
      public camiseta: string = '',

    ) {}
  
        static fromJson(jugador: object): Jugador {
            return Object.assign(new Jugador(), jugador)
          }
      
    }
  