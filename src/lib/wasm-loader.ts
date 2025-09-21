import init, { greet } from "../../wasm/pkg/wasm";

export async function initWasm() {
  await init(); 
  return greet;
}
