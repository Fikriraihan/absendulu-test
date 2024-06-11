const BASE_URI = process.env.BASE_API_URL;

export const registerUser = async (values: any) => {
  const { username, email, password } = values;
  const res = fetch(`${BASE_URI}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  return res;
};

export const loginUser = async (values: any): Promise<void> => {
  const { email, password } = values;
  try {
    const response = await fetch(`${BASE_URI}/users/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    // Additional logic if needed (e.g., storing tokens)
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  const res = await fetch("http://localhost:8000/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return res;
};
