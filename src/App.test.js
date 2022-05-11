import React from "react";
import { render, screen } from "@testing-library/react";
import App, { calcularNovoSaldo } from "./app"

describe("Componente principal:", () => {
    describe("Quando carregar a tela deve:", () =>{
        beforeEach(() => {
            render(<App/>)
        })

        it("Renderizar o nome do banco (ByteBank)", () => {
        expect(screen.getByText("ByteBank")).toBeInTheDocument();
        })

        it("Renderizara o saldo disponível", () =>{
        expect(screen.getByText("Saldo:")).toBeInTheDocument();
        })

        it("Renderizar botão de realizar operação", () => {
        expect(screen.getByText("Realizar operação")).toBeInTheDocument()
        })
    })

    describe("Quando realizar uma transação", () => {
        it("tipo: saque, o saldo deve diminuir", () => {
            const valores = {
                transacao: "saque",
                valor: 50
            };
            let saldoAtual = calcularNovoSaldo(valores, 150);
            expect(saldoAtual).toBe(100);
        })
        it("tipo: saque, não possui o valor em conta. Não deve realziar a transação", () => {
            const valores = {
                transacao:"saque", 
                valor: 50
            };
            let saldoAtual = calcularNovoSaldo(valores, 25);
            expect(saldoAtual).toBe(25)
        })
    })
})