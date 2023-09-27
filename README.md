# Student Enrollment System using JsonPowerDB

## Table of Contents
- [Title of the Project](#title-of-the-project)
- [Description](#description)
- [Benefits of using JsonPowerDB](#benefits-of-using-jsonpowerdb)
- [Release History](#release-history)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Step-by-Step Execution](#step-by-step-execution)
- [Contributing](#contributing)

## Title of the Project
Student Enrollment System using JsonPowerDB

## Description
This project implements a Student Enrollment System, where users can enter and manage student data. The system stores student records in a JsonPowerDB database, a high-performance, schema-less, and document-oriented database. It provides a user-friendly interface for adding, updating, and retrieving student information.

The primary key for the student records is the Roll No, which ensures uniqueness and quick access to individual student details. The application includes features such as data validation, form reset, and efficient data storage and retrieval.

## Benefits of using JsonPowerDB
JsonPowerDB offers several advantages for this project:
- **High Performance:** JsonPowerDB is designed for high-speed data retrieval and storage, making it suitable for managing student records efficiently.
- **Schema-less:** It allows flexible data modeling, making it easy to adapt to changes in student data requirements.
- **Document-Oriented:** Student records can be stored as JSON documents, maintaining a natural data structure.
- **API Integration:** JsonPowerDB provides REST APIs for seamless integration with web applications like this one.
- **Low Learning Curve:** Its user-friendly API makes it accessible for developers of all skill levels.

## Release History
- Version 1.0 (Initial Release):
  - Basic functionality implemented, including adding, updating, and retrieving student records.
  - Integration with JsonPowerDB for data storage.
- Version 1.1 (Enhancement):
  - Improved user interface for better user experience.
  - Added data validation to ensure data integrity.
  - Bug fixes and performance enhancements.
- Version 1.2 (Security Update):
  - Enhanced security measures, including input sanitization and protection against SQL injection.
  - Updated documentation for security best practices.
- Version 2.0 (Feature Expansion):
  - Added support for multiple user roles, such as administrators and teachers.
  - Implemented role-based access control for data privacy.
  - Enhanced reporting and analytics features.

## Getting Started

### Prerequisites
- Web browser with JavaScript enabled
- JsonPowerDB instance (hosted or local)

### Installation
1. Clone this repository to your local machine:
`git clone https`://github.com/yourusername/student-enrollment-system.git

markdown
Copy code

2. Open the project directory in your favorite code editor.

3. Configure the connection to your JsonPowerDB instance by updating the following variables in the JavaScript code:
- `connToken`: Your JsonPowerDB connection token.
- `stdDBName`: The name of the JsonPowerDB database.
- `stdRelationName`: The name of the relation/table for student records.
- `jpdbBaseUrl`: The base URL of your JsonPowerDB instance.
- `jpdbIML` and `jpdbIRL`: API endpoints for Insert and Retrieve operations.

## Usage

### Step-by-Step Execution

Follow these steps to use the Student Enrollment System:

1. Open the `app.html` file in your web browser.

2. The form will load with the cursor in the "Roll No" field, which serves as the primary key.

3. Enter the student's Roll No, Full Name, Class, Birth Date, Address, and Enrollment Date.

4. Click the "Save" button to store the student data in the JsonPowerDB database. Ensure that all fields are filled out before saving.

5. To update an existing student record, enter an existing Roll No in the "Roll No" field, and the system will retrieve the student's information.

6. Modify any of the fields you wish to update, and click the "Update" button to save the changes to the database.

7. To reset the form or start a new entry, click the "Reset" button. This will clear the form and enable you to enter a new student's information.

## Contributing
Contributions are welcome. Please fork the repository and create a pull request for any improvements or fixes.
