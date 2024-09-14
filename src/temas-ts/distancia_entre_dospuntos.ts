class Punto {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    imprimir(): void {
        console.log(`Las cordenadas del punto es : (${this.x}, ${this.y})`);
    }
}

class PuntoConDistancia extends Punto {
    constructor(x: number, y: number) {
        super(x, y);
    }

    static calcularDistancia(punto1: PuntoConDistancia, punto2: PuntoConDistancia): number {
        const dx = punto2.x - punto1.x;
        const dy = punto2.y - punto1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    imprimir(): void {
        super.imprimir();
    }
}


const punto1 = new PuntoConDistancia(1, 2);
const punto2 = new PuntoConDistancia(2, 6);


punto1.imprimir();
punto2.imprimir();


const distancia = PuntoConDistancia.calcularDistancia(punto1, punto2);
console.log(`La distancia entre los puntos es: ${distancia.toFixed(2)}`);
