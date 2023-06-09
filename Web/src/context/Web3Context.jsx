import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { contractABI, contractAddress } from '../constants/Constants';
const Web3Context=React.createContext();


const Web3State=(props)=>{
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);



  
  useEffect(() => {
    let init=async()=>{
      connectToMetamask();
 
    }
    init();
  }, [])
    const handleAccountsChanged=(accounts) => {
        // Handle the new accounts, or lack thereof.
        // "accounts" will always be an array, but it can be empty.
        window.location.reload();
      };
      const handleChainChanged=(accounts) => {
        // Handle the new accounts, or lack thereof.
        // "accounts" will always be an array, but it can be empty.
        window.location.reload();
      };
    useEffect(() => {
        ethereum.on('accountsChanged', handleAccountsChanged);
          
          ethereum.on('chainChanged',handleChainChanged);

          ethereum.on('connect', (c)=>{
            console.log(c)

          });
    

          connectToMetamask();
          return () => {
            
ethereum.removeListener('accountsChanged', handleAccountsChanged);
ethereum.removeListener('chainChanged', handleAccountsChanged);


          }
    }, [])
    

    
    const connectToMetamask=async()=>{
      if (window.ethereum) {
        try {
          const res = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          await accountsChanged(res[0]);
        } catch (err) {
          console.error(err);
          setErrorMessage("There was a problem connecting to MetaMask");
        }
      } else {
        setErrorMessage("Install MetaMask");
      }
    };

    const accountsChanged = async (newAccount) => {
      setAccount(newAccount);
      try {
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [newAccount.toString(), "latest"],
        });
        setBalance(ethers.formatEther(balance));
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    };
   
    async function mintNft(address="0x1288331A47E02fb7F7bDAE736205a606c550DcF8",msg="Gucci Special Edition BackPack",design="Amazing bag with beautiful and elegant design"){
      try {
          
          if(ethereum){
              const provider=new ethers.BrowserProvider(ethereum);
              const signer=await provider.getSigner();
              const certificateContract=new ethers.Contract(contractAddress,contractABI,signer)
              // let nftTxn = await certificateContract.depositEth({value:0.01});
        

              // certificateContract.value=0.01
              // const certificateContract=getEthereumContract();
              console.log(signer);
              // let res=await storeAsset(CurrentAccount,address,msg,design)
              // let designVal=res.url;
              
             
              let id=await certificateContract.mintProduct(
                msg,
                design,
              "https://media.gucci.com/content/BlockQuote_Small_290x290/1650551404/BlockQuote_67579710ODT2579_001_Default.jpg",
               "1000",
               {value: ethers.parseEther("0.02")}
            );
              
              // let id=await certificateContract.view_all_certificate(address);
              console.log(id,id.hash);
              // alert(id)
              
              const txReceipt = await provider.getTransaction(id.hash)
              console.log(id.logs);
              // console.log(txReceipt.data,);
              let data=txReceipt.toJSON();
              data['signature']="";
              data['provider']="";
              data['certification']=msg;
              // data['design']=designVal;
              // data['name']=name;

              // await writeTransaction(id.hash,data)
              
              
             
              return id;

          }else{
              alert("No account added.Please Connect First")
          }
      } catch (error) {
          console.log(error)
          alert(error)
          throw error
      }
  }

  let getAllOrders=async (address="0x1288331A47E02fb7F7bDAE736205a606c550DcF8")=>{
    try {
        
        if(ethereum){
            const provider=new ethers.BrowserProvider(ethereum);
            const signer=await provider.getSigner();
            const certificateContract=new ethers.Contract(contractAddress,contractABI,signer)
           
            let id=await certificateContract.getAllTransactions();
            console.log(id);
            return(id);

        }else{
            alert("No Ethereum Account Connected. Please Connect")
        }
    } catch (error) {
        console.log(error)
    }
}

let getAllNFT=async (address="0x1288331A47E02fb7F7bDAE736205a606c550DcF8")=>{
  try {
      
      if(ethereum){
          const provider=new ethers.BrowserProvider(ethereum);
          const signer=await provider.getSigner();
          const certificateContract=new ethers.Contract(contractAddress,contractABI,signer)
         
          let id=await certificateContract.getAllNFTs();
          console.log(id);
          return(id);

      }else{
          alert("No Ethereum Account Connected. Please Connect")
      }
  } catch (error) {
      console.log(error)
  }
}

let transferProduct=async (id,address="0x1288331A47E02fb7F7bDAE736205a606c550DcF8")=>{
  try {
      
      if(ethereum){
          const provider=new ethers.BrowserProvider(ethereum);
          const signer=await provider.getSigner();
          const certificateContract=new ethers.Contract(contractAddress,contractABI,signer)
         
          let id1=await certificateContract.TransferProduct(id,address);
          console.log(id1);
          return(id1);

      }else{
          alert("No Ethereum Account Connected. Please Connect")
      }
  } catch (error) {
      console.log(error)
  }
}



    


    

    return (<Web3Context.Provider value={{connectToMetamask,account,balance,getAllOrders,getAllNFT,transferProduct,mintNft}}>{props.children}</Web3Context.Provider>)
}
export {Web3Context,Web3State};