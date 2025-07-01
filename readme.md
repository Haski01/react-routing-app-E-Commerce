# 🛒 Basic E-Commerce App with React Router

This is a simple e-commerce web application built using **React** and **React Router DOM**. It demonstrates the core concepts of single-page applications (SPA), client-side routing, and basic API integration.

---

## 🚀 Features

- ✅ Home Page
- ✅ About Page
- ✅ Contact Page
- ✅ GitHub Page
  - Fetches data using **GitHub API**
  - Displays:
    - Your **GitHub username**
    - Current **follower count**
- ✅ Dynamic Routing
  - Example: `/user/:username`
  - Renders content based on the URL parameter

---

## 🧩 React Router Hooks Used

- **`useParams()`** – Retrieves dynamic route parameters from the URL.
- **`useLoaderData()`** – Accesses data returned by a loader function in route configuration (React Router v6.4+).

---

## 🛠 Tech Stack

- **React**
- **React Router DOM**
- **GitHub REST API**

---

## 🔧 How to Run the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. Start server

   ```bash
   npm run dev

   ```

## Notes

📌 Notes

- This project is built for learning purposes to practice:
  - Routing using React Router
  - Calling public APIs
  - Handling dynamic URL parameters
  - Using React Router Hooks like useParams() and useLoaderData()
