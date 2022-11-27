import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x04cAAFad9DA0B0Ec4C5e32b07Cc51D5538585778"
);

export default instance;
