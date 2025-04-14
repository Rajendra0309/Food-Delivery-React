# Food Delivery Web App

A responsive React-based web application for food delivery services, allowing users to browse restaurants, select menu items, add them to cart, and complete the checkout process.

## Features

- **Restaurant Browsing**: Explore various restaurants with detailed information
- **Menu Selection**: View restaurant menus and add items to cart
- **Cart Management**: Add, remove, and update quantities of items in cart
- **Checkout Process**: Complete order with delivery and payment information
- **Responsive Design**: Fully responsive UI that works across desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing

## Technologies Used

- React 18
- React Router v6
- Context API for state management
- CSS for styling (no external UI libraries)

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps to Run the Project

1. Clone the repository:
```
git clone https://github.com/Rajendra0309/Food-Delivery-React.git
cd food-delivery-web-app
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── contexts/          # React Context providers
├── data/              # Mock data for restaurants and menu items
├── pages/             # Page components
├── App.js             # Main App component
├── index.js           # Entry point
└── index.css          # Global styles
```

## Key Components

- **HomePage**: Displays a list of available restaurants
- **RestaurantPage**: Shows detailed information about a restaurant and its menu
- **CartPage**: Allows users to view and manage items in their cart
- **CheckoutPage**: Handles the order completion process
- **Header**: Navigation and cart summary
- **Footer**: App information and links

## State Management

The application uses React's Context API for state management:

- **CartContext**: Manages the shopping cart state
- **ThemeContext**: Handles theme switching functionality

## Customization

You can customize various aspects of the application:

- **Theme Colors**: Edit CSS variables in `src/index.css`
- **Mock Data**: Modify restaurant and menu data in `src/data/mockData.js`

## Acknowledgements

- Images sourced from [Unsplash](https://unsplash.com)
- Icons and fonts from Google Fonts
