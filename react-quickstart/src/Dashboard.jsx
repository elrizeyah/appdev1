import React from 'react';

function AdminPanel() {
  return <h2>Welcome, Admin!</h2>;
}

function LoginForm() {
  return <h2>Please log in.</h2>;
}

export default function Dashboard() {
  const isLoggedIn = true; // Change to false to test LoginForm

  return (
    <div>
      <h1>Dashboard</h1>

      {/* ✅ Conditional rendering with ternary operator */}
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}

      {/* ✅ Optional: This only shows AdminPanel if logged in */}
      {/* {isLoggedIn && <AdminPanel />} */}
    </div>
  );
}