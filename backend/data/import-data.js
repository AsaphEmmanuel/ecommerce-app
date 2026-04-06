import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import { connectDB } from '../config/db.js';
import Product from '../models/product.model.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await connectDB();

const products = JSON.parse(
  await fs.readFile(`${__dirname}/products.json`, 'utf-8'),
);

const importProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log('Products Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyProducts = async () => {
  try {
    await Product.deleteMany();

    console.log('Products Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-i') {
  importProducts();
} else if (process.argv[2] === '-d') {
  destroyProducts();
}
