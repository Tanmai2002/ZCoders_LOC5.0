// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ServerContract {
  constructor() {
  }

//   function createBrand (string memory name,string memory symbol)external  returns (Brand){
//     Brand b= new Brand(name,symbol);
//     return b;
//   }
  
}


contract Brand is ERC721Enumerable, Ownable {
    using Strings for uint256;
    

constructor(
    string memory _name,
    string memory _brandsymbol
) ERC721(_name, _brandsymbol) {
}

    mapping(string => uint8) existingURIs;
    mapping(uint256 => address) public holderOf;
    uint256 public supply = 0; //determines the id
    uint256 public totalTxn = 0;
    uint256 public pdt =0;
    uint256 public cost = 0.0001 ether;

    event Sale(
        uint256 id,
        address indexed owner,
        uint256 cost,
        string metadataURI,
        uint256 timestamp
    );

    

    TransactionStruct[] transactions;
    TransactionStruct[] minted;
    
    struct TransactionStruct {
        uint256 id;
        uint256 prod_Id;
        address owner;
        string title;
        string description;
        uint256 cost;
        string metadataURI;
        uint256 timestamp;
    }


    function mintProduct(string memory title,string memory description,string memory metadataURI,uint256 salesPrice) external payable{
        require(msg.value >= cost, msg.value.toString());
        require(existingURIs[metadataURI] == 0, "This NFT is already minted!");
        require(msg.sender != owner(), "Sales not allowed!");

        supply++;
        pdt++;

        minted.push(
            TransactionStruct(
                supply,
                pdt,
                msg.sender,
                title,
                description,
                salesPrice,
                metadataURI,
                block.timestamp
            )
        );
        payTo(owner(), msg.value);
        emit Sale(
            supply,
            msg.sender,
            msg.value,
            metadataURI,
            block.timestamp
        );

        _safeMint(msg.sender, supply);
        existingURIs[metadataURI] = 1;
        holderOf[supply] = msg.sender;

    }
    
    function sellProduct(uint256 id) external payable {
        require(msg.value >= minted[id - 1].cost, "Ether too low for purchase!");
        require(msg.sender != minted[id - 1].owner, "Operation Not Allowed!");

        totalTxn++;

        transactions.push(
            TransactionStruct(
                totalTxn,
                minted[id - 1].prod_Id,
                msg.sender,
                minted[id - 1].title,
                minted[id - 1].description,
                msg.value,
                minted[id - 1].metadataURI,
                block.timestamp
            )
        );
        
        
        emit Sale(
            totalTxn,
            msg.sender,
            msg.value,
            minted[id - 1].metadataURI,
            block.timestamp
        );

        minted[id - 1].owner = msg.sender;
    }

    function TransferProduct(uint256 _id,address _new) external{
        require(msg.sender == minted[_id - 1].owner, "You do not have right to transfer");
        minted[_id - 1].owner=_new;
    }

    function changePrice(uint256 id, uint256 newPrice) external returns (bool) {
        require(newPrice > 0 ether, "Ether too low!");
        require(msg.sender == minted[id - 1].owner, "Operation Allowed!");
        minted[id - 1].cost = newPrice;
        return true;
    }



    function payTo(address to, uint256 amount) internal {
        (bool success, ) = payable(to).call{value: amount}("");
        require(success);
    }

    function getAllNFTs() external view returns (TransactionStruct[] memory) {
        return minted;
    }

    function getNFT(uint256 id) external view returns (TransactionStruct memory) {
        return minted[id - 1];
    }

    function getAllTransactions() external view returns (TransactionStruct[] memory) {
        return transactions;
    }
}
