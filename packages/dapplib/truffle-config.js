require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note pulse coast gesture brass fresh gather'; 
let testAccounts = [
"0x1c50fc221337ac82984b730a397c92a9e92ee4844f21a0805ac30be5beec7161",
"0xd51b8a8b6cce83b09ae3c5334119956730c3f7a56a3247fc92fcd751e2872f4b",
"0xafe4285c546d7e7d500bc4ec75a55888a57bbb70d85c03034c76c48ace40d039",
"0x6d1c33baacae1200044cbb07528570c09978a14308bf09f2f3c053888228d3ef",
"0x81410098240ccd089d9bcc4ebfb8d1e42af8226e83b905839192aacdd5aa7f8c",
"0x69822ec6760633dbc0a9f9f3747750b2536edf3945b210cbc8f7dc8ff1ed4aff",
"0xbb53ae343140c6cc5072dc8f5ba06fe307bcaf9c98d3955b81de266deb094557",
"0x7a12882d0e437b7e5e7643664bfbfbc21cd032579f531f14ae2c9b3563f35c63",
"0xf37bb77101dde60f14d187b6daca562c6e4e06be76781ff3ac7c5c59980bc239",
"0x99dd06d324560af803aeb7bfaa0cead90489af592bcac3caf6ea62340bf94d87"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

