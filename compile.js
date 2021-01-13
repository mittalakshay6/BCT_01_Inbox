const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

let compilerInput = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    optimizer: {
      enabled: true,
    },
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
console.log("Compiling contract");

let compiledContract = JSON.parse(solc.compile(JSON.stringify(compilerInput)));

console.log("Contract Compiled");

const interface = compiledContract.contracts["Inbox.sol"]["Inbox"].abi;
const bytecode =
  compiledContract.contracts["Inbox.sol"]["Inbox"].evm.bytecode.object;

module.exports = {
  interface,
  bytecode,
};
