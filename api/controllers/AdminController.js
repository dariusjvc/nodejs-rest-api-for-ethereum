import * as Swagger from './swagger.js';


import express, { response } from 'express';
export const router = express.Router();

//const Web3 = require('web3');

import Web3 from 'web3';



import {UTT_CONTACT_ADDRESS} from '../abis/upgradableTokenTest.js'; 
import {UTT_CONTACT_ABI} from '../abis/upgradableTokenTest.js'; 



/**
 * @swagger
 * /admin/totalMinted:
 *   get:
 *     description: Get the total token minted
 *     tags:
 *       - admin-controller
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: admin-controller
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.get('/totalMinted', async (req, res, next) => {

  if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider); 
    } else {
        var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }

    const accounts =  web3.eth.getAccounts();
    const contactList = new web3.eth.Contract(UTT_CONTACT_ABI, UTT_CONTACT_ADDRESS);
    let response = null;

    contactList.methods.balanceOf("0x8270bc2378075baca187f7143e37bf73303c83f1").call((error, balance) => {
      response = parseFloat(balance)/100;
      console.log(response); 
      res.send(response.toString());
    });
    
  });


/**
 * @swagger
 * /admin/tokenName:
 *   get:
 *     description: Get the token name
 *     tags:
 *       - admin-controller
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: admin-controller
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.get('/tokenName', async (req, res, next) => {

  if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider); 
    } else {
        var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }

    const accounts =  web3.eth.getAccounts();
    const contactList = new web3.eth.Contract(UTT_CONTACT_ABI, UTT_CONTACT_ADDRESS);

    contactList.methods.name().call((error,tokenName) => {
     
      res.send(tokenName);
    });
  
  });

