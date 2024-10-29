
        const productTable = document
          .getElementById("form-table")
          .getElementsByTagName("tbody")[0];
  
        const apiUrl = "https://crud-a8hc.vercel.app/api/products";
        const fetchProducts = async () => {
          try {
            const response = await fetch(apiUrl);
            const products = await response.json();
  
            productTable.innerHTML = "";
  
            products.map((product) => {
              const row = productTable.insertRow();
  
              row.innerHTML = `
                  <td>${product.name}</td>
                  <td>${product.email}</td>
                  <td>${product.college}</td>
                  <td>${product.description}</td>
                  <td><button class=delete onclick="deleteProduct('${product._id}')">Delete</button></td>

              `;
            });
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
  
        //Delete
        const deleteProduct = async (id) => {
          if (confirm("Are you sure you want to delete this student?")) {
            try {
              const response = await fetch(`${apiUrl}/${id}`, {
                method: "DELETE",
              });
  
              if (response.ok) {
                alert("Student deleted successfully!");
                fetchProducts(); 
              } else {
                alert("Failed to delete student.");
              }
            } catch (error) {
              console.error("Error deleting student:", error);
            }
          }
        };
  
       
        fetchProducts();
      