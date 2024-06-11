import * as nillion from "nillion-client-browser"
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing"

describe("foo describe", () => {
  it("just run", () => {
    console.log("hello!")

    console.log(DirectSecp256k1HdWallet)

    console.log(nillion.NodeKey)

    expect(true).toBeTrue()
  })
})
