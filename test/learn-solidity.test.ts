import {ethers} from 'hardhat'
import {expect} from 'chai'
import {LearnSolidity} from '../typechain-types'

let learnSolidity: LearnSolidity = null as any

describe('Test - Sembarang', () => {
  it('Deploy contract', async() => {
    const getCotract = await ethers.getContractFactory('LearnSolidity')
    learnSolidity = await getCotract.deploy('Manto', 20)
    await learnSolidity.deployed()
    // console.log(learnSolidity.address);
    
  })
  it('Test name must be manto', async() => {
    const name = await learnSolidity.name()
    expect('manto').to.equal(name.toLowerCase())
  })
  it('Replace name', async () => {
    const replace = await learnSolidity.replaceName('Sih Jhon', 2)
    const txReplace = await replace.wait();
    expect(1).to.eq(txReplace.status)
    // console.log("log" ,learnSolidity.replaceName('sopo'));
  })
  it("test error", async () =>{
    const replace = learnSolidity.replaceName('manan', 1);
    await expect(replace).revertedWith("kurang masuk ilmune boss")
  })
  it('Test Replace name must be Sih jhon', async () => {
    const name = await learnSolidity.name()
    expect('Sih Jhon').to.equal(name)
  })
})