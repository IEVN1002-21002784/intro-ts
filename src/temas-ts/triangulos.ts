import { Coordenada } from "./distancia_entre_dospuntos"; // Usaremos la clase Coordenada para el cálculo de distancias

class Triangulo {
    private puntoA_X: number;
    private puntoA_Y: number;
    private puntoB_X: number;
    private puntoB_Y: number;
    private puntoC_X: number;
    private puntoC_Y: number;

    constructor(p1x: number, p1y: number, p2x: number, p2y: number, p3x: number, p3y: number) {
        this.puntoA_X = p1x;
        this.puntoA_Y = p1y;
        this.puntoB_X = p2x;
        this.puntoB_Y = p2y;
        this.puntoC_X = p3x;
        this.puntoC_Y = p3y;
    }

    
    private calcularLado(x1: number, y1: number, x2: number, y2: number): number {
        return Coordenada.calcularDistancia(x1, y1, x2, y2); 
    }

  
    mostrarInformacion(): void {
        console.log('El resultado es:');

        const ladoA = this.calcularLado(this.puntoA_X, this.puntoA_Y, this.puntoB_X, this.puntoB_Y);
        const ladoB = this.calcularLado(this.puntoA_X, this.puntoA_Y, this.puntoC_X, this.puntoC_Y);
        const ladoC = this.calcularLado(this.puntoB_X, this.puntoB_Y, this.puntoC_X, this.puntoC_Y);


        if (((ladoA + ladoB) > ladoC) && ((ladoA + ladoC) > ladoB) && ((ladoB + ladoC) > ladoA)) {
            console.log('Las posiciones forman un triángulo.');
        } else {
            console.log('Las posiciones NO forman un triángulo.');
        }
    }
}

const triangulo = new Triangulo(3, 4, 5, 4, 6, 4);
triangulo.mostrarInformacion();
