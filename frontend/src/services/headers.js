export default function useCreateHeaders() {
    const auth = JSON.parse(localStorage.getItem("userData"))?.token;
    const config = {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
  return config;
}
