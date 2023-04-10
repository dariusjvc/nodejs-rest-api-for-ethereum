import * as AdminService from "../services/AdminService.js";
import express, { response } from 'express';
export const router = express.Router();

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
  let response = null;
  var totalMinted = await AdminService.getTotalMinted();
  response = parseFloat(totalMinted)/100;
  res.send(response.toString());    
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
    var tokenName = await AdminService.getTokenName();
    res.send(tokenName);
  });

