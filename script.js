document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const total = document.getElementById("total").value;

    // Create a data object
    const formData = {
        name: name,
        email: email,
        product: product,
        quantity: quantity,
        total: total
    };

    // Send data to Google Apps Script Web App URL
    fetch("https://script.google.com/macros/s/AKfycbzLSkZVzjnq7Ym_GwU_EBYR-p-kRkebS13c_9dVeYsVnEx7oYjI8pmihtzkAS-HJW1o/exec", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        product: document.getElementById("product").value,
        quantity: document.getElementById("quantity").value,
        total: document.getElementById("total").value
    }),
    mode: "cors" // Active le mode CORS pour éviter les erreurs
})
.then(response => response.json())
.then(data => {
    if (data.result === "success") {
        document.getElementById("message").innerText = "Commande envoyée avec succès !";
        document.getElementById("orderForm").reset();
    } else {
        document.getElementById("message").innerText = "Erreur lors de l'envoi.";
    }
})
.catch(error => {
    document.getElementById("message").innerText = "Erreur de connexion au serveur.";
    console.error("Erreur:", error);
});

});
