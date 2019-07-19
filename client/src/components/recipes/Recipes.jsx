import axios from 'axios';
import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import AuthContext from '../../contexts/AuthContext';

function Recipes() {
  const [recipeList, setRecipeList] = useState( [] );
  const AuthMethods                 = useContext( AuthContext );

  const axiosWithAuth = () => axios.create( {
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization': AuthMethods.token()
    }
  } );

  useEffect( () => {
    axiosWithAuth()
    .get( '/restricted/data' )
    .then( res => setRecipeList( res.data ) )
    .catch( err => AuthMethods.logout() );
  }, [] );

  return (
    <>
      <h1>Recipes</h1>
      {recipeList.map( recipe => {
        return (
          <div key={recipe.name}>
            <h3>{recipe.name}</h3>
            <p>{recipe.course}</p>
            <p>{recipe.technique}</p>
            <ul>
              {recipe.ingredients.map( ( ingredient, i ) =>
                <li key={i}>{ingredient}</li> )}
            </ul>
          </div>
        );

      } )}
    </>
  );
}

export default Recipes;