Got it — then your README must reflect the architecture shift properly (this is important for future hiring/portfolio credibility too).

Here’s the **updated version (Firebase removed, Django backend added):**

---

# Guilan LMS (Rahyar)

A modern Learning Management System (LMS) designed for medical education and crisis-based learning environments.

Built with **React, TypeScript, Vite, Django, Django REST Framework (DRF), and Tailwind CSS**.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* User Registration & Login (Django Authentication)
* Email-based Login System
* Role-Based Access Control (Student / Teacher)
* Protected Routes (Frontend)
* REST API Authentication (Backend)

---

### 🎓 Student Panel

* View assigned learning topics
* Submit video assignments
* Track submission status
* View approvals and feedback
* Access public learning library

---

### 👨‍🏫 Teacher Panel

* Create and assign topics to students
* Review student submissions
* Approve submitted work
* Manage learning activities

---

### 📚 Public Library

* Browse available educational topics
* Access shared learning materials

---

### 🎨 UI / UX

* Fully responsive design
* RTL (Persian) support
* Modern dashboard interface
* Dark mode ready
* Tailwind CSS styling
* Vazirmatn typography

---

## 🧰 Tech Stack

### Frontend

* React 19
* TypeScript
* Vite
* React Router

### Backend

* Django
* Django REST Framework (DRF)
* SQLite (development) / PostgreSQL (production-ready)
* Django Authentication System

### Styling

* Tailwind CSS v4
* Vazirmatn Font

---

## 📁 Project Structure

```text
src/
├── components/
├── context/
├── pages/
├── routes/
├── services/
├── App.tsx
└── main.tsx
```

---

## ⚙️ Installation

### Clone repository

```bash
git clone https://github.com/SamaZohari/Guilan-LMS.git
```

### Frontend setup

```bash
cd Guilan-LMS
npm install
npm run dev
```

---

### Backend setup (Django)

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

## 🔑 Environment Variables

### Frontend `.env`

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

---

## 📌 Notes

* Firebase has been completely removed from the project.
* All authentication and data management is handled by Django + DRF.
* Frontend communicates with backend via REST API.
* Role-based access is handled on both backend and frontend.

---

## 📄 License

This project is currently **private and proprietary**.

All rights reserved.

No part of this project may be copied, redistributed, modified, or used without explicit permission from the author.

---

## 👤 Author

**Sama Zohari**
2026
