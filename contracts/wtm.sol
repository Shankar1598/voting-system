pragma solidity^0.4.17;

contract wmt {
    
    address public manager;
    uint public cfi_balance;
    BlockIn[] public chainIn;
    BlockOut[] public chainOut;
    
     constructor() public {
        manager = msg.sender;
    }
    
    struct BlockIn {
        string id;
        uint amount;
        string tax_type;
        string tax_category;
        uint timestamp;
    }
    
    
    struct BlockOut {
        string gstin;
        uint amount;
        uint pincode;
        string locality;
        string area;
        string purpose;
        uint timestamp;
    }
    
      modifier restricted()
    {
        require(manager == msg.sender);
        _;
    }
    
    //check in backend for proper tax type by differnt head office
    function creditTax(string memory id, uint amount,string memory tax_type,string memory tax_category) public restricted  payable  {
        cfi_balance += amount;
        BlockIn memory newBlockIn = BlockIn({
            id:id,
            amount:amount,
            tax_type:tax_type,
            tax_category:tax_category,
            timestamp:block.timestamp
        });
        //Update Chain
        chainIn.push(newBlockIn);
    }
    //Check for disaster management
    function debitAmount(string memory gstin, uint amount, uint pincode, string memory locality, string memory area, string memory purpose) public payable{
        cfi_balance -= amount;
        BlockOut memory newBlockOut = BlockOut({
            gstin:gstin,
            amount:amount,
            pincode:pincode,
            locality:locality,
            area:area,
            purpose:purpose,
            timestamp:block.timestamp
        });
        chainOut.push(newBlockOut);
    }
    
    function getChainInLength() public view returns(uint){
        return chainIn.length;
    }
    
    function getChainOutLength() public view returns(uint){
        return chainOut.length;
    }
    
}
