const api = () => fetch('https://fakestoreapi.com/products')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log("Fetched Data:", data);
    console.log(JSON.stringify(data, null, 2));
    return data;
  });

export default api;