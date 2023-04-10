import Web3 from 'web3';
import {UTT_CONTACT_ADDRESS} from '../abis/upgradableTokenTest.js'; 
import {UTT_CONTACT_ABI} from '../abis/upgradableTokenTest.js'; 


if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider); 
    } else {
        var web3 = new Web3(new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_INTERNAL_HOST));
    }

const contactList = new web3.eth.Contract(UTT_CONTACT_ABI, UTT_CONTACT_ADDRESS);


function getTotalMinted(){
    return contactList.methods.balanceOf(process.env.ADMIN_PUBLIC_KEY).call((error, balance) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The balance is: ", balance/100)
          });
}

function getTokenName(){

      return contactList.methods.name().call((error,tokenName) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The tokenName is: ",tokenName)
          });

}

export {
    getTotalMinted,
    getTokenName
  };