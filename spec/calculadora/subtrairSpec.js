describe("suite de testes de subtração", function(){
    var Calculadora = require('../../src/js/calculadora.js');

    it("deve retornar 1 para 3 e 2", function(){
        expect(Calculadora.subtrair(3, 2)).toEqual(1);
    });

    it("deve retornar -10.5 para 20.5 -10", function(){
        expect(Calculadora.subtrair(20.5, 10)).toEqual(10.5);
    });

    it("deve retornar 5 para 8 e 3 em formato texto", function(){
        expect(Calculadora.subtrair('8', '3')).toEqual(5)
    });

    it("deve retornar 0 quando o valor 1 não for numérico", function(){
        expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
    });

    it("deve retornar 0 quando o valor 2 não for numérico", function(){
        expect(Calculadora.subtrair(10, undefined)).toEqual(0);
    });
});