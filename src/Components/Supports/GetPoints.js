function calcularDistancia(p1, p2) {
    const dx = p1.lat - p2.lat;
    const dy = p1.lng - p2.lng;
    return Math.sqrt(dx * dx + dy * dy);
}

function vmc(puntos) {
    const n = puntos.length;
    const visitados = Array(n).fill(false);
    let camino = [];
    let distanciaTotal = 0;
    let puntoActual = puntos[n - 1];
    camino.push(puntoActual);
    visitados[n - 1] = true;

    for (let i = 1; i < n; i++) {
        let distanciaMinima = Number.MAX_VALUE;
        let puntoMasCercano = null;

        for (let j = 0; j < n; j++) {
            if (!visitados[j]) {
                const distancia = calcularDistancia(puntoActual, puntos[j]);

                if (distancia < distanciaMinima) {
                    distanciaMinima = distancia;
                    puntoMasCercano = puntos[j];
                }
            }
        }

        visitados[puntos.indexOf(puntoMasCercano)] = true;
        camino.push(puntoMasCercano);
        distanciaTotal += distanciaMinima;
        puntoActual = puntoMasCercano;
    }

    distanciaTotal += calcularDistancia(camino[n - 1], camino[0]);
    camino.push(camino[0]);
    camino = camino.map((punto) => punto.label);

    return { camino, distanciaTotal };
}

export default function getPoints(puntos) {
    let p = [], s = new Set();
    for (let i = 0; i < 100; i++) {
        let t = [];
        puntos.forEach((punto) => Math.random() < punto.lvl * 2 && t.push(punto));
        t.push(puntos[puntos.length - 1]);
        p.push(t);
    };
    let r = p.map((punto) => {
        let { camino, distanciaTotal } = vmc(punto);
        return [(punto.reduce((a, b) => a + b.lvl, 0)) / distanciaTotal, camino]
    }).sort((a, b) => b[0] - a[0]).filter((e) => !isNaN(e[0]) && s.size < 4 && !s.has(e[0]) && s.add(e[0]));
    return r.map((e) => e[1]);
}
