
# Employee Management App

This is a React Native application to manage employee data, including creating, updating, and deleting employee records. The app interfaces with an external API to perform CRUD operations.

## Features

- List employees
- Create a new employee
- Edit employee details
- Delete an employee
- Search employees

## Installation

To run this project, ensure you have the following installed:

- Node.js
- Yarn (preferred) or npm
- Expo CLI

Clone the repository and install the dependencies:

```bash
git clone <repository_url>
cd employeeApp
yarn install
```

## Running the App

To run the app in the development mode:

```bash
 yarn android: for android emulator
 yarn ios: for ios simulator
 yarn start: for both with the following command

 Both require an expo Go app.
```

This will start the Expo development server. You can run the app on an Android or iOS simulator, or on a physical device using the Expo Go app.

## Folder Structure

- `App.tsx`: Main entry point of the application.
- `src/`: Contains the source code for the app.
- `types.ts`: TypeScript types used in the app.
- `app.json`: Expo configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `.prettierrc.json`: Prettier configuration file.
- `.gitignore`: Specifies files to be ignored by git.
- `package.json`: Lists dependencies and scripts.
- `yarn.lock`: Yarn lockfile to ensure consistent dependency versions.

## Screenshots

### Employee List

![Employee List](Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-12%20at%2017.50.15.png)

This screen shows a list of all employees with options to edit or delete each employee.

### Create Employee

![Create Employee](Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-12%20at%2017.50.04.png)

This screen allows the user to create a new employee by entering the name, salary, and age.

### Edit Employee

![Edit Employee](Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-12%20at%2017.49.55.png)

This screen allows the user to edit the details of an existing employee.

### Search Employee

![Search Employee](Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-12%20at%2017.50.15.png)

This screen allows the user to search for employees by name.

### Error Saving Employee

![Error Saving Employee](Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20Max%20-%202024-07-12%20at%2017.32.33.png)

This screen shows an error message when there is a failure to save an employee. The error message "Request failed with status code 429" indicates that the application has hit the rate limit for API requests.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request. Make sure to follow the coding standards and include tests for any new features or bug fixes.

## License

This project is licensed under the MIT License.

