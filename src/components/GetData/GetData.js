import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';

const GetData = () => {
  const apiKey = process.env.REACT_APP_YOUR_API_KEY;
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (submittedQuery.trim() !== "") {
      setLoading(true);
      const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${submittedQuery}&diet=vegetarian&apiKey=${apiKey}`;
      console.log(baseUrl);

      axios.get(baseUrl)
        .then((response) => {
          setIngredients(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      setIngredients([]);
    }
  }, [submittedQuery, apiKey]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSubmittedQuery(searchQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div className='get-data'>
      <Helmet>
        <title>Veegana - Recipe Finder</title>
      </Helmet>
      <div className="searchbox--total">
        <input
          className="searchbar"
          placeholder="Enter Ingredients from your Fridge"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <button className="search-button" onClick={handleSearchSubmit}>Search</button>
      </div>

      <div className='result-list'>
        {loading ? (
          <div className="spinner-container">
            <ClipLoader color={"#1c7c54"} loading={loading} size={50} />
          </div>
        ) : ingredients.length > 0 ? (
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
    </div>
  );
};

export default GetData;