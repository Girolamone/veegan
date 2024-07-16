import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetData = ({ searchQuery }) => {
  const apiKey = process.env.REACT_APP_YOUR_API_KEY;
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&diet=vegetarian&apiKey=${apiKey}`;
      console.log(baseUrl);

      axios.get(baseUrl)
        .then((response) => {
          setIngredients(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      setIngredients([]); 
    }
  }, [searchQuery, apiKey]);

  return (
    <div className='result-list'>
      
      {ingredients.length > 0 ? (
        ingredients.map(item => (
          <div key={item.id} className='result-item'>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default GetData;