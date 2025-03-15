# MarketPro Dashboard

![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-blue)

A modern, component-based marketing analytics dashboard built with React, TypeScript, and Tailwind CSS. Monitor your marketing performance across channels, manage e-commerce integrations, and connect with production providers - all in one place.

## 🚀 Features

- **Customizable Dashboard**: Add/remove widgets to create your perfect analytics view
- **Multi-channel Traffic Analytics**: Track performance across organic, direct, social, and referral traffic
- **Marketplace Integration**: Connect to e-commerce platforms (Shopify, Etsy, etc.)
- **Provider Management**: Integrations with fulfillment and production services
- **Component-based Architecture**: Modern, reusable React components with TypeScript

## 📊 Dashboard Screenshot

(Screenshot placeholder)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript 4.9
- **Styling**: Tailwind CSS 4.0
- **Data Visualization**: Recharts
- **Icons**: Lucide React
- **Build Tools**: Create React App

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/           - Layout components (Header, Sidebar, MainLayout)
│   ├── dashboard/        - Dashboard components and widgets
│   ├── marketplaces/     - Marketplace management components
│   └── providers/        - Provider management components
├── pages/                - Main page components
├── data/                 - Mock data and API services
└── types/                - TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/marketpro-dashboard.git
   cd marketpro-dashboard
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Access the application at http://localhost:3000

## 🔄 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects the CRA configuration

## 🧩 Project Components

### Dashboard
- Customizable widget layout
- Metric cards with progress tracking
- Traffic analytics charts
- Activity feed
- Quick action buttons

### Marketplaces
- Connect to e-commerce platforms
- View performance metrics by marketplace
- Manage connected stores

### Providers
- Connect to production/fulfillment services
- Monitor production status
- Manage orders and fulfillment

## 📝 Licensing

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0) - see the LICENSE file for details.

### Commercial Licensing

For commercial licensing options that remove AGPL-3.0 restrictions, please contact [your contact information].

This dual licensing approach allows:
- Free use under AGPL-3.0 for open source projects and non-commercial use
- Commercial licensing options for businesses seeking to incorporate this project into proprietary products

The AGPL-3.0 license requires anyone who distributes this code or runs it as a service (including over a network) to make the complete source code available under the same license.

## 🤝 Contributing

Contributions are welcome! By contributing to this project, you agree to our Contributor License Agreement (CLA).

### Contributor License Agreement

Before your contribution can be accepted, you must agree to a Contributor License Agreement (CLA) which gives the project maintainer permission to redistribute your contributions as part of the project. This is important for maintaining the dual licensing approach.

For individual contributors, please see [INDIVIDUAL_CLA.md](./INDIVIDUAL_CLA.md) in the repository.

For corporate contributors, please see [CORPORATE_CLA.md](./CORPORATE_CLA.md) in the repository.

### Contribution Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
6. Confirm your agreement to the CLA in the PR

## 🔮 Future Improvements

- Add proper routing with React Router
- Implement state management with Context API or Redux
- Add proper error boundaries and loading states
- Implement real API endpoints
- Add authentication and user management
- Create comprehensive test suite
- Add responsive design improvements
