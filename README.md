# Jammify - Music Library Application

A modern music library application built with **React.js** and **Micro Frontend Architecture** demonstrating advanced concepts like Module Federation, role-based authentication, and responsive design.

## Live Demo

- **Main Application**: [https://jammify1.vercel.app/](https://jammify1.vercel.app/)
- **Music Library Micro Frontend**: [https://music-library-virid.vercel.app/](https://music-library-virid.vercel.app/)

## Demo Credentials

### Admin Access
- **Username**: amresh yadav  
- **Password**: 123456

### User Access  
- **Username**: amresh
- **Password**: 123456

## Tech Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Architecture**: Micro Frontend with Module Federation
- **Authentication**: In-memory JWT
- **State Management**: useState, useReducer, Context API
- **Storage**: localStorage
- **Deployment**: Vercel
- **Build Tool**: Vite/Webpack

## Features

### Core Functionality
- **Music Library UI**: Clean interface displaying songs list
- **Advanced Filtering**: Filter, sort, and group songs by:
  - Album
  - Artist  
  - Title
- **JavaScript Methods**: Utilizes map, filter, and reduce for data manipulation

### Micro Frontend Architecture
- **Main App**: Acts as the host container
- **Music Library**: Separate micro frontend loaded dynamically via Module Federation
- **Independent Deployment**: Each micro frontend can be deployed separately
- **Lazy Loading**: Music library loads on-demand in Dashboard component

### Authentication & Authorization
- **In-memory JWT**: Simple JWT-based authentication
- **Role-based Access Control**: Two distinct user roles
  - **Admin**: Can add and delete songs
  - **User**: Can only view, filter, and sort songs
- **Dynamic UI**: Controls for adding/removing songs shown based on user role

### Technical Features
- **Responsive Design**: Optimized for all device sizes
- **State Management**: Complex state handled with useReducer and Context API
- **Local Storage**: Data persistence using browser localStorage
- **Modular Architecture**: Clean separation of concerns

### How Micro Frontend Works
1. **Module Federation**: Webpack's Module Federation plugin enables sharing of components between applications
2. **Runtime Integration**: The main app dynamically imports the music library component at runtime
3. **Independent Development**: Teams can work on different parts of the application independently
4. **Scalable Deployment**: Each micro frontend can be deployed and scaled independently

### Role-Based Authentication Flow
1. **Login Process**: User credentials validated against predefined users
2. **JWT Generation**: In-memory JWT token created with user role information
3. **Context Provider**: Authentication state shared across application via Context API
4. **Protected Routes**: Components check user role before rendering admin features
5. **Dynamic UI**: Interface adapts based on user permissions

## 🚀 Getting Started

### Prerequisites
- Node.js (v19 or higher)
- npm package manager

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd jammify
```

#### 2. Setup Main Application
```bash
cd main-app
npm install
npm run dev
```

#### 3. Setup Music Library (Remote)
```bash
cd music-library
npm install
npm run dev
```

#### Alternative for Music Library (Production Build)
```bash
cd music-library
npm install
npm run build
npm run preview
```

### Running the Application
1. Start both applications (main-app and music-library)
2. Access the main application at `http://localhost:4173` (or specified port)
3. The music library will be loaded dynamically when accessing the dashboard

## Key Implementation Details

### State Management Strategy
- **useState**: Local component state management
- **useReducer**: Complex state logic for music library operations
- **Context API**: Global authentication state and user role management

### Lazy Loading Implementation
```javascript
// Dashboard.jsx
const MusicLibrary = React.lazy(() => import('musicLibrary/MusicLibrary'));

<Suspense fallback={<div>Loading Music Library...</div>}>
  <MusicLibrary />
</Suspense>
```

### Role-Based Access Control
```javascript
const { user } = useAuth();

{user?.role === 'admin' && (
  <button onClick={handleDeleteSong}>Delete Song</button>
)}
```

## 🔧 Configuration

### Module Federation Configuration
Both applications use Webpack Module Federation for micro frontend setup:
- **Main App**: Configured as host to consume remote modules
- **Music Library**: Configured as remote to expose components

### Authentication Configuration
- JWT tokens stored in memory (not persistent)
- User roles defined in application logic
- Authentication state managed via React Context

## Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Various screen orientations

## Deployment

Both applications are deployed on Vercel with separate deployment pipelines:
- **Automatic deployment** on push to main branch
- **Preview deployments** for pull requests
- **Environment-specific configurations**
