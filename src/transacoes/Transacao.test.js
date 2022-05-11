import { render } from "@testing-library/react";
import React from "react";
import Transacao from "./Transacao";


describe("SnapshotTest. O componente não deve ser alterado", () => {
     
    it("Deve manter-se o mesmo snapshot", () => {
        const {container} = render(<Transacao
            data = "10/08/2022"
            tipo = "saque"
            valor = "25"
        />)

        expect(container).toMatchSnapshot()
    })  
})
