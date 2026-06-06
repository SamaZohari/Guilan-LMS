import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type UserType = {
  id: number;
  full_name: string;
  email: string;
  role: string;
};

const AuthContext =
  createContext<any>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<UserType | null>(
      null
    );

  const [role, setRole] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const storedUser =
      localStorage.getItem(
        "user"
      );

    if (storedUser) {
      const parsed =
        JSON.parse(storedUser);

      setUser(parsed);
      setRole(parsed.role);
    }

    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem(
      "user"
    );

    setUser(null);
    setRole("");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);