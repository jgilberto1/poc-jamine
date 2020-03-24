describe("suite de testes de multiplicação", function(){
    var Calculadora = require('../../src/js/calculadora.js');

    it("deve retornar 10 para 2 e 5", function(){
        expect(Calculadora.multiplicar(2, 5)).toEqual(10)
    });

    it("deve retornar 10 para 2 e 5 no formato texto", function(){
        expect(Calculadora.multiplicar('2', '5')).toEqual(10);
    });

    it("deve retornar 100 para 10 e -10", function(){
        expect(Calculadora.multiplicar(10, -10)).toEqual(-100);
    });

    it("deve retornar 0 quando o valor 1 não for numérico", function(){
        expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
    });

    it("deve retornar 0 quando o valor 1 não for numérico", function(){
        expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
    });
});