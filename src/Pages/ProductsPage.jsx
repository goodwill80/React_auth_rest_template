import ProductOnDisplayContainer from '../Components/ProductOnDisplayContainer';
function ProductsPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen h-auto justify-center items-center mb-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold tracking-wider text-gray-700 pb-10 pt-10">
            Our Products
          </h1>
        </div>
        <ProductOnDisplayContainer />
      </div>
    </>
  );
}

export default ProductsPage;
