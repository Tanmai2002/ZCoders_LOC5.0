
let shortenId=(s)=>{
    return `${s.slice(0,4)}...${s.slice(-5,-1)}`
}
export{ shortenId};