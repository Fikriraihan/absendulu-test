"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";

// Define the shape of the JWT payload context
interface JWTContextProps {
  payload: any;
  setToken: (token: string) => void;
}

// Create a JWT context with undefined as the default value
const JWTContext = createContext<JWTContextProps | undefined>(undefined);

export const Provider = ({
  children,
  token,
}: {
  children: React.ReactNode;
  token?: string;
}) => {
  const [payload, setPayload] = useState<any>(null);

  const setToken = (token: string) => {
    try {
      const decodedPayload = jwtDecode(token);
      setPayload(decodedPayload);
    } catch (error) {
      console.error("Invalid JWT", error);
      setPayload(null);
    }
  };

  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <JWTContext.Provider value={{ payload, setToken }}>
        {children}
      </JWTContext.Provider>
    </QueryClientProvider>
  );
};

export const useJWT = () => {
  const context = useContext(JWTContext);
  if (!context) {
    throw new Error("useJWT must be used within a JWTProvider");
  }
  return context;
};

export default Provider;
