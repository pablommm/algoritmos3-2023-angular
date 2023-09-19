import Jugador from './jugador'; 

export interface Posicion {
    valorPorPosicion(jugador: Jugador): number;
    factorPosicion(jugador: Jugador): number;
    criterio(jugador: Jugador): boolean;
    factorCriterio(jugador: Jugador): number;
    puntos: number;
}

class Arquero implements Posicion {
    puntos: number = 100.0;

    valorPorPosicion(jugador: Jugador): number {
        return this.factorPosicion(jugador) * this.puntos;
    }

    criterio(jugador: Jugador): boolean {
        return jugador.tieneOEsMasAltoDe(180.0);
    }

    factorCriterio(jugador: Jugador): number {
        return jugador.altura;
    }

    factorPosicion(jugador: Jugador): number {
        return this.criterio(jugador) ? this.factorCriterio(jugador) : 1.0;
    }
}

class Defensor implements Posicion {
    puntos: number = 50.0;

    valorPorPosicion(jugador: Jugador): number {
        return this.factorPosicion(jugador) * this.puntos;
    }

    criterio(jugador: Jugador): boolean {
        return jugador.lider;
    }

    factorCriterio(jugador: Jugador): number {
        return 10.0 * jugador.aniosJugadosEnSeleccion();
    }

    factorPosicion(jugador: Jugador): number {
        return this.criterio(jugador) ? this.factorCriterio(jugador) : 1.0;
    }
}

class Mediocampista implements Posicion {
    puntos: number = 150.0;

    valorPorPosicion(jugador: Jugador): number {
        return this.factorPosicion(jugador) * this.puntos;
    }

    esLigero(jugador: Jugador): boolean {
        return jugador.peso >= 65.0 && jugador.peso <= 70.0;
    }

    criterio(jugador: Jugador): boolean {
        return this.esLigero(jugador);
    }

    factorCriterio(jugador: Jugador): number {
        return jugador.peso;
    }

    factorPosicion(jugador: Jugador): number {
        return this.criterio(jugador) ? this.factorCriterio(jugador) : 1.0;
    }
}

class Delantero implements Posicion {
    puntos: number = 200.0;

    valorPorPosicion(jugador: Jugador): number {
        return this.factorPosicion(jugador) * this.puntos;
    }

    criterio(jugador: Jugador): boolean {
        return jugador.perteneceAUnaSeleccionCampeona();
    }

    factorCriterio(jugador: Jugador): number {
        return jugador.nroDeCamiseta * 10.0;
    }

    factorPosicion(jugador: Jugador): number {
        return this.criterio(jugador) ? this.factorCriterio(jugador) : 1.0;
    }
}

class Polivalentes implements Posicion {
    constructor(private posiciones: Posicion[]) {}
    puntos: number = this.posiciones.reduce((total, pos) => total + pos.puntos, 0) / this.cantidadDePosiciones();

    private cantidadDePosiciones(): number {
        return this.posiciones.length;
    }

    criterio(jugador: Jugador): boolean {
        return jugador.esLeyenda() || jugador.esPromesaDeFutbol();
    }

    ValorPosicion(jugador: Jugador): number {
        return this.posiciones.reduce((total, pos) => total + pos.valorPorPosicion(jugador), 0) / this.cantidadDePosiciones();
    }

    factorCriterio(jugador: Jugador): number {
        return this.ValorPosicion(jugador) - jugador.aniosDelJugador();
    }

    valorPorPosicion(jugador: Jugador): number {
        return this.ValorPosicion(jugador);
    }

    factorPosicion(jugador: Jugador): number {
        return 1.0; // Falta ajustar
    }
}
