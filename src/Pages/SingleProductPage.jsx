import SingleProduct from '../Components/SingleProduct';
import { useParams } from 'react-router-dom';

function SingleProductPage() {
  const { id } = useParams();
  return (
    <div>
      <SingleProduct id={id} />
    </div>
  );
}

export default SingleProductPage;
