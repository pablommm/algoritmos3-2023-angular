const currentDate = new Date() 
import Seleccion from './seleccion'
import { Posicion } from './posicion'
import { Confederacion } from './confederacion'

export default class Jugador {
    nombre: string
    apellido: string
    fechaDeNacimiento: Date
    nroDeCamiseta: number
    seleccion: Seleccion
    anioDebut: Date
    altura: number
    peso: number
    posicion: Posicion
    lider: boolean
    pais: string
    cotizacion: number

    constructor(
        nombre: string = "",
        apellido: string = "",
        fechaDeNacimiento: Date = currentDate,
        nroDeCamiseta: number = 0,
        seleccion: Seleccion = new Seleccion("Argentina", Confederacion.CONMEBOL, 3, 17),
        anioDebut: Date = currentDate,
        altura: number = 0.0,
        peso: number = 0.0,
        posicion: Posicion = Delantero,
        lider: boolean = false,
        pais: string = "",
        cotizacion: number = 0
    ) {
        this.nombre = nombre
        this.apellido = apellido
        this.fechaDeNacimiento = fechaDeNacimiento
        this.nroDeCamiseta = nroDeCamiseta
        this.seleccion = seleccion
        this.anioDebut = anioDebut
        this.altura = altura
        this.peso = peso
        this.posicion = posicion
        this.lider = lider
        this.pais = pais
        this.cotizacion = cotizacion
    }

    esJugadorConCamisetaPar(): boolean {
        return this.nroDeCamiseta % 2 === 0
    }

    aniosJugadosEnSeleccion(): number {
        // Falta Implementar
    }

    esCamisetaEntre(): boolean {
        return this.nroDeCamiseta >= 5 && this.nroDeCamiseta <= 10
    }

    esLeyenda(): boolean {
        // Falta Implementar
    }

    aniosDelJugador(): number {
        // Falta Implementar
    }

    superaCotizacionInferior(): boolean {
        return this.cotizacion > COTIZACION_INFERIOR
    }

    tieneAntiguedadPromesa(): boolean {
        // Falta Implementar
    }

    tieneEdadPromesa(): boolean {
        // Falta Implementar
    }

    esPromesaDeFutbol(): boolean {
        // Falta Implementar
    }

    tieneSeleccionConCopasPar(): boolean {
        return this.seleccion.tieneCopasPares()
    }

    perteneceAUnaSeleccionCampeona(): boolean {
        return this.seleccion.esCampeonMundial()
    }

    tieneOEsMasAltoDe(alturaMax: number): boolean {
        return this.altura >= alturaMax
    }

    valorPorPosicion(): number {
        return this.posicion.valorPorPosicion(this)
    }

    cambiarPosicion(nuevaPosicion: Posicion): void {
        this.posicion = nuevaPosicion
    }

    calcularFactor(): number {
        return this.posicion.valorPorPosicion(this)
    }

    coincideSeleccion(parametro: string): boolean {
        return this.seleccion.coincideSeleccion(parametro)
    }

    coincideParcialNombreJugador(parametro: string): boolean {
        return this.nombre.includes(parametro)
    }

    coincideParcialApellidoJugador(parametro: string): boolean {
        return this.apellido.includes(parametro)
    }

    busqueda(condicionDeBusqueda: string): boolean {
        return this.criterioDeBusqueda(condicionDeBusqueda)
    }

    criterioDeBusqueda(parametro: string): boolean {
        return (
            this.coincideSeleccion(parametro) ||
            this.coincideParcialNombreJugador(parametro) ||
            this.coincideParcialApellidoJugador(parametro)
        )
    }

    // Validaciones

    esValidoNombre(): boolean {
        return this.nombre.length > 0
    }

    validarNombre(): void {
        if (!this.esValidoNombre()) {
            throw new Error("El nombre no es válido")
        }
    }

    esValidoApellido(): boolean {
        return this.apellido.length > 0
    }

    validarApellido(): void {
        if (!this.esValidoApellido()) {
            throw new Error("El apellido no es válido")
        }
    }

    esValidoaAltura(): boolean {
        return this.altura >= 0
    }

    validarAltura(): void {
        if (!this.esValidoaAltura()) {
            throw new Error("La altura no es válida")
        }
    }

    esValidoPeso(): boolean {
        return this.peso >= 0
    }

    validarPeso(): void {
        if (!this.esValidoPeso()) {
            throw new Error("El peso no es válido")
        }
    }

    esValidoNroDeCamiseta(): boolean {
        return this.nroDeCamiseta >= 1 && this.nroDeCamiseta <= 99
    }

    validarnroDeCamiseta(): void {
        if (!this.esValidoNroDeCamiseta()) {
            throw new Error("El número de camiseta no es válido")
        }
    }

    esValidoPais(): boolean {
        return this.pais.length > 0
    }

    validarPais(): void {
        if (!this.esValidoPais()) {
            throw new Error("El nombre del país no es válido")
        }
    }

    validar(): void {
        this.validarNombre()
        this.validarApellido()
        this.validarAltura()
        this.validarPeso()
        this.validarnroDeCamiseta()
        this.validarPais()
    }
}


