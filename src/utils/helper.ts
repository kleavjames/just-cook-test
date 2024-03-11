import {ImagePaths} from './constants';

export const loadRecipeImage = (recipeImage: string) => {
  switch (recipeImage) {
    case ImagePaths.queso:
      return require('../../assets/img/queso_brat_scramble--s.jpg');
    case ImagePaths.brussel:
      return require('../../assets/img/brussel_chips--s.jpg');
    case ImagePaths.italian:
      return require('../../assets/img/italian_meatballs--s.jpg');
    case ImagePaths.pancake:
      return require('../../assets/img/pancake_mountain--s.jpg');
    case ImagePaths.kielbasa:
      return require('../../assets/img/kielbasa_skillet--s.jpg');
    default:
      return require('../../assets/img/queso_brat_scramble--s.jpg');
  }
};
