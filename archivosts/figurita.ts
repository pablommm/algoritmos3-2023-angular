import Jugador from './jugador';

class Figurita {
    numero: number;
    nivelDeImpresion: NivelDeImpresion;
    onFire: boolean;
    jugador: Jugador;

    constructor(numero: number, nivelDeImpresion: NivelDeImpresion, onFire: boolean, jugador: Jugador) {
        this.numero = numero;
        this.nivelDeImpresion = nivelDeImpresion;
        this.onFire = onFire;
        this.jugador = jugador;
    }

    esPar(): boolean {
        return this.numero % 2 === 0;
    }

    factorOnFire(): number {
        return this.onFire ? 1.2 : 1.0;
    }

    factorParidad(): number {
        return this.esPar() ? 1.1 : 1.0;
    }

    factorNivelImpresionBaja(): number {
        return this.nivelDeImpresionBaja() ? 0.85 : 1.0;
    }

    valorPorOnFire(): number {
        return 100 * this.factorOnFire(); // Assuming COSTO_FIGURITA is 100
    }

    valorPorParidad(): number {
        return this.factorParidad() * this.valorPorOnFire();
    }

    valoracionBase(): number {
        return this.valorPorParidad() * this.factorNivelImpresionBaja();
    }

    esNivelDeImpresion(nivelDeImpresion: NivelDeImpresion): boolean {
        return nivelDeImpresion === this.nivelDeImpresion;
    }

    nivelDeImpresionAlta(): boolean {
        return this.esNivelDeImpresion(NivelDeImpresion.ALTA);
    }

    nivelDeImpresionBaja(): boolean {
        return this.esNivelDeImpresion(NivelDeImpresion.BAJA);
    }

    valoracionFigurita(): number {
        return this.valoracionBase() + this.jugador.valorPorPosicion();
    }

    esJugadorLeyenda(): boolean {
        return this.jugador.esLeyenda();
    }

    esJugadorPromesa(): boolean {
        return this.jugador.esPromesaDeFutbol();
    }

    esSeleccionConCopasPar(): boolean {
        return this.jugador.tieneSeleccionConCopasPar();
    }

    figuritaSeleccion(): any {
        return this.jugador.seleccion;
    }

    tieneJugadorConCamisetaPar(): boolean {
        return this.jugador.esJugadorConCamisetaPar();
    }

    coincideNumeroFigurita(parametro: string): boolean {
        return this.numero.toString() === parametro;
    }

    cambiarFiguAOnFire(): void {
        this.onFire = true;
    }

    busqueda(condicionDeBusqueda: string): boolean {
        return (
            this.jugador.coincideParcialNombreJugador(condicionDeBusqueda) ||
            this.jugador.coincideParcialApellidoJugador(condicionDeBusqueda) ||
            this.coincideNumeroFigurita(condicionDeBusqueda) ||
            this.jugador.coincideSeleccion(condicionDeBusqueda)
        );
    }

    esValidoNumero(): boolean {
        return Number.isInteger(this.numero) && this.numero >= 0;
    }

    validarNumero(): void {
        if (!this.esValidoNumero()) {
            throw new Error("El número no es válido");
        }
    }

    esValidaNivelDeImpresion(): boolean {
        return this.nivelDeImpresion !== null && this.nivelDeImpresion !== undefined;
    }

    ValidaNivelDeImpresion(): void {
        if (!this.esValidaNivelDeImpresion()) {
            throw new Error("Nivel de Impresión no válido");
        }
    }

    esValidaOnFire(): boolean {
        return this.onFire !== null && this.onFire !== undefined;
    }

    ValidaOnFire(): void {
        if (!this.esValidaOnFire()) {
            throw new Error("Nivel On Fire no válido");
        }
    }

    esValidaJugador(): boolean {
        return this.jugador !== null && this.jugador !== undefined;
    }

    ValidaJugador(): void {
        if (!this.esValidaJugador()) {
            throw new Error("Jugador no válido");
        }
    }

    validar(): void {
        this.ValidaNivelDeImpresion();
        this.validarNumero();
        this.ValidaOnFire();
        this.ValidaJugador();
    }
}

enum NivelDeImpresion {
    ALTA,
    BAJA,
}

// Constantes
const COSTO_FIGURITA = 100;
const FACTOR_ONFIRE = 1.2;
const FACTOR_ES_PAR = 1.1;
const FACTOR_IMPRESION_NO_BAJA = 0.85;
const SIN_FACTOR = 1.0;
