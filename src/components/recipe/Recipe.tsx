import React, {FC} from 'react';

interface IProps {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: string[],
}

type ITypeProps = IProps & {children?: React.ReactNode}

const Recipe: FC<ITypeProps> = ({name, mealType, cuisine, instructions}) => {
    return (
        <div>
<h2>{name}. {mealType}. {cuisine}</h2>
        </div>
    );
};

export default Recipe;