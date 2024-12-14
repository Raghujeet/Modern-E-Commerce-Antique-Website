import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { db } from './firebase';
import { UserProfile, Order, Product } from '../types';

export async function createUserProfile(userId: string, data: Partial<UserProfile>) {
  await setDoc(doc(db, 'users', userId), {
    ...data,
    favorites: [],
    orderHistory: [],
  });
}

export async function updateUserProfile(userId: string, data: Partial<UserProfile>) {
  await updateDoc(doc(db, 'users', userId), data);
}

export async function getUserProfile(userId: string) {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() as UserProfile : null;
}

export async function addToFavorites(userId: string, productId: number) {
  await updateDoc(doc(db, 'users', userId), {
    favorites: arrayUnion(productId),
  });
}

export async function removeFromFavorites(userId: string, productId: number) {
  await updateDoc(doc(db, 'users', userId), {
    favorites: arrayRemove(productId),
  });
}

export async function createOrder(userId: string, order: Omit<Order, 'id'>) {
  const ordersRef = collection(db, 'orders');
  const orderDoc = doc(ordersRef);
  
  await setDoc(orderDoc, {
    ...order,
    userId,
    id: orderDoc.id,
  });

  await updateDoc(doc(db, 'users', userId), {
    orderHistory: arrayUnion(orderDoc.id),
  });

  return orderDoc.id;
}

export async function getUserOrders(userId: string) {
  const q = query(collection(db, 'orders'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data() as Order);
}

export async function getFavoriteProducts(userId: string) {
  const userDoc = await getDoc(doc(db, 'users', userId));
  const userData = userDoc.data() as UserProfile;
  
  if (!userData?.favorites?.length) {
    return [];
  }

  const productsRef = collection(db, 'products');
  const q = query(productsRef, where('id', 'in', userData.favorites));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map(doc => doc.data() as Product);
}