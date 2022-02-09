import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "solidity-coverage";
import "hardhat-gas-reporter";

import type { HardhatUserConfig } from "hardhat/types";

import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
  },
  solidity: {
    version: "0.8.9",
  },
};

export default config;
