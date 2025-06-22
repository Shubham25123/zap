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
![Screenshot 2025-06-23 003722](https://github.com/user-attachments/assets/129ba6c8-2f03-4c1d-83ef-9e391d15663f)
![Screenshot 2025-06-23 003756](https://github.com/user-attachments/assets/e96121cd-2761-4bd3-8899-873a6c009a0d)
![Screenshot 2025-06-23 003932](https://github.com/user-attachments/assets/3bba5726-3033-4d26-b8b4-c8568f239a70)
![Screenshot 2025-06-23 004021](https://github.com/user-attachments/assets/e64fd703-0f86-4d9f-aae0-38cb9186e0d9)
![Screenshot 2025-06-23 004047](https://github.com/user-attachments/assets/df1c21dc-e3fa-4185-be22-90e5719f7df9)


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
