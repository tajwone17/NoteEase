

```markdown
# NoteBook - A Simple Note Management System
(Project of Web Development Essentials - Edge Course)
**NoteBook** is a simple web-based application that allows users to create, view, update, and delete notes. The project is designed with a user-friendly interface, making it easy to manage your notes with just a few clicks.

## Features

- **Create Notes**: Add new notes with a title and description.
- **View Notes**: Browse all the notes you’ve created.
- **Update Notes**: Edit the content of existing notes.
- **Delete Notes**: Remove unwanted notes from the system.

## Technologies Used

- **HTML5**: For structuring the content.
- **CSS3**: For styling and layout.
- **JavaScript**: For interactive functionality.
- **Node.js & Express.js**: For the backend API.
- **MySQL**: For the database.
- **Responsive Design**: The application is fully responsive and works seamlessly across devices of various screen sizes (from desktop to mobile).

## Installation

### 1. **Set up the Backend (Node.js/Express)**

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/notebook-project.git
   ```

2. Navigate to the `backend` folder:
   ```bash
   cd notebook-project/backend
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Set up the **MySQL database**:
   - Make sure you have MySQL installed and running.
   - Create a new database in MySQL named `noteease`.
   - You can use the following SQL commands to create the necessary table:
     ```sql
     CREATE DATABASE noteease;
     USE noteease;
     CREATE TABLE notes (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       description TEXT NOT NULL
     );
     ```

5. Configure the environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following content (modify the database credentials as needed):
     ```
     PORT=5000
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=noteease
     ```

6. Start the backend server:
   ```bash
   npm start
   ```

   This will start the backend server on `http://localhost:5000`.

### 2. **Set up the Frontend (HTML/CSS/JavaScript)**

1. Navigate to the `frontend` directory:
   ```bash
   cd notebook-project/frontend
   ```

2. Open `index.html` in your preferred web browser.

   The frontend will now be connected to the backend API and should be functional.

### 3. **Testing the Application**

- Open your browser and go to `http://localhost:5000`.
- You should be able to:
  - **Create a Note**: Click on the "Create" button, enter the title and description, and submit the form.
  - **View Notes**: Click on the "View" button to see a list of all notes.
  - **Update Notes**: Click on the "Update" button to modify a note.
  - **Delete Notes**: Click on the "Delete" button to remove a note.

### 4. **Troubleshooting**

- **CORS issues**: If you're facing CORS errors, ensure that the `cors` package is properly set up in the backend (`app.use(cors());`).
- **Database connection issues**: Verify that MySQL is running and the credentials in the `.env` file are correct.

Once everything is set up, you will have a fully functioning NoteBook app with backend (Node.js/Express) and frontend (HTML/CSS/JavaScript) connected to a MySQL database.

## Screenshots

![Image](https://github.com/user-attachments/assets/29cec606-66d9-4bbf-adf5-5cb0036bd03b)  ![  ![Image](https://github.com/user-attachments/assets/1910bb55-b7a2-4f81-be23-333bf14dde5d)Image](https://github.com/user-attachments/assets/e17f5b09-01c4-43dd-b046-6e967ec11440)  ![Image](https://github.com/user-attachments/assets/9858aa00-2962-4118-8c58-18bb0feebfc2)

## How to Use

1. **Create a Note**: Click on the "Create" button from the menu to add a new note. You will need to enter a title and description for the note.
   
2. **View Notes**: Click on the "View" button from the menu to see all the notes you have created. Each note will display its title and description.

3. **Update a Note**: Click on the "Update" button from the menu to modify any existing notes. Choose the note you want to update and make the necessary changes.

4. **Delete a Note**: Click on the "Delete" button from the menu to remove a note. Choose the note you want to delete and confirm the action.

## Contributing

Feel free to fork the project, submit issues, or create pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This README now includes all the necessary steps for setting up the database, backend, and frontend. You can follow these instructions to get the entire app running on your local machine.
