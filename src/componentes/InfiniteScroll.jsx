import { useEffect } from "react";

export const InfiniteScroll = ({ onFetchData }) => {
    const cantidadScroll = 0.0001 ;
  
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      const datos = (scrollHeight - scrollPosition) / scrollHeight;
  
      if (datos < cantidadScroll) {
        onFetchData();
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [onFetchData]);
  
    return null;
    };



    

    
    export default InfiniteScroll
    
    