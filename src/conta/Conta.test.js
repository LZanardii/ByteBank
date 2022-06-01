import React from "react";
import { render, screen } from "@testing-library/react"
import Conta from "./Conta";

describe("Componetne CONTA", () => {
    it("Deve exibir o saldo com máscara de valor monetário", () => {
        render(<Conta saldo={1500}/>)
        expect(screen.getByTestId("saldo-conta").textContent).toBe("R$ 1500")
    })
})