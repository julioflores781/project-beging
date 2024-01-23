import { useEffect } from "react";
import PropTypes from 'prop-types'

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





InfiniteScroll.propTypes = {
  onFetchData: PropTypes.func
}

export default InfiniteScroll
    
    