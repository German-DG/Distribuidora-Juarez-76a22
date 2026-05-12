import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const productsDirectory = path.join(process.cwd(), 'src/content/productos');

export function getAllProducts() {
  if (!fs.existsSync(productsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(productsDirectory);
  
  const products = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(productsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      price: data.price,
      category: data.category,
      image: data.image,
      body: data.body,
    };
  });
  
  return products;
}
