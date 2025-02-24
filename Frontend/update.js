document
  .getElementById("update-note-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    // Get values from the form
    const noteId = document.getElementById("note-id").value.trim();
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();

    // Basic validation
    if (!noteId || !title || !description) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedNote = { title, description };

    try {
      // Send the data to the backend
      const response = await fetch(`http://localhost:5000/notes/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNote),
      });

      const result = await response.json();

      // Check if the request was successful
      if (response.ok) {
        alert(`Note updated successfully!`);
        // Optionally reset form fields
        document.getElementById("update-note-form").reset();
        // Redirect after success (optional)
        window.location.href = "view.html"; // For example, redirect to the "View" page
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (err) {
      console.error("Error updating note:", err);
      alert("An error occurred while updating the note.");
    }
  });
