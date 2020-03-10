import axios from 'axios';
import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import AuthContext from '../../contexts/AuthContext';
import { Card } from '../../styles/Card';
import { Container } from '../../styles/Container';

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
    <Container recipe>

      <h1>Recipes</h1>
      {recipeList.map( recipe => {
        return (
          <Card key={recipe.name}>
            <div>
            <h3>{`Name: ${recipe.name}`}</h3>
            <p>{`Course: ${recipe.course}`}</p>
            <p>{`Technique: ${recipe.technique}`}</p>
            <p>Ingredients</p>
            <ul>
              {recipe.ingredients.map( ( ingredient, i ) =>
                <li key={i}>{ingredient}</li> )}
            </ul>
            </div>
          </Card>
        );

      } )}

    </Container>
  );
}

export default Recipes;