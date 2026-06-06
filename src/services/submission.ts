import API_URL from "./api";

export const submitVideo =
  async (
    topic: number,
    student: number,
    video_url: string
  ) => {
    const response =
      await fetch(
        `${API_URL}/submissions/`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            topic,
            student,
            video_url,
            status: "pending",
          }),
        }
      );

    return response.json();
  };

export const approveSubmission =
  async (
    id: number
  ) => {
    const response =
      await fetch(
        `${API_URL}/submissions/${id}/`,
        {
          method: "PATCH",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            status: "approved",
          }),
        }
      );

    return response.json();
  };