import { Confederacion } from './confederacion'

export default class Seleccion {
    constructor(
        public nombre: string,
        public confederacion: Confederacion,
        public cantidadDeCopasDelMundo: number,
        public cantidadCopasConfederacion: number
    ) {}

    tieneCopasPares(): boolean {
        return this.cantidadDeCopasTotales() % 2 === 0
    }

    cantidadDeCopasTotales(): number {
        return this.cantidadCopasConfederacion + this.cantidadDeCopasDelMundo
    }

    esCampeonMundial(): boolean {
        return this.cantidadDeCopasDelMundo > 0
    }

    coincideSeleccion(parametro: string): boolean {
        return this.nombre.toLowerCase() === parametro.toLowerCase()
    }

    // Validaciones
    esValidoNombre(): boolean {
        return this.nombre.trim() !== ''
    }

    esValidaConfederacion(): boolean {
        return this.confederacion !== null
    }

    esValidaCantidadCopasDelMundo(): boolean {
        return this.cantidadDeCopasDelMundo >= 0
    }

    esValidaCantidadCopasConfederacion(): boolean {
        return this.cantidadCopasConfederacion >= 0
    }

    validarNombre(): void {
        if (!this.esValidoNombre()) {
            throw new Error('El nombre no es válido.')
        }
    }

    validarConfederacion(): void {
        if (!this.esValidaConfederacion()) {
            throw new Error('La confederación no es válida.')
        }
    }

    validarCantidadDeCopasMundo(): void {
        if (!this.esValidaCantidadCopasDelMundo()) {
            throw new Error('El número de copas del mundo no es válido.')
        }
    }

    validarCantidadDeCopasConfederacion(): void {
        if (!this.esValidaCantidadCopasConfederacion()) {
            throw new Error('El número de copas de confederaciones no es válido.')
        }
    }

    validar(): void {
        this.validarNombre()
        this.validarConfederacion()
        this.validarCantidadDeCopasMundo()
        this.validarCantidadDeCopasConfederacion()
    }
}

