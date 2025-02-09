# InstiManage - Comprehensive Institution Management System

InstiManage is an advanced, scalable institution management system designed to empower educational institutions by streamlining administrative processes, enhancing user experience, and providing actionable insights through powerful analytics and reporting. Whether managing schools, colleges, or universities, InstiManage delivers a centralized solution to manage institution onboarding, performance tracking, ticketing, and more.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
    - [Dashboard Overview](#dashboard-overview)
    - [Institution Management](#institution-management)
    - [Support Ticket Management](#support-ticket-management)
    - [Notifications](#notifications)
    - [Quick Access](#quick-access)
    - [Reports](#reports)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

---

## Overview

InstiManage is designed to be a one-stop solution for institutions looking to streamline their administrative tasks. The platform provides a powerful suite of tools for managing institutions, tracking performance, resolving support tickets, and more. It brings real-time data, intuitive interfaces, and customizable workflows to enhance the efficiency of educational management.

---

## Features

### Dashboard Overview

The **InstiManage** dashboard offers real-time insights into key metrics for efficient monitoring and decision-making.

- **Total Institutions**: Displays the count of institutions onboarded, categorized into schools, colleges, and universities.
- **Active Institutions**: Tracks institutions currently using active subscriptions or plans.
- **New Institutions**: Highlights the institutions that joined within the current month.
- **Support Tickets**: Quick view of the active support tickets raised by institutions.
- **Recent Activities**: Shows a log of the most recent actions such as new institution additions, payments, and plan upgrades.

### Institution Management

Manage detailed data for each institution and perform bulk operations:

- **Institution Detail Page**: View institution-specific data, including contact info, plan type, payment history, and subscriptions.
- **Top Performing Institutions**: Showcase institutions based on KPIs such as student enrollment, engagement, and payment behavior.
- **Bulk Actions**: Activate, deactivate, delete, or export data for multiple institutions at once.

### Support Ticket Management

Effectively manage and resolve issues reported by institutions:

- **Ticket Detail View**: View detailed information about each ticket, including status, priority, and issue descriptions.
- **Bulk Actions**: Perform actions on multiple tickets such as closing, reassigning, or adjusting priorities.
- **Ticket Analytics Dashboard**: Visual graphs showing ticket trends, type breakdown, and status distribution to identify areas for improvement.

### Notifications

Stay updated with actionable notifications and alerts:

- **Notification Types**: Includes payment reminders, ticket status updates, system alerts, and administrative reminders.
- **Customizable Preferences**: Tailor notification settings, including email and in-app notifications.
- **Notification Detail Page**: View each notification's full details and options to mark as read, archive, or delete.

### Quick Access

Quick access links for seamless navigation:

- **Add New Institution**: Easily onboard a new institution using a user-friendly form.
- **View All Institutions**: View a comprehensive list of institutions with advanced search and filtering options.
- **View Support Tickets**: Access a ticket management page with details of all open and resolved tickets.

### Reports

Generate insightful reports to track institution activities and performance:

- **Institution Activity Reports**: View the number of active, inactive, and newly added institutions.
- **Payment Reports**: Detailed breakdown of all payments, including successful, pending, and failed transactions.
- **User Activity Reports**: Track active and new users, engagement rates, and overall usage statistics.
- **Subscription Reports**: Monitor subscription statuses, upcoming renewals, and expired plans.

---

## Installation

To install and run **InstiManage** locally, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/instimanage.git
cd instimanage
```

### 2. Install Dependencies
Install the required dependencies with npm:

```bash
npm install
```

### 3. Set up the Database
Create a .env file in the root directory and add your database credentials:

```bash
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

### 4. Run Database Migrations
Ensure your database schema is up to date by running the migrations:

```bash
npm run migrate
```

### 5. Start the Server
Launch the development server:

```bash
npm start
```

### 6. Access the Application
Navigate to http://localhost:3000 in your browser to access the application.

## Usage

### Admin Dashboard

- **Manage Institutions**: View, add, edit, and manage institution data.
- **Support Ticket Management**: Resolve issues raised by institutions efficiently.
- **Generate Reports**: Create detailed reports for institution performance, user engagement, and payments.
- **Notification Management**: Control and configure notifications for administrative updates.

### Institution Dashboard

- **Student Management**: Handle student profiles, attendance, grades, and more.
- **Teacher Management**: Track teacher schedules, class assignments, and performance.
- **Class Management**: Manage class schedules, assignments, and monitor student progress.
- **Parent Communication**: Use the built-in messaging system to communicate with parents.

### Teacher Dashboard

- **Class & Assignment Management**: Manage class schedules, assignments, attendance, and grades.
- **Track Student Performance**: Monitor student progress, attendance, and behavior.
- **Parent Communication**: Send updates and messages to parents via the built-in communication system.

### Student Dashboard

- **View Class Schedules**: Check class schedules, assignments, and study materials.
- **Track Assignments & Exams**: Keep track of assignments, upcoming exams, and submit work.
- **Monitor Grades**: View grades, feedback, and progress reports.

---

## Contributing

We welcome contributions to make **InstiManage** even better! To contribute, follow these steps:

1. **Fork the Repository**  
   Fork the repository to your own GitHub account.

2. **Create a New Branch**  
   Create a new branch to work on your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**
   Make your changes and commit them:
   ```bash
   git commit -m "Add feature/bug fix description"
   ```

4. **Push Changes to Your Fork**
   Push your changes to your forked repository:
   ```bash
    git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   Open a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For questions or feedback, you can reach us through:

- **Email**: [lubnafathima275@gmail.com](mailto:lubnafathima275@gmail.com)
- **GitHub**: [https://github.com/lubnafathima/instimanage](https://github.com/yourusername/instimanage)









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
