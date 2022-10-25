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

const Public = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addUser = async () => {
    await addDoc(usersCollectionRef, {
      firstName: "Test",
      lastName: "Test",
      email: "test@test.com",
      password: "test1234",
    });
  };

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
    getUsers();
  }, []);

  return (
    <div>
      Public
      <button onClick={addUser}>Add user</button>
    </div>
  );
};

export default Public;
