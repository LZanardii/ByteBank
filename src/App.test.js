import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App, { calcularNovoSaldo } from "./app"

describe("Componente principal:", () => {

  beforeEach(() => {
    render(<App/>)
  })

  describe("Quando carregar a tela deve:", () =>{
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
    it("tipo: depósito, verifica se a transação foi efetuada e a transação foi salva no JSON/DB", () => {
      const saldo = screen.getByTestId("saldo-conta")
      const tipoTransacaoButton = screen.getByLabelText("Depósito")
      const valorInput = screen.getByTestId("valor")
      const realizarOperacaoButton = screen.getByText("Realizar operação")
      
      expect(saldo.textContent).toBe("R$ 0")

      fireEvent.click(tipoTransacaoButton)
      fireEvent.change(valorInput, {target: {value:  "10"}})
      fireEvent.click(realizarOperacaoButton)

      expect(saldo.textContent).toBe("R$ 10")
    })
    it("deve renderizar uma table com os dados da transação realizada", () => {
      const tipoTransacaoButton = screen.getByLabelText("Depósito")
      const valorInput = screen.getByTestId("valor")
      const realizarOperacaoButton = screen.getByText("Realizar operação")
      
      fireEvent.click(tipoTransacaoButton)
      fireEvent.change(valorInput, {target: {value:  "10"}})
      fireEvent.click(realizarOperacaoButton)

      const table = screen.getByTestId("transacaoContainer")
      expect(table.textContent).toBe(new Date().toLocaleDateString('pt-br')+"depositoR$ 10")
    })

  })
})