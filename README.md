🐾 PawMart – Pet Adoption & Shop Platform
Next.js | Tailwind CSS | Responsive | Modern UI | Protected Routes

PawMart is a modern pet adoption & pet product management platform built using Next.js 16, React, and Tailwind CSS.
The platform allows users to browse pets, explore products, and manage them through protected admin routes.

🔗 Live Demo

👉 https://pawmart-next-client.vercel.app/

📦 GitHub Repository

👉 https://github.com/tareqqqqq/pawmart-next-client

📘 Project Overview

PawMart lets users adopt pets, buy pet products, and manage items from a secure dashboard.
The website includes animations, responsive design, and clean UI.

🔐 Authentication Note:
If you log in, you will see Add Product and Manage Product in the navbar —
because these routes are protected and only visible to authenticated users.

⚙️ Tech Stack

Next.js 16 (App Router)

React

Tailwind CSS

Lucide Icons

SweetAlert

CSS Animations

Vercel Deployment

🚀 Installation & Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/tareqqqqq/pawmart-next-client

2️⃣ Go to project folder
cd pawmart-next-client

3️⃣ Install dependencies
npm install

4️⃣ Start development server
npm run dev


Local development URL:

http://localhost:3000

📁 Project Structure
src/
 ├─ app/
 │   ├─ page.jsx
 │   ├─ about/
 │   ├─ products/
 │   ├─ add-product/        (Protected)
 │   ├─ manage-product/     (Protected)
 │   └─ globals.css
 ├─ components/
 └─ public/

🛣️ Route Summary
Route	Type	Description
/	Public	Home page with hero, sections & animations
/about	Public	PawMart story & mission
/products	Public	List of all pet products
/add-product	Protected	Only logged-in users can add items
/manage-product	Protected	Only logged-in users can delete/manage products
⭐ Features
🏠 Home Page

Beautiful hero banner

Why Adopt section

Category cards

Flip-card animations

Responsive layout

📦 Product Management

Add new product (secure route)

Manage / delete product (secure route)

User-friendly design

🔐 Protected Routes

Navbar dynamically shows extra menu options after login

Unauthorized users cannot access admin pages

📱 Fully Responsive Design

Works perfectly on all screen sizes.

📌 Deployment Notes

Deployed on Vercel with default Next.js configuration.
No additional setup required.

❤️ Thanks for Visiting PawMart!