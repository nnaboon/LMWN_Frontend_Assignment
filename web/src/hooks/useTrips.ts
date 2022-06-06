import useAxios from "axios-hooks";

export const useTrips = () => {
  const [{ data: response, loading, error }, fire] = useAxios(
    {
      method: "GET",
      headers: { "Access-Control-Allow-Origin": "*" },
    },
    { manual: true }
  );

  const execute = (keyword?: string) => {
    return fire({
      url: `http://localhost:3001/api/trips`,
      params: { keyword: keyword },
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  };

  return {
    data: response,
    loading: loading,
    error,
    execute,
  };
};
