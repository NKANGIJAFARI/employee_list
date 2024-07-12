![Simulator Screenshot - iPhone 15 Pro Max - 2024-07-12 at 17 50 15](https://github.com/user-attachments/assets/b71b32d7-e07b-4611-9ca2-b8f05ff2ff20)
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


![Simulator Screenshot - iPhone 15 Pro Max - 2024-07-12 at 17 50 04](https://github.com/user-attachments/assets/8857902b-b81b-40e4-9ca4-05c3d11ad32a)

This screen shows a list of all employees with options to edit or delete each employee.

### Create Employee
![Simulator Screenshot - iPhone 15 Pro Max - 2024-07-12 at 17 50 01](https://github.com/user-attachments/assets/482bcc27-0cf0-4067-bd2b-a08458dca9d5)


This screen allows the user to create a new employee by entering the name, salary, and age.

### Edit Employee
![Simulator Screenshot - iPhone 15 Pro Max - 2024-07-12 at 17 49 55](https://github.com/user-attachments/assets/3dc449fa-1df4-47a1-b971-441511b9862f)


This screen allows the user to edit the details of an existing employee.

### Search Employee
![Simulator Screenshot - iPhone 15 Pro Max - 2024-07-12 at 17 50 15](https://github.com/user-attachments/assets/914a2eb1-bf37-44bd-a1d3-3ff59cf6be05)


This screen allows the user to search for employees by name.

### Error Saving Employee
![Simulator Screenshot - iPhone 15 Pro Max - 2024-07-12 at 17 32 33](https://github.com/user-attachments/assets/f63e07c8-6046-4cfd-91d2-a1b0716007c3)


This screen shows an error message when there is a failure to save an employee. The error message "Request failed with status code 429" indicates that the application has hit the rate limit for API requests.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request. Make sure to follow the coding standards and include tests for any new features or bug fixes.

## License

This project is licensed under the MIT License.

