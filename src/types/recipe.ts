export type Recipe = {
  uuid: string;
  title: string;
  description: string;
  images: RecipeImage;
  servings: number;
  prepTime: number;
  cookTime: number;
  postDate: Date;
  editDate: Date;
  ingredients: Ingredient[];
  directions: Direction[];
};

export type Ingredient = {
  uuid: string;
  amount: number;
  measurement: string;
  name: string;
};

export type Direction = {
  instructions: string;
  optional: boolean;
};

export type RecipeImage = {
  full: string;
  medium: string;
  small: string;
};
