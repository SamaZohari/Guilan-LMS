import API_URL from "./api";

export const registerUser = async (
  full_name: string,
  email: string,
  password: string,
  role: string
) => {
  const response = await fetch(
    `${API_URL}/users/register/`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        full_name,
        email,
        password,
        role,
      }),
    }
  );

  return response.json();
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const response = await fetch(
    `${API_URL}/users/login/`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  return response.json();
};