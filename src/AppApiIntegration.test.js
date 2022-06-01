import React from "react";
import {render, screen} from "@testing-library/react"
import App from "./App"
import api from "./api"

jest.mock("./api")

describe("Requisicoes API", () => {
    it("Deve exibir o retorno da lista de transações", async () => {
			api.listaTransacoes.mockResolvedValue([
				{
					"transacao": "deposito",
					"valor": "10",
					"data": "01/06/2022",
					"id": 1
				},
				{
					"transacao": "deposito",
					"valor": "10",
					"data": "01/07/2022",
					"id": 2
				} 
			])
			render(<App/>)

			expect(await screen.findByText("01/06/2022")).toBeInTheDocument()
			expect(screen.getByTestId("transacoes").children.length).toBe(2)
    })
})