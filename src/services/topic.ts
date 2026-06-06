import API_URL from "./api";

export const getTopics = async () => {
  const response = await fetch(
    `${API_URL}/topics/`
  );

  return response.json();
};

export const createTopic = async (
  title: string,
  assigned_to: number
) => {
  const response = await fetch(
    `${API_URL}/topics/`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        title,
        assigned_to,
      }),
    }
  );

  return response.json();
};