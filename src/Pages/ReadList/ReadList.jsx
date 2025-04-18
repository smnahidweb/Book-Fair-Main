import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Components/Utilities/AddToRead';
import Book from '../Book/Book';
import ReadListDetails from '../ReadListDetails/ReadListDetails';
import WishList from '../WishList/WishList';
import { getData } from '../../Components/Utilities/AddToWishList';
const ReadList = () => {
const [ReadData,setReadData] = useState([])
const [wishList,setWishList] = useState([]);
const [sort,setSort] = useState('')
const Data = useLoaderData();
console.log(Data);

useEffect( ()=>{

    const storeData = getStoredBook();
    console.log( storeData)
    const ConvertedStoreData = storeData.map(id => parseInt(id));

    const FinalData = Data.filter(book => ConvertedStoreData.includes(book.bookId))

   setReadData(FinalData);

},[] )


useEffect(()=> {

const WishData = getData();
const ConvertedWishData = WishData.map(id => parseInt(id));
const FinalData2 = Data.filter(d => ConvertedWishData.includes(d.bookId))
setWishList(FinalData2)


},[])

const handleSorting = (type)=>{
setSort(type)

if(type === 'page'){
const ReadDataByPage = [...ReadData].sort((a,b)=> a.totalPages - b.totalPages )
const WishDataByPage = [...WishList].sort((a,b)=> a.totalPages - b.totalPages )
setReadData(ReadDataByPage)
setWishList(WishDataByPage)
console.log(ReadData)
}
if(type === 'rating'){
    const ReadDataByRating = [...ReadData].sort((a,b)=> a.rating - b.rating )
    const WishDataByRating = [...WishList].sort((a,b)=> a.rating - b.rating )
    setReadData(ReadDataByRating)
    setWishList(WishDataByRating)
}

}



    return (
        <div>
            <details className="dropdown">
  <summary className="btn m-1">Sort by : {sort? sort : ""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={ ()=> handleSorting("page")} >Page</a></li>
    <li><a onClick={ ()=> handleSorting("rating")}>Rating</a></li>
  </ul>
</details>
             <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I Read {ReadData.length}</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        {
            ReadData.map(b => <ReadListDetails b={b}></ReadListDetails>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>My Book in Wish</h2>
      <div>
        {
          wishList.map(wish => <WishList wish={wish}></WishList>)
        }
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;