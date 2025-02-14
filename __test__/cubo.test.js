import Cubo from "../model/Cubo.js"

describe("Teste da classe Cubo", () => {
    test("Teste da área total do cubo", () => {
        const aresta = 4
        const cubo = new Cubo(aresta)
        areaTotalE = 6 * (aresta * aresta)


        expect(cubo.calcularAreaTotal()).toBeCloseTo(areaTotalE, 2)
    })

    test("tetse do volume do cubo", () => {
        const aresta = 4
        volumeE = aresta * aresta * aresta
        const cubo = new Cubo(aresta)

        expect(cubo.calcularVolume()).toBeCloseTo(volumeE, 2)
    })
})