// apiService.js
export const fetchAllData = async () => {
  const response = await fetch(
    "https://6709efecaf1a3998baa2a44f.mockapi.io/hotel/lodgify"
  ); 
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

console.log(fetchAllData());
