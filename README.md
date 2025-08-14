# Job Listing App

A modern job listing application built with **React**, **React Router DOM**, **TailwindCSS**, and **JSON Server** (mock backend).  
It allows users to **view, add, edit, and delete job listings** with a responsive UI and toast notifications.

---

## 🚀 Features

- 🏠 **Home Page** with recent jobs
- 📄 **Job Listings Page** (all jobs)
- ➕ **Add Job** form with validation
- ✏️ **Edit Job** functionality
- ❌ **Delete Job** option
- 🔄 Dynamic routing with **React Router DOM v6**
- 🎨 Styled using **TailwindCSS**
- ⚡ **Mock backend** using JSON Server
- 🔔 **Toast notifications** for success messages
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router DOM, TailwindCSS
- **Backend (Mock)**: JSON Server
- **Other Libraries**:
  - `react-toastify` – notifications
  - `react-spinners` – loading spinner

---

## 📂 Project Structure

src/
│── App.jsx # Main app with routes and API functions
│── pages/
│ ├── HomePage.jsx # Home with recent jobs
│ ├── JobsPage.jsx # All jobs list
│ ├── JobPage.jsx # Single job details
│ ├── AddJobPage.jsx # Add job form
│ ├── EditJobPage.jsx # Edit job form
│ ├── NotFoundPage.jsx # 404 page
│ └── layouts/
│ └── MainLayOut.jsx # Main layout with navbar & toast container
│── components/
│ ├── NavBar.jsx # Navigation bar
│ ├── Hero.jsx # Homepage hero section
│ ├── HomeCards.jsx # Quick info cards
│ ├── JobListings.jsx # Job listing grid
│ ├── JobListing.jsx # Single job card
│ ├── Spinner.jsx # Loading spinner
│ └── ViewAllJobs.jsx # "View all" button

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/job-listing-app.git
   cd job-listing-app
   ```
2. **Install dependencies**

Copy
Edit
npm install

3. **Start JSON Server (Mock API)**

npm install -D json-server
npx json-server --watch data/db.json --port 7000

4. **Start Vite development server**
   npm run dev

## 💼 React Job Portal – Add, Edit, Delete & Browse Jobs

## Home Page

<image src='static-web/src/assets/home-page-pic.PNG'>

## Add Jobs Page

<image src='static-web/src/assets/add-jobs-page.PNG'>

## Jobs Page

<image src='static-web/src/assets/jobs-page-pic.PNG'>

## Single Jobs Page

<image src='static-web/src/assets/single-jobs-page.PNG'>
