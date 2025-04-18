

const getData = ()=>{
    const StoreDataSTR = localStorage.getItem("WishList");
    if(StoreDataSTR){
        const StoreData = JSON.parse(StoreDataSTR);
        return StoreData;
    }
    else{
        return [];
    }
}


const AddToStoreWish = (id) =>{
    const StoreData = getData();
    if(StoreData.includes(id)){
        alert("Already This is added to wishList")
    }
    else{
       StoreData.push(id);
       const Data = JSON.stringify(StoreData);
       localStorage.setItem("WishList",Data)
    }
}
export {getData,AddToStoreWish}