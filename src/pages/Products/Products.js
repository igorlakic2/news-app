import React, { useEffect, useState } from "react";
import { db } from "../../util/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Product from "../../components/Product/Product";
import styled from "styled-components";

const ProductsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // const addUser = async () => {
  //   await addDoc(productsCollectionRef, {
  //     firstName: "Test",
  //     lastName: "Test",
  //     email: "test@test.com",
  //     password: "test1234",
  //   });
  // };

  const editUser = async (values) => {
    // const userDoc = doc(db, 'users', id)
    // const newValues = {
    //   firstName: values.firstName,
    //   lastName: values.lastName,
    //   email: values.email,
    //   password: values.password
    // }
    // await updateDoc(userDoc, newValues)
  };

  const deleteUser = async (id) => {
    // const userDoc = doc(db, 'users', id)
    // await deleteDoc(userDoc)
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {/* <button onClick={addUser}>Add user</button> */}
      <ProductsDiv>
        {products.map((product) => (
          <Product
            key={product.id}
            url={product.url}
            title={product.title}
            price={product.price}
          />
        ))}
      </ProductsDiv>
    </div>
  );
};

export default Products;
