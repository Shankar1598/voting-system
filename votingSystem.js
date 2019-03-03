// import web3 from './web3';

// import VotingSystem from '../blockchain/build/votingSystem.json';

const web3 = require('./web3');
const wmtSystem = require('../blockchain/build/wmt.json');

const instance = new web3.eth.Contract(JSON.parse(wmtSystem.interface), '0xCb34250b468dc9B33E032CAB00BecCB018aAF322');

// export default instance;
module.exports = instance;
