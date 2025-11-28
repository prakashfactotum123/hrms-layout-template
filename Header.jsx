import { Bell, Menu } from "lucide-react";
import { Badge } from "../common/Badge";
import { NotificationPanel } from "../notification/NotificationPanel";

/**
 * Header Component (Top Bar)
 * Contains: Logo, Employee Badge, Notifications, User Profile, Logout Button
 */
export const Header = ({
  user,
  logout,
  headerBg,
  activities,
  notificationOpen,
  setNotificationOpen,
  onNavigate,
  onToggleSidebar
}) => {
  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: headerBg }}>
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left Section: Logo & Badge */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white hover:bg-opacity-10 rounded transition-colors"
            onClick={onToggleSidebar}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <span
              className="text-2xl tracking-wider"
              style={{ fontFamily: '"Allerta Stencil", system-ui, sans-serif', letterSpacing: '0.15em' }}
            >
              <span style={{ color: '#FFFFFF' }}>Facto</span>
              <span style={{ color: '#8fa9cfff' }}>Atlas</span>
            </span>
          </div>
          
          {/* Employee Badge */}
          <Badge tone="gray">EMPLOYEE</Badge>
        </div>

        {/* Right Section: Notifications, User Profile, Logout */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <div className="relative">
            <button
              className="relative p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors text-white"
              onClick={() => setNotificationOpen(!notificationOpen)}
            >
              <Bell size={20} />
              {activities.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {/* Notification Dropdown */}
            {notificationOpen && (
              <NotificationPanel
                activities={activities}
                onClose={() => setNotificationOpen(false)}
                onNavigate={onNavigate}
              />
            )}
          </div>

          {/* User Profile & Logout */}
          <div className="flex items-center gap-3 pl-4 border-l border-white border-opacity-20">
            {/* User Avatar */}
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" 
              style={{ backgroundColor: '#1e3a5f' }}
            >
              {user.name.charAt(0)}
            </div>
            
            {/* User Info (Hidden on mobile) */}
            <div className="hidden md:block">
              <p className="text-sm font-medium text-white">{user.name}</p>
              <p className="text-xs text-white opacity-70">{user.employeeId}</p>
            </div>
            
            {/* Logout Button */}
            <button
              onClick={logout}
              className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
