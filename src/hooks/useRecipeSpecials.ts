import {useQuery} from '@tanstack/react-query';
import apiClient from '../lib/client';
import {Recipe} from '../types/recipe';

const getRecipeSpecials = async (): Promise<Recipe[]> => {
  const response = await apiClient.get('/specials.json');

  if (!response.ok) {
    throw new Error(response.originalError.message);
  }

  return response.data as Recipe[];
};

export const useRecipes = () => {
  const recipeSpecialQuery = useQuery({
    queryKey: ['specials'],
    queryFn: getRecipeSpecials,
  });

  return recipeSpecialQuery;
};
