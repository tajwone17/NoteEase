window.onload = async function () {
  try {
    // Fetch the list of notes from the backend API
    const response = await fetch("http://localhost:5000/notes");
    const notes = await response.json();

    if (response.ok) {
      // Populate the select dropdown with notes
      const noteSelect = document.getElementById("note-id");
      notes.forEach((note) => {
        const option = document.createElement("option");
        option.value = note.id;
        option.textContent = `${note.title} (ID: ${note.id})`;
        noteSelect.appendChild(option);
      });
    } else {
      alert("Failed to fetch notes");
    }
  } catch (err) {
    console.error("Error fetching notes:", err);
    alert("An error occurred while fetching the notes.");
  }
};

// Handle form submission for deleting a note
document.getElementById("delete-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form from reloading the page

  const noteId = document.getElementById("note-id").value;

  if (!noteId) {
    alert("Please select a note to delete.");
    return;
  }

  try {
    // Send a DELETE request to delete the selected note
    const response = await fetch(`http://localhost:5000/notes/${noteId}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (response.ok) {
      alert(`Note with ID: ${noteId} deleted successfully.`);
      window.location.href = "view.html"; // Redirect to the view page after deletion
    } else {
      alert(`Error: ${result.error}`);
    }
  } catch (err) {
    console.error("Error deleting note:", err);
    alert("An error occurred while deleting the note.");
  }
});
