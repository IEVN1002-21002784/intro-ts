import { Coordenada } from "./distancia_entre_dospuntos";


class Triangulo extends Coordenada {
    private puntoC_X: number;
    private puntoC_Y: number;

    constructor(x1: number, y1: number, x2: number, y2: number, p3x: number, p3y: number) {
        super(x1,y1,x2,y2)
        this.puntoC_X = p3x;
        this.puntoC_Y = p3y;
    }

    mostrarInformacion(): void {
        
        const ladoA = this.calcularDistancia(this.x1, this.y1, this.x2, this.y2);
        const ladoB = this.calcularDistancia(this.puntoC_X, this.puntoC_Y, this.x1, this.y1);
        const ladoC = this.calcularDistancia(this.x2, this.y2, this.puntoC_X, this.puntoC_Y);


        if (((ladoA + ladoB) > ladoC) && ((ladoA + ladoC) > ladoB) && ((ladoB + ladoC) > ladoA)) {
            console.log('Las posiciones forman un triángulo.');
        } else {
            console.log('Las posiciones NO forman un triángulo.');
        }
    }
}

const triangulo = new Triangulo(3, 4, 5, 3, 4, 5);
triangulo.mostrarInformacion();
