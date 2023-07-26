import { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const HomePage = (props) => {

  

  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [productData,setProductData]=useState([]);

  const fetchProductData = async () => {
    setLoading(true);
    try{
      const response = await fetch(API_URL);
      const data = await response.json();

      console.log(data);
      if(data.length===0 || data===undefined){
        throw new Error("Error occured");
      }
      setProductData(data)

    }catch(e){
      console.log(e)
      setProductData([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  },[])


  return (
    <div>
        {
          loading ? 
          (<Spinner />) :
          (productData.length===0) ?
          (<div className='flex justify-center items-center'>
                <p className='text-2xl font-bold'>No Product Found</p>
          </div>) :
          (<div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 w-11/12 max-w-6xl mx-auto space-y-12 space-x-6'>
              {  productData.map((product) => (
                <Product productItem={product} key={product.id}/>
              ))}
          </div>)
        }
    </div>
  )
}

export default HomePage