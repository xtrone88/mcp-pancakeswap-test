import { main as testErc20 } from './1_erc20'
import { main as testFactory } from './2_factory'
import { main as testPair } from './3_pair'
import { main as testRouter } from './4_router'

async function main() {
  // await testErc20()
  // await testFactory()
  // await testPair()
  await testRouter()
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
