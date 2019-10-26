const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/tictactoe.json");

//setting up provider with truffle-hdwallet-provider so that we can use a account
//and use infura to deploy it to rinkeby test network

const provider = new HDWalletProvider( //we need to provide two arguments: 1) the mnemonic words that
  //are used to generate the public and private keys for the account
  //2) the api for the infure to connect to the rinkeby node
  "rose crazy portion drink bread sentence people inject bid couch fall surge",
  "https://rinkeby.infura.io/v3/82acffcf5a3c4987a0766b846d793dcb"
);
const web3 = new Web3(provider); //creating the instance of the Web3 constructor for the Rinkeby test network

//we cannot use the async-await syntax, specially await without a async function declaration
//so,only for this reason we are declaring a function and calling it later.
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
};
deploy();
