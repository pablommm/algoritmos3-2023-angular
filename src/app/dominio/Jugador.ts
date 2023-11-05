
export type JugadorJSON = {
    nombre: string
    nroDeCamiseta: number

}
  
  export class JugadorDom {
    constructor(
      /* public id: number = 0, */
      public nombre: string = '',
      public nroDeCamiseta: number = 0,

    ) {}
  
    static fromJson(jugador: object): JugadorDom {
          console.log("pase por el dominio jugador")
        return Object.assign(new JugadorDom(), jugador)
      }
      
    }
  