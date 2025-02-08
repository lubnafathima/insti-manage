# InstiManage - Institution Management System

InstiManage is a comprehensive institution management system designed to streamline administrative tasks, manage institutions, and provide detailed analytics and reports. The system is built to handle various aspects of institution management, including onboarding, active institution tracking, support ticket management, and performance monitoring.

## Features

### Dashboard Overview
- **Total Institutions**: Displays the total number of institutions onboarded, categorized by schools, colleges, and universities.
- **Active Institutions**: Shows the number of institutions with active plans.
- **New Institutions**: Displays the number of institutions that joined in the current month.
- **Support Tickets**: Tracks the number of support tickets raised by institutions.
- **Recent Activities**: Provides a table view of recent administrative activities, including institution additions, payment processing, and plan changes.

### Institution Management
- **Institution Detail Page**: Detailed information about each institution, including plan type, contact info, payment history, and active subscriptions.
- **Top Performing Institutions**: Highlights institutions based on criteria such as high enrollment rates, frequent logins, and on-time payments.
- **Bulk Actions**: Perform bulk actions like deleting, exporting, or activating/deactivating multiple institutions.

### Support Ticket Management
- **Ticket Detail View**: Detailed view of each support ticket, including issue description, priority, status, and communication history.
- **Bulk Actions**: Close, reassign, or change the priority of multiple tickets at once.
- **Ticket Analytics Dashboard**: Visual graphs showing ticket trends, breakdown by issue type, and status.

### Notifications
- **Notification Types**: Payment reminders, ticket updates, and system alerts.
- **Notification Detail Page**: Detailed view of each notification, with options to mark as read, archive, or delete.
- **Customizable Notifications**: Manage notification preferences, including email and in-app notifications.

### Quick Access
- **Add New Institution**: Redirects to the "Add Institution" form.
- **View All Institutions**: Redirects to a table with filters for institution type, plan type, and payment status.
- **View Support Tickets**: Redirects to the tickets page where all active and resolved support tickets are displayed.

### Reports
- **Institution Activity Reports**: Insights into new institutions added, active/inactive institutions, and overall performance.
- **Payment Reports**: Detailed view of payment transactions, including successful, pending, and failed payments.
- **User Activity Reports**: Metrics on active users, new users, and user engagement.
- **Subscription Reports**: View subscription statuses, renewals, and expired plans.

## Installation

To install and run InstiManage locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/instimanage.git
   cd instimanage
Install dependencies:

bash
Copy
npm install
Set up the database:

Create a .env file in the root directory and add your database credentials:

env
Copy
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
Run migrations:

bash
Copy
npm run migrate
Start the server:

bash
Copy
npm start
Access the application:

Open your browser and navigate to http://localhost:3000.

Usage
Admin Dashboard
Institutions: View, add, edit, and manage institutions.

Support Tickets: Manage and resolve support tickets raised by institutions.

Reports: Generate detailed reports on institution activity, payments, and user engagement.

Notifications: Manage system-wide notifications and alerts.

Institution Dashboard
Student Management: Add, edit, and manage student profiles, attendance, and academic records.

Teacher Management: Manage teacher profiles, assign classes, and track performance.

Class Management: Manage class schedules, assignments, and student performance.

Parent Communication: Communicate with parents, schedule meetings, and send updates.

Teacher Dashboard
Class Management: Manage class schedules, attendance, and assignments.

Student Performance: Track student grades, attendance, and behavior.

Parent Communication: Send messages and updates to parents.

Student Dashboard
Classes: View class schedules, assignments, and study materials.

Assignments & Exams: Track upcoming assignments and exams, submit work, and view grades.

Grades: View detailed grade breakdowns and teacher feedback.

Contributing
We welcome contributions from the community! To contribute to InstiManage, follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix:

bash
Copy
git checkout -b feature/your-feature-name
Commit your changes:

bash
Copy
git commit -m "Add your commit message here"
Push your changes to the branch:

bash
Copy
git push origin feature/your-feature-name
Open a pull request on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or feedback, please reach out to us at lubnafathima275@gmail.com

InstiManage - Simplifying Institution Management.


<!-- 
TO DO:

- go to routes/RoleProtectedRoute
Make sure you change back to original code

- Change the admin codes to styleComponent

- create profile page

- add notification

- google sign in

- dynamic code

 -->
