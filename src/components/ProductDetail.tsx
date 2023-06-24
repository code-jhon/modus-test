import { motion } from 'framer-motion';
import { Product } from '../utils/entities';

type ProductDetailProps = {
  product: Product | null;
  onClose: () => void;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {

  const productDetailContent = (
    <>
      {  product !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 h-full w-full bg-gray-800 bg-opacity-50 z-50 flex justify-end items-middle"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg p-4 shadow-lg w-1/4"
          >
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-bold">${product.price}</p>
            <div className="flex justify-center">
              <div className="w-full px-4 mb-4">
                <div className="h-0 overflow-hidden relative aspect-w-1 aspect-h-1">
                  { product.images.length > 0 && product.images.map((image, index) => <img key={index} src={image} alt={product.title} className="absolute inset-0 w-full h-full object-cover" />) }
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );

  return productDetailContent;
};

export default ProductDetail;
