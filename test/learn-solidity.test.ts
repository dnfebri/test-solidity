import { ethers } from 'hardhat';
import { expect, use } from 'chai';
import { LearnSolidity } from '../typechain-types';

let learnSolidity: LearnSolidity = null as any;
let userError: any[] = []

describe('Test - Sembarang', () => {
  it('Deploy contract', async () => {
    const getCotract = await ethers.getContractFactory('LearnSolidity');
    learnSolidity = await getCotract.deploy('Manto', 20);
    await learnSolidity.deployed();
    // console.log(learnSolidity.address);
  });
  it('Test name must be manto', async () => {
    const name = await learnSolidity.name();
    expect('manto').to.equal(name.toLowerCase());
  });
  it('Replace name', async () => {
    const replace = await learnSolidity.replaceName('Sih Jhon', 2);
    const txReplace = await replace.wait();
    expect(1).to.eq(txReplace.status);
    // console.log("log" ,learnSolidity.replaceName('sopo'));
  });
  it('test error', async () => {
    const replace = learnSolidity.replaceName('manan', 1);
    await expect(replace).revertedWith('kurang masuk ilmune boss');
  });
  it('Test Replace name must be Sih jhon', async () => {
    const name = await learnSolidity.name();
    expect('Sih Jhon').to.equal(name);
  });

  // we have two function addUser and getUser
  // need test function add user, and create 10 user with random name and age
  it('Test Create ramdom 10 Users and age',async () => {
      // const addSinggleUser = await learnSolidity.addUser('bang jek', 18)
      // const txAdd = await addSinggleUser.wait();
      // expect(1).to.eq(txAdd.status)

    function ageRandom() {
      return Math.floor(Math.random() * 30) + 18;
    }
    for (let index = 0; index < 10; index++) {
      let age = ageRandom()
      await learnSolidity.addUser('name' + index, age);
      // else {
      //   const loopUser = learnSolidity.addUser('name' + index, age);
      //   await expect(loopUser).revertedWith("belum cukup umur");
      //   userError.push(loopUser)
      // }
      
      // if (cekAge == true) {
      //   userError.push(loopUser)
      //   console.log(loopUser);
      // }
    }
    console.log(userError);
    
    
    // try {
    //   const loopUser = learnSolidity.addUser('name', 20);
    //   await expect(loopUser).revertedWith("belum cukup umur"); 
    // } catch (error) {
    //   console.log(error);
    // }
  })
  // it('Test Get User Id',async () => {
  //   const user = await learnSolidity.getUser(3)
  //   // console.log(user);
    
    
  // })
  // and get all user
  it("test get All User",async () => {
    const allUser = await learnSolidity.id()
    let users:any[] = [];
    for (let index = 0; index < +allUser; index++) {
      let user = await learnSolidity.getUser(index)
      users.push(user)
    }
    expect(10).to.eq(users.length)
    console.log(users);
    
  })
  // please make sure all user catched
  // and test error make sure all user age > 17;

  it('test error user only age > 17',async () => {
    const addYoungUser = learnSolidity.addUser('manan', 15)

    await expect(addYoungUser).revertedWith('belum cukup umur')
  })
});
