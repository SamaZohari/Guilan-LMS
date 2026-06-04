import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../services/firebase";

const AuthContext =
  createContext<any>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<User | null>(null);

  const [role, setRole] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (firebaseUser) => {
          if (firebaseUser) {
            const snapshot =
              await getDoc(
                doc(
                  db,
                  "users",
                  firebaseUser.uid
                )
              );

            if (
              snapshot.exists()
            ) {
              setRole(
                snapshot.data()
                  .role
              );
            }

            setUser(
              firebaseUser
            );
          } else {
            setUser(null);
            setRole("");
          }

          setLoading(false);
        }
      );

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth =
  () =>
    useContext(
      AuthContext
    );