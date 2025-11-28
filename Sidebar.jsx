/**
 * Sidebar Component (Left Navigation)
 * Contains: Navigation menu with expandable submenus
 * Features: Responsive (collapsible on mobile), Active state highlighting
 */
export const Sidebar = ({
  navigationItems,
  currentPage,
  expandedMenu,
  sidebarOpen,
  sidebarBg,
  onNavigate,
  onToggleMenu,
  onCloseSidebar
}) => {
  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-40 w-64 p-4 overflow-y-auto transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
      style={{ 
        backgroundColor: sidebarBg, 
        height: 'calc(100vh - 72px)',
        top: '72px' 
      }}
    >
      <nav className="space-y-1">
        {navigationItems.map((item) => (
          <div key={item.id}>
            {/* Main Menu Item */}
            <button
              onClick={() => {
                if (item.submenu) {
                  onToggleMenu(expandedMenu === item.id ? null : item.id);
                } else {
                  onNavigate(item.id);
                }
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                currentPage === item.id || expandedMenu === item.id
                  ? "bg-white bg-opacity-20 text-white"
                  : "text-white text-opacity-80 hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} />
                {item.label}
              </div>
              
              {/* Dropdown Arrow (if submenu exists) */}
              {item.submenu && (
                <span className={`text-xs transition-transform ${expandedMenu === item.id ? "rotate-180" : ""}`}>
                  ▼
                </span>
              )}
            </button>

            {/* Submenu Items */}
            {item.submenu && expandedMenu === item.id && (
              <div className="pl-4 space-y-1 mt-1">
                {item.submenu.map((subitem) => (
                  <button
                    key={subitem.id}
                    onClick={() => onNavigate(subitem.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                      currentPage === subitem.id
                        ? "bg-white bg-opacity-30 text-white font-medium"
                        : "text-white text-opacity-70 hover:bg-white hover:bg-opacity-10"
                    }`}
                  >
                    {subitem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};
