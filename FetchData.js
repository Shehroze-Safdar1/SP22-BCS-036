import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dev.iqrakitab.net/api/books');
        if (response.data && response.data.data && Array.isArray(response.data.data)) {
          setBooks(response.data.data);
        } else {
          console.error('Invalid data format:', response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup
    return () => {};
  }, []);

  return { books, loading };
};

export default useFetchData;
