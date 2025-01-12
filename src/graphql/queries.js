/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      ingredients {
        nextToken
        __typename
      }
      instructions {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      id
      name
      quantity
      recipeID
      recipe {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        recipeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInstruction = /* GraphQL */ `
  query GetInstruction($id: ID!) {
    getInstruction(id: $id) {
      id
      info
      recipeID
      recipe {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInstructions = /* GraphQL */ `
  query ListInstructions(
    $filter: ModelInstructionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        info
        recipeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ingredientsByRecipeIDAndId = /* GraphQL */ `
  query IngredientsByRecipeIDAndId(
    $recipeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ingredientsByRecipeIDAndId(
      recipeID: $recipeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        quantity
        recipeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const instructionsByRecipeIDAndId = /* GraphQL */ `
  query InstructionsByRecipeIDAndId(
    $recipeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInstructionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    instructionsByRecipeIDAndId(
      recipeID: $recipeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        info
        recipeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
