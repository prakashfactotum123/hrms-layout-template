import { Calendar, CheckCircle, DollarSign, Clock } from "lucide-react";
import { StatCard } from "../common/StatCard";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import { Badge } from "../common/Badge";
import { useEmployees } from "../../hooks/useEmployees";
import { formatTime } from "../../utils/helpers";
import { COLORS } from "../../constants/colors";

/**
 * Dashboard Component
 * 
 * This is the main dashboard page that displays:
 * - Employee statistics (leaves, attendance, salary, pending requests)
 * - Quick action buttons (check-in, apply leave, timesheet, payslip)
 * - Upcoming celebrations (birthdays, events)
 * - Upcoming meetings
 * - Recent activities
 * 
 * @param {Function} onNavigate - Function to navigate between pages
 */
export const Dashboard = ({ onNavigate }) => {
  // Get employee data from context
  const { 
    activities, 
    leaveRequests, 
    attendanceCorrections, 
    timecards, 
    payslipRequests, 
    helpdesk 
  } = useEmployees();

  // Upcoming celebrations data
  const upcomingCelebrations = [
    { name: "John Smith", date: "Nov 20", type: "Birthday", icon: "🎂" },
    { name: "Sarah Johnson", date: "Nov 25", type: "Birthday", icon: "🎂" },
    { name: "Team Lunch", date: "Nov 22", type: "Team Lunch", icon: "🍽️" },
    { name: "Annual Gala", date: "Dec 05", type: "Company Event", icon: "🎉" },
  ];

  // Upcoming meetings data
  const MOCK_MEETINGS = [
    { 
      title: "Team Sync Up", 
      time: "10:30 AM", 
      date: "Today", 
      location: "Zoom (Link)", 
      type: "Important" 
    },
    { 
      title: "Q4 Planning Review", 
      time: "2:00 PM", 
      date: "Nov 18", 
      location: "Conference Room B", 
      type: "Regular" 
    },
    { 
      title: "Client Demo Prep", 
      time: "9:00 AM", 
      date: "Nov 19", 
      location: "Google Meet", 
      type: "Urgent" 
    },
  ];

  // Calculate total pending requests
  const pendingCount =
    leaveRequests.filter(r => r.status === "Pending").length +
    attendanceCorrections.filter(c => c.status === "Pending").length +
    timecards.filter(t => t.status === "Pending").length +
    payslipRequests.filter(p => p.status === "Pending").length +
    helpdesk.filter(h => h.status === "Open" || h.status === "In Progress").length;

  // Statistics cards configuration
  const stats = [
    { 
      label: "Remaining Leaves", 
      value: "18", 
      change: "Annual Leave", 
      icon: Calendar, 
      accent: COLORS.primary, 
      navigateTo: "leaveBalance" 
    },
    { 
      label: "This Month Attendance", 
      value: "95%", 
      change: "Present", 
      icon: CheckCircle, 
      accent: COLORS.accent, 
      navigateTo: "checkInOut" 
    },
    { 
      label: "Next Salary Date", 
      value: "Nov 30", 
      change: "Due", 
      icon: DollarSign, 
      accent: "#8B5CF6", 
      navigateTo: "payslips" 
    },
    { 
      label: "Pending Requests", 
      value: pendingCount.toString(), 
      change: "Awaiting Approval", 
      icon: Clock, 
      accent: "#F59E0B", 
      navigateTo: "correctionRequests" 
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Dashboard</h1>
        <p className="text-gray-600 mt-1">Manage your work and personal information</p>
      </div>

      {/* Statistics Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <StatCard 
            key={i} 
            {...s} 
            onClick={() => onNavigate(s.navigateTo)} 
          />
        ))}
      </div>

      {/* Quick Actions & Upcoming Celebrations Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions Section - Takes 2/3 width */}
        <div className="lg:col-span-2">
          <Section title="Quick Actions">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button 
                variant="ghost" 
                className="flex-col py-4 h-auto" 
                onClick={() => onNavigate('checkInOut')}
              >
                <Clock size={20} />
                Check In
              </Button>
              <Button 
                variant="ghost" 
                className="flex-col py-4 h-auto" 
                onClick={() => onNavigate('applyLeave')}
              >
                <Calendar size={20} />
                Apply Leave
              </Button>
              <Button 
                variant="ghost" 
                className="flex-col py-4 h-auto" 
                onClick={() => onNavigate('timesheet')}
              >
                <Clock size={20} />
                Timesheet
              </Button>
              <Button 
                variant="ghost" 
                className="flex-col py-4 h-auto" 
                onClick={() => onNavigate('payslips')}
              >
                <DollarSign size={20} />
                View Payslip
              </Button>
            </div>
          </Section>
        </div>

        {/* Upcoming Celebrations Section - Takes 1/3 width */}
        <Section title="Upcoming Celebrations">
          <div className="space-y-3">
            {upcomingCelebrations.map((celebration, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded transition-colors"
              >
                <div className="text-lg">{celebration.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{celebration.name}</p>
                  <p className="text-xs text-gray-500">
                    {celebration.type} • {celebration.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Meetings & Activities Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Meetings Section */}
        <Section title="Upcoming Meetings" hint="Your schedule for the week">
          <div className="space-y-3">
            {MOCK_MEETINGS.slice(0, 3).map((meeting, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-3 hover:bg-blue-50 rounded transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="text-lg">📅</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{meeting.title}</p>
                    <p className="text-xs text-gray-500">
                      {meeting.date} at {meeting.time}
                    </p>
                  </div>
                </div>
                <Badge 
                  tone={
                    meeting.type === "Urgent" ? "red" : 
                    meeting.type === "Important" ? "amber" : 
                    "blue"
                  } 
                  className="ml-2"
                >
                  {meeting.type}
                </Badge>
              </div>
            ))}
          </div>
        </Section>

        {/* Recent Activities Section */}
        <Section title="Recent Activities">
          <div className="space-y-3">
            {activities.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-4">
                No recent activities
              </p>
            ) : (
              activities.slice(0, 4).map((activity, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded transition-colors"
                >
                  <div className="text-lg">
                    {activity.type === "Leave" && "📅"}
                    {activity.type === "Payslip" && "💰"}
                    {activity.type === "Attendance" && "⏱️"}
                    {activity.type === "Timecard" && "📊"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{activity.title}</p>
                    <p className="text-xs text-gray-500 truncate">{activity.desc}</p>
                    <p className="text-xs text-gray-400">{formatTime(activity.timestamp)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </Section>
      </div>
    </div>
  );
};
