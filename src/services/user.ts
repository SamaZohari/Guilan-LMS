import API_URL from "./api";

export const getStudents =
  async () => {
    const response =
      await fetch(
        `${API_URL}/users/students/`
      );

    return response.json();
  };