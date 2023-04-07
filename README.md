RandomUser Generator
This is a RandomUser generator application built with React and Laravel. The application fetches data from the API http://127.0.0.1:8000/api/user and saves it in the database.

Prerequisites
Before running the application, make sure you have the following installed on your system:

Node.js
NPM
Laravel
Installation
To install the application, follow these steps:

Clone the repository to your local machine using the command git clone https://github.com/your-username/randomuser-generator.git.
Navigate to the project directory using the command cd randomuser-generator.
Install the dependencies for the backend by running composer install.
Create a copy of the .env.example file and rename it to .env. Set the database details in the .env file.
Generate a new application key by running the command php artisan key:generate.
Run the migrations using the command php artisan migrate.
Seed the database with data from the API by running the command php artisan db:seed.
Install the dependencies for the frontend by running npm install.
Running the Application
To run the application, follow these steps:

Start the Laravel server by running the command php artisan serve.
Start the React development server by running the command npm start.
Open your web browser and navigate to http://localhost:3000.
Conclusion
That's it! You should now be able to run the RandomUser generator application on your local machine. If you encounter any issues, please don't hesitate to contact us.



