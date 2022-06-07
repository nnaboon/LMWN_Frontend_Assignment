import useAxios from "axios-hooks";
import { API_URL } from "config";

export const useTrips = () => {
  const [{ data: response, loading, error }, fire] = useAxios(
    {
      method: "GET",
    },
    { manual: true }
  );

  const execute = (keyword?: string) => {
    return fire({
      url: `${API_URL}/api/trips`,
      params: { keyword: keyword },
    });
  };

  return {
    data: response,
    loading: loading,
    error,
    execute,
  };
};
