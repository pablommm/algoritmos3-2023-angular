
export type JugadorJSON = {
    nombre: string
    camiseta: number

}
  
  export class Jugador {
    constructor(
      /* public id: number = 0, */
      public nombre: string = '',
      public camiseta: string = '',

    ) {}
  
        static fromJson(jugador: JugadorJSON): Jugador {
            return Object.assign(new Jugador(), jugador)
          }
      
    }
  