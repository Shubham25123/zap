# 🛍️ Zap E-Commerce

A modern, responsive, and minimalist e-commerce web app built using **React**, **Vite**, and **Tailwind CSS**. Integrated with the fakestoreapi API to showcase real product listings.

## 📦 Features

- 🛒 Product listing with API integration (fakestoreapi)
- 🔍 Category-based product filtering
- 💡 Light/Dark mode toggle
- 🎯 Interactive product cards with hover and cursor effects
- 📱 Responsive design for all screen sizes
- 🧠 Cart context for managing product state
- 📃 Inspiring e-commerce quote on homepage

## 🚀 Tech Stack

- ⚛️ React.js
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌐 fakestoreapi API

## 📁 Folder Structure

```bash
zap/
├── public/                         # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             
│   │   └── ProductCard.jsx        # Product display cards
│   ├── pages/
│   │   ├── Home.jsx               # Homepage with product quote and filters
│   │   └── Login.jsx              # Login form (optional)
│   ├── context/
│   │   └── CartContext.jsx        # Cart state management using Context API
│   ├── App.jsx                    # App component with routing
│   ├── main.jsx                   # App entry point
│   ├── index.css                  # Tailwind CSS setup
│   └── App.css                    # Custom styles
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🖼️ Preview

> (Add screenshots or deployment link here)

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Shubham25123/zap.git
cd zap
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project

```bash
npm run dev
```

## 🔑 Environment Variables (if any)

If you're using `.env` variables (e.g., for base API URL):

```env
VITE_API_URL=https://fakestoreapi.com/products
VITE_CATEGORY_API=https://fakestoreapi.com/products/categories
```

## 🌐 API Used

- 📡 [fakestoreapi](https://fakestoreapi.com/products) – Free fake product API for testing and prototyping.
- 📡 [fakestoreapi](https://fakestoreapi.com/products/categories) – Free fake product API for testing and prototyping.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to fork the repository and submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Built by [Shubham Sharma](https://github.com/Shubham25123)
