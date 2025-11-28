# HRMS Dashboard Layout Template

> Complete layout structure for HRMS (Human Resource Management System) Employee Dashboard

---

## 📋 Overview

This template provides a complete, production-ready layout structure for an HRMS employee portal. It includes all the essential components needed to build a modern, responsive dashboard interface.

---

## 🏗️ Layout Structure
```
App.jsx
  └── HRMSApp (MainLayout.jsx)
      ├── Header.jsx (Top Bar)
      ├── Sidebar.jsx (Left Navigation)
      └── Main Content Area
          └── Dashboard.jsx (Main Dashboard Page)
```

---

## 📦 Files Included

### 1. **MainLayout.jsx** (Layout Wrapper)
The main layout component that combines all parts together.

**What it does:**
- Combines Header, Sidebar, and Main Content
- Manages navigation state
- Handles sidebar open/close on mobile
- Manages notification panel state
- Responsive design implementation

**Key Features:**
- ✅ Responsive mobile/desktop layout
- ✅ State management for navigation
- ✅ Sidebar toggle functionality
- ✅ Mobile overlay backdrop

---

### 2. **Header.jsx** (Top Navigation Bar)

**What it contains:**
- Company logo (FactoAtlas)
- Employee badge
- Notification bell with dropdown
- User profile section
- Logout button
- Mobile menu toggle button

**Key Features:**
- ✅ Sticky header (stays on top while scrolling)
- ✅ Notification panel with activity feed
- ✅ User avatar with initials
- ✅ Responsive design (hides elements on mobile)

---

### 3. **Sidebar.jsx** (Left Navigation Menu)

**What it contains:**
- Navigation menu items
- Expandable submenus
- Active page highlighting
- Icons for each menu item

**Key Features:**
- ✅ Collapsible on mobile
- ✅ Expandable submenus (dropdown)
- ✅ Active state highlighting
- ✅ Smooth animations
- ✅ Auto-close on mobile after navigation

**Navigation Items:**
- Dashboard
- Attendance (with submenu: Check In/Out, History)
- Leave & Time Off (with submenu: Apply Leave, Leave Balance)
- Timesheets
- Payslips
- Performance & Goals
- Requests & Helpdesk
- My Profile

---

### 4. **Dashboard.jsx** (Main Content Page)

**What it displays:**
- **Statistics Cards:** Leaves, Attendance, Salary Date, Pending Requests
- **Quick Actions:** Check In, Apply Leave, Timesheet, View Payslip
- **Upcoming Celebrations:** Birthdays, team events
- **Upcoming Meetings:** Today's and this week's schedule
- **Recent Activities:** Employee activity feed

**Key Features:**
- ✅ Clickable stat cards (navigate to respective pages)
- ✅ Interactive quick action buttons
- ✅ Real-time pending request count
- ✅ Responsive grid layout
- ✅ Hover effects on all interactive elements

---

## 🎨 Design Features

### Color Scheme
- **Primary Color:** `#4F86C6` (Blue)
- **Accent Color:** `#6BA3D1` (Light Blue)
- **Background:** `#F9FAFB` (Light Gray)
- **Text:** `#1F2937` (Dark Gray)

### Responsive Breakpoints
- **Mobile:** < 768px (1 column layout, collapsible sidebar)
- **Tablet:** 768px - 1024px (2 column layout)
- **Desktop:** > 1024px (Full layout with fixed sidebar)

### Typography
- **Logo Font:** Allerta Stencil
- **Body Font:** System UI (Default)
- **Font Sizes:** 
  - Headings: 2xl, xl, lg
  - Body: sm, xs

---

## 🚀 How to Use

### Option 1: Direct Integration

1. Copy all 4 files into your project:
```
   src/components/layout/
   ├── MainLayout.jsx
   ├── Header.jsx
   ├── Sidebar.jsx
   └── Dashboard.jsx
```

2. Import and use in your App.jsx:
```javascript
   import { HRMSApp } from './components/layout/MainLayout';
   
   function App() {
     return <HRMSApp />;
   }
```

### Option 2: Customize Before Use

1. Update colors in `constants/colors.js`
2. Modify navigation items in `constants/navigationItems.js`
3. Adjust component props as needed
4. Update dashboard statistics with your data

---

## 📱 Responsive Behavior

### Desktop (> 1024px)
- Sidebar: Always visible (fixed position)
- Header: Full width with all elements
- Main Content: Maximum width 1280px (centered)

### Tablet (768px - 1024px)
- Sidebar: Collapsible
- Header: Full width
- Stats Cards: 2 columns

### Mobile (< 768px)
- Sidebar: Hidden by default (hamburger menu)
- Header: Compact (hides user name)
- Stats Cards: 1 column
- Quick Actions: 2 columns

---

## 🔧 Dependencies

This layout uses the following libraries:
```json
{
  "react": "^18.0.0",
  "lucide-react": "^0.263.1"
}
```

**Lucide React Icons Used:**
- `Calendar`, `CheckCircle`, `DollarSign`, `Clock`, `Bell`, `Menu`
- `Home`, `Users`, `FileText`, `Settings`, `ChevronDown`

---

## 🎯 Component Props

### MainLayout (HRMSApp)
No props required - manages its own state

### Header
```javascript
{
  user: object,              // User data (name, employeeId)
  logout: function,          // Logout handler
  headerBg: string,          // Background color
  activities: array,         // Notification activities
  notificationOpen: boolean, // Notification panel state
  setNotificationOpen: function,
  onNavigate: function,      // Navigation handler
  onToggleSidebar: function  // Sidebar toggle handler
}
```

### Sidebar
```javascript
{
  navigationItems: array,    // Menu items
  currentPage: string,       // Active page ID
  expandedMenu: string,      // Expanded submenu ID
  sidebarOpen: boolean,      // Sidebar visibility
  sidebarBg: string,         // Background color
  onNavigate: function,      // Navigation handler
  onToggleMenu: function,    // Submenu toggle
  onCloseSidebar: function   // Close sidebar
}
```

### Dashboard
```javascript
{
  onNavigate: function       // Navigation handler
}
```

---

## 📸 Screenshots

### Desktop View
```
┌─────────────────────────────────────────────────────┐
│              Header (Logo, Notifications)            │
├──────────┬──────────────────────────────────────────┤
│          │  My Dashboard                            │
│          │  ┌────┐ ┌────┐ ┌────┐ ┌────┐           │
│ Sidebar  │  │ 18 │ │95% │ │Nov │ │ 0  │           │
│          │  └────┘ └────┘ └────┘ └────┘           │
│ - Home   │                                           │
│ - Leave  │  Quick Actions | Celebrations            │
│ - Time   │  Meetings      | Activities              │
│          │                                           │
└──────────┴──────────────────────────────────────────┘
```

### Mobile View
```
┌─────────────────┐
│  ☰  FactoAtlas  │
├─────────────────┤
│  Stats Cards    │
│  (Stacked)      │
│                 │
│  Quick Actions  │
│  (2 columns)    │
│                 │
│  Celebrations   │
│  Meetings       │
│  Activities     │
└─────────────────┘
```

---

## 🎓 For Your Team

### Understanding the Layout

**1. Header (Top Bar):**
- Fixed at the top of the screen
- Contains branding and user actions
- Always visible while scrolling

**2. Sidebar (Left Navigation):**
- Fixed on the left side (desktop)
- Collapsible on mobile
- Contains all navigation links

**3. Main Content (Center Area):**
- Takes remaining space between header and sidebar
- Scrollable content area
- Contains page-specific content (Dashboard, etc.)

### Customization Tips

1. **Change Colors:** Update `COLORS` constant
2. **Add Menu Items:** Modify `navigationItems` array
3. **Update Stats:** Change `stats` array in Dashboard
4. **Add New Pages:** Create component and add to PageRenderer

---

## 📝 Notes

- All components use **Tailwind CSS** for styling
- Layout is fully responsive (mobile-first approach)
- Components are modular and reusable
- State management is kept simple (React hooks)
- No external state management library needed

---

## 🤝 Support

If you have questions about this layout:

1. Review the code comments in each file
2. Check the component prop definitions above
3. Test responsiveness by resizing browser
4. Contact the development team lead

---

## 📄 License

This is internal company code for HRMS project.
For team use only.

---

**Created by:** [Your Name]  
**Date:** November 28, 2024  
**Version:** 1.0.0  
**Project:** FactoAtlas HRMS Employee Portal
```

---

## ✅ What You Have Now:

1. **Dashboard.jsx** - Complete, commented code
2. **README.md** - Comprehensive documentation

## 🚀 Upload These Files to GitHub:

Create folder structure:
```
📁 hrms-layout-template/
  📄 README.md
  📄 MainLayout.jsx (from previous response)
  📄 Header.jsx (from previous response)
  📄 Sidebar.jsx (from previous response)
  📄 Dashboard.jsx (this file)
