const productForm = document.getElementById("sub");
const apiUrl = "https://crud-a8hc.vercel.app/api/products";

sub.addEventListener("submit",async(e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email  = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    const description = document.getElementById("description").value;
    
    const newStudent = {name,email,college,description};


try{
    const response = await fetch(apiUrl , {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(newStudent),
    });

    if(response.ok){
        const result = await response.json();
        console.log("Student registered successfully:",result);
        alert("Student result successfully");
       productForm.reset();

    } else {
        const errorData = await response.json();
        console.error("Error registering student:",errorData.message);
        alert("Failed to register student:" + errorData.message);
    }
    
}catch(error){
    console.error("Error:",error);
    alert("error.please try again .");
}
});