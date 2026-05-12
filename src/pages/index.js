import { getAllProducts } from '../lib/products';

export default function Home({ products }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Distribuidora Juárez</h1>
      <p style={{ textAlign: 'center' }}>Total de productos: {products.length}</p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        {products.map((product) => (
          <div key={product.slug} style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            borderRadius: '8px',
            backgroundColor: '#fff'
          }}>
            {product.image && (
              <img 
                src={product.image.startsWith('/') ? product.image : '/' + product.image} 
                alt={product.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
              />
            )}
            <h3>{product.title}</h3>
            <p><strong>Precio:</strong> ${product.price}</p>
            <p><strong>Categoría:</strong> {product.category}</p>
            <p>{product.body?.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = getAllProducts();
  return {
    props: {
      products,
    },
  };
}
