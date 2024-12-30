# Fabrique-Ecommerce
---
A full-stack fashion e-commerce platform allowing users to browse and shop a variety of fashion products, featuring a sleek, responsive UI and smooth user experience.

## Table of Contents

- [Author](#author)
- [Technologies](#technologies)
- [Optimizations](#Optimizations)
- [Features](#features)
- [Contributions](#contributions)
- [Status](#status)
- [Feedback](#feedback)
- [Run Locally](#run-locally)

## Author
@Tanisboxed - Tanisha Jauhari

## Technologies
**Client:**
- React.js
- Next.js
- Tailwind CSS
- Vercel Hosting

**Server:**
- Node.js
- Express.js
- MongoDB (or other DB options)
- JSON Web Token (JWT) for authentication
- bcryptjs (for password hashing)
- Heroku Hosting

## Optimizations

- Next.js **Image** component for optimized image loading
- Next.js **file-system based routing**
- Next.js **Server-side rendering** (SSR)
- Memoization using `useMemo`, `Memo`
- Function components with **React hooks**
- React `useEffect` cleanup
- TypeScript for type safety

## Features

**(Users)**  
- Complete user authentication (Sign In, Sign Out, Register)
- Forgot password and change password features
- View all products in a responsive catalog
- Filter products by categories (e.g., dresses, shoes, accessories)
- Search products by name
- Add products to the shopping cart
- Checkout page with order summary and payment options (Stripe, PayPal, etc.)
- Product details page with in-depth information (images, description, reviews)
- User account page with order history

### Features to be added:
- User authentication & roles management
- Stripe integration for payments
- Admin panel for managing users and products
- Email notifications for orders and promotions


## Contributions
Contributions are always welcome!  
Feel free to open **issues** and submit **pull requests**.


## Status
- Project is: **In progress** (Features being added)


## Inspiration
- Project inspired by fashion e-commerce platforms like **Zara**, and **Amazon Fashion**.

## Feedback
If you have any feedback, please reach out to me at tanishajauhari2202@gmail.com

- [LinkedIn](www.linkedin.com/in/tanishaj-in)
- [GitHub](https://github.com/Tanisboxed)

## Run Locally

1. **Clone the project**  
   `git clone https://github.com/Tanisboxed/fabrique`

2. **Navigate to the project directory**  
   `cd fabrique`

3. **Install dependencies**  
   `npm install`  
   or  
   `yarn install`

4. **Start the development server**  
   `npm run dev`  
   or  
   `yarn dev`

5. **ESLint + Prettier + Lint-Staged Checks**  
   `npm run lint`  
   `npm run format`  
   `npm run check-types`

## Closing Remarks
Thank you for checking out Fabrique! This project is a continuous work in progress, and I am excited to keep improving and adding new features to create a seamless fashion e-commerce experience. Whether you're a fellow developer, a designer, or a user, your feedback and contributions are highly appreciated. Feel free to explore, test, and let me know how I can make the project better!
