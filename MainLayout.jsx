import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { getNavigationItems } from "../../constants/navigationItems";
import { useAuth } from "../../hooks/useAuth";
import { useEmployees } from "../../hooks/useEmployees";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { PageRenderer } from "./PageRenderer";

/**
 * MainLayout Component (HRMSApp)
 * This is the main layout wrapper that combines:
 * 1. Header (Top Bar)
 * 2. Sidebar (Left Navigation)
 * 3. Main Content Area (Dashboard and other pages)
 */
export const HRMSApp = () => {
  const { user, logout } = useAuth();
  const { activities } = useEmployees();
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    setExpandedMenu(null);
    // Auto-close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const navigationItems = getNavigationItems();
  const headerBg = COLORS.primary;
  const sidebarBg = COLORS.primary;
  const mainBg = COLORS.secondary;

  return (
    <div className={`min-h-screen flex flex-col ${mainBg}`}>
      {/* Header - Fixed at top */}
      <Header
        user={user}
        logout={logout}
        headerBg={headerBg}
        activities={activities}
        notificationOpen={notificationOpen}
        setNotificationOpen={setNotificationOpen}
        onNavigate={handleNavigate}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Sidebar + Main Content Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Fixed on left */}
        <Sidebar
          navigationItems={navigationItems}
          currentPage={currentPage}
          expandedMenu={expandedMenu}
          sidebarOpen={sidebarOpen}
          sidebarBg={sidebarBg}
          onNavigate={handleNavigate}
          onToggleMenu={setExpandedMenu}
          onCloseSidebar={() => setSidebarOpen(false)}
        />

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main 
          className={`flex-1 p-6 overflow-y-auto ${mainBg}`} 
          style={{ height: 'calc(100vh - 72px)' }}
        >
          <div className="max-w-7xl mx-auto">
            <PageRenderer
              currentPage={currentPage}
              onNavigate={handleNavigate}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
