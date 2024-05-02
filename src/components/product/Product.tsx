import React, {FC} from 'react';


export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category:string,
    thumbnail: string,
    images: string[]
}
export type IProductTypeProps = IProductProps & { children?: React.ReactNode};

const Product : FC <IProductTypeProps> = ({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}) => {
    return (
        <div>
<h2>{id}. {title}. {description}. {price}. {discountPercentage}. {rating}. {stock}. {brand}. {category}. {thumbnail}</h2>
        <div>
            {
                images.map((image,index)=><img key={id} src={image} alt={title}/>)
            }
        </div>

        </div>
    );
};

export default Product;