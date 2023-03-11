const ServerContract = artifacts.require("ServerContract");
const Brand = artifacts.require("Brand");
// const Certificate= artifacts.require("Certificate");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  deployer.deploy(Brand,"Gucci","Dazz");

  deployer.deploy(ServerContract);
};

