import {useQuery} from '@tanstack/react-query';
import apiClient from '../lib/client';
import {Recipe} from '../types/recipe';

const getRecipes = async (): Promise<Recipe[]> => {
  const response = await apiClient.get('/recipes.json');

  if (!response.ok) {
    throw new Error(response.originalError.message);
  }

  return response.data as Recipe[];
};

export const useRecipes = () => {
  const recipesQuery = useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipes,
  });

  return recipesQuery;
};
