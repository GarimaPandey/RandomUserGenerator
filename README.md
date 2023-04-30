# Random User Generator

## Set up

In the project directory, cd into client and you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Backend
Set up a LAMP stack using MAMP or Docker
## Set up

In the project directory, cd into server and you can run:

Migrate the database using this command:
### `php artisan migrate`

Once the DB is sucessfully migrated run the seed command to seed the database with the data coming from the API 
### `php artisan db:seed`


serve the website on your local server using the following command
### `php artisan serve`

Runs the app in the development mode.\
Open [http://127.0.0.1:8000](http://127.0.0.1:8000) to view it in your browser.
#### Dashboard Page:
![image](https://user-images.githubusercontent.com/20389942/230645330-81360f6d-4c25-4c31-a1ce-bb39aeaa8f94.png)
#### Users Page:
#### Displays users
#### Should be paginated
#### Filter users by any part of their full name
#### Recently viewed button/link to quickly go back to the last viewed person
![image](https://user-images.githubusercontent.com/20389942/230645378-e26ffb07-c5f4-42f6-acdb-c094437b5984.png)
#### User Profile Page:
#### Information from the user object provided by the API
#### Formated dates so they are pretty and easy to read
#### Displaying time remaining until the person&#39;s birthday.
![image](https://user-images.githubusercontent.com/20389942/230645424-67b6cd48-5384-4d3c-ba4d-36dbdc8d5cf2.png)
