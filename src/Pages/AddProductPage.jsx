import ProductAddForm from '../Components/ProductAddForm';

function AddProductPage() {
  return (
    <div className="flex flex-col min-h-full h-[75vh] justify-center items-center">
      <h1 className="text-center text-4xl tracking-widest text-green-800 font-bold mt-8">
        Add new product
      </h1>
      <ProductAddForm />
    </div>
  );
}

export default AddProductPage;
