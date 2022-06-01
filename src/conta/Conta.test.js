import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import Conta from "./Conta";

describe("Componetne CONTA", () => {
    it("Deve exibir o saldo com máscara de valor monetário", () => {
        render(<Conta saldo={1500}/>)
        expect(screen.getByTestId("saldo-conta").textContent).toBe("R$ 1500")
    })
    
    it("Deve chamar a função de realizao tranzação quando clicada", () => {
        const realizarOperacaoButton = jest.fn()

        render(<Conta saldo={1000} realizarTransacao={realizarOperacaoButton}/>)
        fireEvent.click(screen.getByText("Realizar operação"))
   
        expect(realizarOperacaoButton).toHaveBeenCalled()
    })

})