import React, { useEffect, useState } from "react";
import { db } from "../util/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Product from "../components/Product/Product";
import styled from "styled-components";

const ProductsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const productsCustom = [
  {
    id: 1,
    url: "https://d3el976p2k4mvu.cloudfront.net/medias/sys_master/h0a/h63/8968767143966.png?buildNumber=6a5d5327c8033d4b1417376cc70e2d177ab47054190c369be8e15b3d24e63dcb",
    title: "Voda",
    price: 40,
  },
  {
    id: 2,
    url: "https://d3el976p2k4mvu.cloudfront.net/medias/sys_master/hc9/hda/8988080439326.png?buildNumber=6a5d5327c8033d4b1417376cc70e2d177ab47054190c369be8e15b3d24e63dcb",
    title: "Coca cola",
    price: 249,
  },
  {
    id: 3,
    url: "https://d3el976p2k4mvu.cloudfront.net/medias/sys_master/hb0/heb/8968157200414.png?buildNumber=6a5d5327c8033d4b1417376cc70e2d177ab47054190c369be8e15b3d24e63dcb",
    title: "Plazma",
    price: 60,
  },
  {
    id: 4,
    url: "https://d3el976p2k4mvu.cloudfront.net/medias/sys_master/h5a/h90/8822113730590.png?buildNumber=6a5d5327c8033d4b1417376cc70e2d177ab47054190c369be8e15b3d24e63dcb",
    title: "Čokolada",
    price: 90,
  },
  {
    id: 5,
    url: "https://d3el976p2k4mvu.cloudfront.net/medias/sys_master/h67/h9c/8834679996446.png?buildNumber=6a5d5327c8033d4b1417376cc70e2d177ab47054190c369be8e15b3d24e63dcb",
    title: "Banane",
    price: 85,
  },
  {
    id: 6,
    url: "https://d3el976p2k4mvu.cloudfront.net/medias/sys_master/hd9/h56/8985724125214.png?buildNumber=6a5d5327c8033d4b1417376cc70e2d177ab47054190c369be8e15b3d24e63dcb",
    title: "Hrana za pse",
    price: 450,
  },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
      Products
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
