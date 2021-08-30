require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stone rule saddle evidence gesture hat army gas'; 
let testAccounts = [
"0x7cbb05242e270eb303ee5bb10c27f49a847c41968995373cf33f24a29ac5cf9f",
"0xa22579bcdc1f39830a2cb78764edb24ee4763eb67558e5e4b2d407e7908e5bec",
"0xa4c4728f135d194661b77a8259873749a7fd46b92eaf723addeb0108926094e0",
"0xa33efc4b9e310fc3c414eee936ee1ba7b92e4b159a4c7397e0cadfaa5225415b",
"0x7765c0610cbe65e971cd883eb1bcc96d590c4f9dfed0e4da6d3774c5d93f6b48",
"0xad899117074dd935387cc5d349bb5e1f5235522cf81aeb90b994591b6ffdac96",
"0xd8795938d7e9721aa59b18f3321ba9c5f490c3104b4b71757a9e6b34e3456714",
"0x340e66cd99a2942faac2fd6ba25eab9085a95c73ffead74940861d662d5d52af",
"0xfd1ae79293ea32ebf04323896898626d581ea1d68b5a11a80f8ee0ef1821c8bf",
"0x6e98907d3b35efd495232e801cb52d5fb6927311878f6354806688291ace974d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


