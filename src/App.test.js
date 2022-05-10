import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./app"

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
})