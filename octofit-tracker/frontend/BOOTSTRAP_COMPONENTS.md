# Bootstrap Components Used in OctoFit Tracker

This document outlines all the Bootstrap components and utilities used throughout the application for consistency.

## Global Components

### Navigation (App.js)
- **Component**: `navbar navbar-expand-lg navbar-dark`
- **Features**: 
  - Responsive collapsible menu
  - Bootstrap Icons for menu items
  - Gradient background
  - Hover effects with transform

### Footer (App.js)
- **Component**: `bg-dark text-white text-center`
- **Features**: Dark gradient background with yellow border-top

## Page-Specific Components

### Home Page (App.js - Route "/")
- **Card**: `card shadow-lg border-0 rounded-4`
- **Feature Cards**: Grid of 4 cards with hover effects
- **Button**: `btn btn-lg btn-primary px-5 py-3 rounded-pill`
- **Icons**: Bootstrap Icons (bi-activity, bi-people-fill, etc.)

### Users Component
- **Table**: `table table-hover table-striped`
- **Table Header**: `table-dark`
- **Badges**: `badge bg-info text-dark` for usernames
- **Loading Spinner**: `spinner-border text-primary`
- **Alert**: `alert alert-danger` for errors
- **Card**: Wraps table with shadow

### Teams Component
- **Cards**: `card h-100 shadow-sm border-0 hover-lift`
- **Card Header**: `bg-success text-white`
- **Card Footer**: `card-footer bg-transparent border-top-0`
- **Button**: `btn btn-outline-success btn-sm w-100`
- **Badge**: `badge bg-success rounded-pill` for member count
- **Grid**: `row g-4` with `col-md-6 col-lg-4`

### Activities Component
- **Table**: `table table-hover table-striped`
- **Table Header**: `table-warning`
- **Badges**: 
  - `badge bg-info text-dark` for usernames
  - `badge bg-warning text-dark` for activity types
  - `badge bg-danger` for calories
- **Card**: Wraps table with shadow
- **Spinner**: `spinner-border text-warning`

### Workouts Component
- **Cards**: `card h-100 shadow-sm border-0 hover-lift`
- **Card Header**: `bg-info text-white`
- **Card Body**: Grid layout with `row g-2`
- **Info Boxes**: `bg-light rounded` with flex layout
- **Badges**: Multiple colors (info, primary, warning, danger)
- **Button**: `btn btn-outline-info btn-sm w-100`
- **Grid**: `row g-4` with `col-md-6 col-lg-6`

### Leaderboard Component
- **Table**: `table table-hover table-striped`
- **Table Header**: `table-dark`
- **Dynamic Row Classes**: 
  - `table-warning` for 1st place
  - `table-light` for 2nd place
  - `table-danger bg-opacity-25` for 3rd place
- **Badges**: 
  - `badge bg-primary fs-6 px-3 py-2` for points
  - `badge bg-info text-dark` for activities
  - `badge bg-danger` for calories
- **Icons**: Trophy icons with different sizes for top 3

## Common Bootstrap Utilities Used

### Spacing
- `mt-5`: Margin top
- `mb-4`: Margin bottom
- `p-0`: No padding
- `px-3`, `py-2`: Padding horizontal/vertical
- `g-4`: Gap between grid items

### Display & Flexbox
- `d-flex`: Display flex
- `justify-content-between`: Space between items
- `align-items-center`: Vertical center alignment
- `text-center`: Center text

### Typography
- `display-5`: Large display heading
- `fw-bold`: Font weight bold
- `text-muted`: Muted text color
- `fs-6`: Font size 6

### Colors
- `text-primary`, `text-success`, `text-warning`, `text-danger`, `text-info`
- `bg-primary`, `bg-success`, `bg-warning`, `bg-danger`, `bg-info`

### Sizing
- `w-100`: Width 100%
- `h-100`: Height 100%
- `min-vh-100`: Minimum viewport height 100%

### Borders & Shadows
- `border-0`: No border
- `shadow-sm`: Small shadow
- `shadow-lg`: Large shadow
- `rounded-3`, `rounded-4`: Border radius
- `rounded-pill`: Pill-shaped button

## Custom CSS Classes

### Hover Effects
- `.hover-lift`: Card lift effect on hover
- `.feature-card`: Special hover effect with gradient

### Spinners
- Custom sized spinners with different colors per component

### Table Enhancements
- Custom hover effects with transform and shadow
- Color-coded badges for different data types

## Icons Used (Bootstrap Icons)

- `bi-activity`: Activities and main logo
- `bi-people-fill`: Users
- `bi-people`: Teams
- `bi-trophy-fill`: Leaderboard and rankings
- `bi-lightning-charge-fill`: Workouts
- `bi-fire`: Calories/intensity
- `bi-clock-fill`: Duration
- `bi-speedometer2`: Difficulty
- `bi-tag-fill`: Categories
- `bi-inbox`: Empty states
- `bi-heart-fill`: Footer

## Responsive Breakpoints

- Mobile: Default
- Tablet: `col-md-6`
- Desktop: `col-lg-4`, `col-lg-6`

All components are fully responsive and use Bootstrap's grid system.
