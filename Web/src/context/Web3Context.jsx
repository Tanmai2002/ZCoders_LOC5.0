import React, { useEffect, useState } from 'react';
const Web3Context=React.createContext();

const Web3State=(props)=>{
    const [AccountAddress, setAccountAddress] = useState("")
  
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
        if(window.ethereum){
            let res=await  ethereum.request({ method: 'eth_requestAccounts' });
            console.log(res[0]);
            setAccountAddress(res[0]);
        }else{
            alert("Please Install Metamask!")
        }
    }
    return (<Web3Context.Provider value={{connectToMetamask,AccountAddress}}>{props.children}</Web3Context.Provider>)
}
export {Web3Context,Web3State};
