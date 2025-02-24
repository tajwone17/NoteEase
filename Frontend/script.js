// Navigation function
function navigateTo(page) {
  window.location.href = page;
}

document
  .getElementById("create-note-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Get values from the form
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();

    // Basic validation
    if (!title || !description) {
      alert("Please fill in both the title and description.");
      return;
    }

    const noteData = { title, description };
    console.log("Form data:", noteData); // Debugging: log form data

    try {
      // Send the data to the backend
      const response = await fetch("http://localhost:5000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      });

      const result = await response.json();
      console.log("Response from server:", result);

      // Check if the request was successful
      if (response.ok) {
        alert("Note created successfully! ");
        document.getElementById("create-note-form").reset();
        navigateTo("view.html"); // Redirect after success
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (err) {
      console.error("Error creating note:", err);
      alert("An error occurred while creating the note.");
    }
  });
