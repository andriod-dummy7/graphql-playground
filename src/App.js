import { useEffect } from 'react';
import config from './aws-exports';

import { generateClient } from 'aws-amplify/api';
import { listRecipes } from './graphql/queries';
import { createRecipe } from './graphql/mutations';
import { onCreateRecipe } from './graphql/subscriptions';

const client = generateClient();


function App() {

  useEffect(() => {

    const pullData = async () => {

      const data = await client.graphql({ query: listRecipes });
      console.log(data);

    }

    pullData();

    const subscription = client.graphql(
      { query: onCreateRecipe }
    ).subscribe({
      next: reciepData => {
        pullData();
      },
      error: (error) => {
        console.log(error);
      }
    })

    return () => subscription.unsubscribe;
  }, [])


  const createNewRecipe = async () => {
    const name = prompt('What is the Recipe name?');
    const newRecipe = await client.graphql({ query: createRecipe, variables: { input: { name } } });
  }

  return (
    <div className="App">
      <button onClick={createNewRecipe} />
    </div>
  );
}

export default App;
