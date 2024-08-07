export interface Employee {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
  }

  export type RootStackParamList = {
    EmployeeDetails: { employee: Employee };
  };
  