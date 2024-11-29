const getStoreCart=()=>{
    //1 cart ase kina dekhbo
    const storeCartString=localStorage.getItem('cart');
    if(storeCartString){
        return JSON.parse(storeCartString);
    }
    return [];
}
//3 save to ls
const saveCartToLs=cart=>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}

//2 add to localstorage
const addToLs=id=>{
    const cart = getStoreCart();
    cart.push(id)
    //save to local storage
    saveCartToLs(cart)
}

//remove from ls
const removeFromLs = id =>{
    const cart = getStoreCart();
    //remove every id 
    const remaining = cart.filter(idx => idx !==id)
    saveCartToLs(remaining)

}

export {addToLs,getStoreCart,removeFromLs}