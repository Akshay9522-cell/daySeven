'use client';
import { useState, useEffect } from 'react';
import { displayProduct } from '../../../actions/displayProduct';
import { deletePro } from '../../../actions/deletePro';
import { updateProduct } from '../../../actions/updateProduct';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, Toaster } from 'react-hot-toast';

export default function DisplayProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await displayProduct();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handlePro = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      image: product.image,
    });
    setShow(true);
  };

  const handleSave = async () => {
    try {
      let imageUrl = formData.image;
  
      if (formData.imageFile) {
        const uploadData = new FormData();
        uploadData.append('file', formData.imageFile);
        uploadData.append('upload_preset', 'akshay_a'); // from Cloudinary settings
  
        const res = await fetch('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', {
          method: 'POST',
          body: uploadData,
        });
  
        const data = await res.json();
        imageUrl = data.secure_url;
      }
  
      await updateProduct(selectedProduct.id, {
        ...formData,
        price: String(formData.price),
        image: imageUrl,
      });
  
      toast.success('Product updated!');
  
      const updated = await displayProduct();
      setProducts(updated);
    } catch (err) {
      console.error(err);
      toast.error('Failed to update product');
    }
  };
  

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">Error: {error.message}</p>;

  return (
    <>
      <Toaster />

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="space-y-3">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Product Name"
            />
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Category"
            />
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Description"
            />
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Price"
            />
            <input
             type="file"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, imageFile: e.target.files[0] })}
               className="w-full px-3 py-2 border rounded"
/>

          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Product Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Delete</th>
              <th className="px-4 py-2 border">Update</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{e.name}</td>
                <td className="px-4 py-2 border">{e.category}</td>
                <td className="px-4 py-2 border">{e.description}</td>
                <td className="px-4 py-2 border">₹{e.price}</td>
                <td className="px-4 py-2 border">
                  <img src={e.image} alt={e.name} className="w-20 h-20 object-cover rounded" />
                </td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => deletePro(e.id)}
                    className="p-1 hover:bg-red-100 rounded"
                  >
                    <img src="/images/delete.jpg" alt="Delete" className="w-6 h-6" />
                  </button>
                </td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => handlePro(e)}
                    className="p-1 hover:bg-blue-100 rounded"
                  >
                    <img src="/images/igp.png" alt="Edit" className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
