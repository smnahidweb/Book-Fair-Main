const getStoredBook = ()=>{


    const StoredBookSTR = localStorage.getItem('readList');
    if(StoredBookSTR){
        const StoredBookData = JSON.parse(StoredBookSTR);
        return StoredBookData;
    }
    else{
        return []
    }

}

const AddToStoreDB = (id) =>{
    const StoredBookData = getStoredBook();
    if(StoredBookData.includes(id)){
  alert("This Id is already exist")
    }
    else{
       StoredBookData.push(id);
       const data = JSON.stringify(StoredBookData);
       localStorage.setItem('readList',data);
    }
}
export {AddToStoreDB,getStoredBook};