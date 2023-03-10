import ProductOnDisplayItem from './ProductOnDisplayItem';
import { useSignInGlobalContext } from '../Context/SignInContext';

function ProductOnDisplayContainer() {
  const { products } = useSignInGlobalContext();
  return (
    <div className="pb-16">
      <div className="grid md:grid-cols-2 md:gap-2">
        {products.map((product, index) => (
          <ProductOnDisplayItem
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            // img={product.img}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductOnDisplayContainer;
