        export class Coordenada {
            protected y1: number;
            protected x2: number;
            protected y2: number;
            protected x1: number;
            protected resultado: number;

            constructor(x1: number, y1: number, x2: number, y2: number) {
                this.x1 = x1;
                this.y1 = y1;
                this.x2 = x2;
                this.y2 = y2;
                this.resultado = 0;
            }

            public calcularDistancia(x1:number,y1:number,x2:number,y2:number) {
                const diferenciaX = x2 - x1;
                const diferenciaY = y2 - y1;
                this.resultado = Math.hypot(diferenciaX, diferenciaY); 
                return this.resultado;
            }

            public imprimirDistancia(): void {
                console.log(`Distancia entre los puntos: ${this.resultado.toFixed(2)}`);
            }
        }


        const coordenada = new Coordenada(-4, -3, 2, 5);
        coordenada.calcularDistancia(-4, -3, 2, 5);
        coordenada.imprimirDistancia();
