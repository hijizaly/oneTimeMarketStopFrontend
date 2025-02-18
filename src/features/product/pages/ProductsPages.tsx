import {Navbar} from "../../../common/components";
import {useGetAllProducts} from "../useProduct.ts";
import {ProductType} from "../../../common/types/product.types.ts";
import styles from '../styles/Productpage.module.css';

const ProductsPages = () => {
    const allProducts = useGetAllProducts();
    let allProductsAvailable: ProductType[] = [];
    if (allProducts.isSuccess) {
        allProductsAvailable = allProducts.data.data.data;

        console.log("AP",allProductsAvailable)
    }

    return (

        <>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.heading}>All Products</h1>
                <div className={styles.grid}>
                    {allProducts.isSuccess ? (
                        allProductsAvailable.map((product) => (
                            <div key={product.id} className={styles.card}>
                                <img
                                    src="./assets/productPlaceHolder.webp"
                                    alt={product.name}
                                    className={styles.image}
                                />

                                <button className={styles.buyButton}>Buy</button>

                                <div className={styles.details}>
                                    <h2 className={styles.name}>{product.name}</h2>
                                    <p className={styles.price}>Price: ${product.price}</p>
                                    <p className={styles.quantity}>Quantity: {product.quantity}</p>
                                    <p
                                        className={`${styles.availability} ${
                                            product.availablty ? styles.available : styles.outOfStock
                                        }`}
                                    >
                                        {product.availablty ? 'Available' : 'Out of Stock'}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </>


    );
};

export default ProductsPages;