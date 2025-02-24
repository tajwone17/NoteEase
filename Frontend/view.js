// Fetch all notes when the page loads
window.onload = async function () {
  try {
    // Fetch notes from the backend API
    const response = await fetch("http://localhost:5000/notes");
    const notes = await response.json();

    if (response.ok) {
      // Display each note with its ID, title, and description
      const notesContainer = document.getElementById("notes-container");
      notesContainer.innerHTML = ""; // Clear any existing notes

      notes.forEach((note) => {
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");

        noteElement.innerHTML = `
            <h3>Note ID: ${note.id}</h3>
            <h4>${note.title}</h4>
            <p>${note.description}</p>
          `;

        notesContainer.appendChild(noteElement); // Add each note to the container
      });
    } else {
      alert("Failed to fetch notes");
    }
  } catch (err) {
    console.error("Error fetching notes:", err);
    alert("An error occurred while fetching the notes.");
  }
};
