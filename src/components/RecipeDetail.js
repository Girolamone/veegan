import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_YOUR_API_KEY;
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className='recipe-detail'>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className='recipe-image' />
      <p className='recipe-text'>{recipe.instructions}</p>
      {}
    </div>
  );
};

export default RecipeDetail;