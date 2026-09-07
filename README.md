<<<<<<< HEAD
# Full Stack Development (BTCS303P) — Mini E-Commerce Project

**Department of Computer Science & Engineering — COER University**
**Project Title:** STYLEHUB — T-Shirt Collection & Online Store
**Repository:** *Add your GitHub repository link here*

---

## 📅 Implementation Timeline & Lab Sheet Log

### 🔹 Lab Sheet 1: Building the Storefront (HTML5 & CSS3)

**Completion Date:** *Add your completion date*
**Covers:** Project Phase 1 & Phase 2 Specifications

* **HTML5 Page Structure:** Created structured web pages for the T-shirt shopping website:

  * `index.html` — Store homepage with website introduction and featured T-shirts.
  * `products.html` — Product catalog displaying the available T-shirt collection.
  * `product-detail.html` — Detailed information about selected T-shirts.
  * `cart.html` — Shopping cart displaying selected products and order summary.
  * `checkout.html` — Checkout page containing customer details and payment method selection.

* **CSS3 Styling & Layout (`style.css`):**

  * Designed a clean and modern fashion-store interface.
  * Styled the header and navigation menu.
  * Used **Flexbox** for arranging navigation and page elements.
  * Used **CSS Grid** for displaying T-shirt product cards.
  * Added responsive styling using **media queries** for different screen sizes.
  * Styled forms, buttons, product cards, cart sections, and checkout components.

---

### 🔹 Lab Sheet 2: Making It Interactive (Vanilla JavaScript)

**Completion Date:** *Add your completion date*
**Covers:** Project Phase 3 Specifications
**Main Script File:** `script.js`

* **Task 1 — Product Catalog Data:**
  Created a JavaScript product array containing T-shirt information such as product ID, name, price, image, and category.

* **Task 2 — Dynamic Product Rendering:**
  Implemented JavaScript functionality to dynamically display T-shirt products on the products page using DOM manipulation and template literals.

* **Task 3 — Add to Cart Handler:**
  Implemented an `addToCart()` function that allows users to add T-shirts to their shopping cart.

* **Task 4 — Cart Management:**
  Implemented cart functionality to display selected T-shirts, their quantities, prices, and remove buttons.

* **Task 5 — Total Price Calculation:**
  Implemented a `calculateTotal()` function to calculate the total cost of products in the shopping cart.

* **Task 6 — Checkout Form:**
  Created a checkout form that collects:

  * Customer Name
  * Delivery Address
  * City
  * Pincode
  * Phone Number
  * Payment Method

* **Task 7 — Form Validation:**
  Added validation to ensure that required customer information is entered correctly before placing an order.

  * **Name:** Must not be empty.
  * **Address:** Must not be empty.
  * **City:** Must not be empty.
  * **Pincode:** Must contain exactly 6 digits.
  * **Phone Number:** Must contain exactly 10 digits.
  * **Payment Method:** One payment option must be selected.

* **Task 8 — Order Placement:**
  After successful checkout validation, the user can place the order and receive an order confirmation.

---

## 📂 Project Directory Structure

```text
StyleHub/
├── README.md                 <-- Project Documentation
├── index.html                <-- Homepage
├── products.html             <-- T-Shirt Product Catalog
├── product-detail.html       <-- Product Details
├── cart.html                 <-- Shopping Cart
├── checkout.html             <-- Checkout & Payment
├── style.css                 <-- Website Styling
└── script.js                 <-- JavaScript Functionality
```

---

## 🛍️ Project Features

* Modern T-shirt collection storefront
* Homepage with featured products
* Dynamic product catalog
* Product details section
* Add-to-cart functionality
* Shopping cart management
* Quantity and price calculation
* Checkout form
* Customer information validation
* Multiple payment method options
* Responsive website design
* JavaScript-based interactivity
* Clean and user-friendly interface

---

## 🧑‍💻 Technologies Used

| Technology           | Purpose                                  |
| -------------------- | ---------------------------------------- |
| **HTML5**            | Website structure and pages              |
| **CSS3**             | Styling and responsive layout            |
| **JavaScript**       | Interactivity and shopping functionality |
| **DOM Manipulation** | Dynamic product and cart rendering       |
| **Local Storage**    | Storing cart information in the browser  |

---

## 🚀 How to Run Locally

1. Clone this repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

2. Open the project folder in **Visual Studio Code**.

3. Open `index.html` in a modern web browser.

4. Navigate through the website using the navigation menu.

5. Select T-shirts, add them to the cart, and proceed to checkout.

---

## 📋 Project Workflow

```text
Homepage
    ↓
Product Catalog
    ↓
Select T-Shirt
    ↓
Product Details
    ↓
Add to Cart
    ↓
Shopping Cart
    ↓
Checkout
    ↓
Customer Information
    ↓
Payment Method
    ↓
Form Validation
    ↓
Place Order
```

---

## 🎯 Project Objective

The main objective of **STYLEHUB** is to develop a simple and interactive online T-shirt shopping website using HTML5, CSS3, and JavaScript. The project demonstrates the implementation of fundamental front-end web development concepts including webpage structuring, responsive styling, DOM manipulation, form validation, and shopping cart functionality.

---

## 📌 Conclusion

STYLEHUB demonstrates the basic working of a mini e-commerce website for a T-shirt collection. The project combines HTML, CSS, and JavaScript to provide users with a simple shopping experience, from browsing products to adding items to the cart and completing the checkout process.
=======
# StyleHub — Full Stack Web Development Mini E-Commerce Project

## Department of Computer Science & Engineering — COER University

### Project Title
**StyleHub — Fashion T-Shirt Store**

### Student Details

- **Name:** Dev Sharma
- **Program:** BTech CSE "A"
- **CU ID:** CU24250269
- **Roll No.:** 12

### GitHub Repository

**Repository:** https://github.com/DevSharma1912/Full_Stack_Lab

---

# Project Overview

StyleHub is a mini e-commerce web application developed as part of the **Full Stack Web Development Lab**.

The project represents the development of a fashion T-shirt store through multiple stages. It was initially developed using **HTML5 and CSS3**, then made interactive using **Vanilla JavaScript**, and finally rebuilt using **React** to demonstrate modern component-based web development.

The project allows users to:

- Browse available T-shirts
- View product information
- Add products to a shopping cart
- Increase product quantities
- Remove products from the cart
- View subtotals and grand total
- Open and close the shopping cart
- Fill out a checkout form
- Select a payment method
- Place an order
- Receive an order confirmation

---

# Technology Stack

## Lab Sheet 1

- HTML5
- CSS3

## Lab Sheet 2

- HTML5
- CSS3
- Vanilla JavaScript
- DOM Manipulation
- Browser LocalStorage

## Lab Sheet 3

- React
- Vite
- JavaScript (JSX)
- React Components
- Props
- `useState`
- Conditional Rendering
- Controlled Inputs

## Development Tools

- Visual Studio Code
- Git
- GitHub
- npm
- Vite

---

# Implementation Timeline & Lab Sheet Log

## Lab Sheet 1 — Building the Storefront

**Technology:** HTML5 & CSS3  
**Completion Date:** August 2026

### Objective

The first phase focused on creating the basic static storefront and designing the user interface.

### HTML5 Page Structure

The project contains the following main pages:

- `index.html` — Homepage with hero/banner section and featured products
- `products.html` — Product catalog displaying available T-shirts
- `product-detail.html` — Product detail page
- `cart.html` — Shopping cart page
- `checkout.html` — Checkout and customer information form

### CSS3 Styling

A common stylesheet named `style.css` is used throughout the project.

The stylesheet provides:

- Header and navigation styling
- Hero/banner section
- Product card styling
- CSS Grid-based product layout
- Button styling
- Footer styling
- Responsive layout
- Consistent colors, spacing and typography

---

# Lab Sheet 2 — Making It Interactive

**Technology:** Vanilla JavaScript  
**Completion Date:** August 26, 2026

**Project Phase:** Interactive E-Commerce Functionality

The second phase added interactivity to the StyleHub storefront using plain JavaScript without using a JavaScript framework.

## Task 1 — Product Catalog

A JavaScript array containing 8+ products was created.

Each product contains:

- `id`
- `name`
- `price`
- `image`

The product data is stored in:

```text
script.js

