class Coordenada {
    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;
    private resultado: number;

    constructor(inicioX: number, inicioY: number, finX: number, finY: number) {
        this.x1 = inicioX;
        this.y1 = inicioY;
        this.x2 = finX;
        this.y2 = finY;
        this.resultado = 0;
    }

    public calcularDistancia(): number {
        const diferenciaX = this.x2 - this.x1;
        const diferenciaY = this.y2 - this.y1;
        this.resultado = Math.hypot(diferenciaX, diferenciaY); 
        return this.resultado;
    }

    public imprimirDistancia(): void {
        console.log(`Distancia entre los puntos: ${this.resultado.toFixed(2)}`);
    }
}


const coordenada = new Coordenada(-4, -3, 2, 5);
coordenada.calcularDistancia();
coordenada.imprimirDistancia();
