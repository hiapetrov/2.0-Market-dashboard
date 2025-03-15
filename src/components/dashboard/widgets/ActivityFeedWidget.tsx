import React, { useState, useEffect } from 'react';
import { ExternalLink, Activity, FileText, Instagram } from 'lucide-react';
import { WidgetProps } from '../../../types/dashboard.types';
import { ActivityItem } from '../../../types/dashboard.types';
import { dashboardApi } from '../../../data/mockApi';

// Helper function to render icon based on iconName
const renderIcon = (iconName: string) => {
  switch(iconName) {
    case 'Activity':
      return <Activity className="h-5 w-5" />;
    case 'FileText':
      return <FileText className="h-5 w-5" />;
    case 'Instagram':
      return <Instagram className="h-5 w-5" />;
    default:
      return <Activity className="h-5 w-5" />;
  }
};

const ActivityFeedWidget: React.FC<WidgetProps> = ({ isEditMode, onRemove }) => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await dashboardApi.getActivityFeed();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activity feed:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md h-full hover:shadow-lg transition-all border border-gray-700">
      {isEditMode && onRemove && (
        <button 
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
        >
          ×
        </button>
      )}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"></div>
      <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
        <h3 className="font-medium text-white">Recent Activity</h3>
        <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center">
          View All <ExternalLink className="h-4 w-4 ml-1" />
        </button>
      </div>
      
      {loading ? (
        <div className="px-6 py-8 text-center text-gray-400">
          Loading activities...
        </div>
      ) : (
        <div className="divide-y divide-gray-700">
          {activities.slice(0, 3).map((activity) => (
            <div key={activity.id} className="px-6 py-4 flex items-start">
              <div className="h-10 w-10 rounded-full bg-indigo-800 flex items-center justify-center text-cyan-400 mr-4">
                {activity.iconName ? renderIcon(activity.iconName) : <Activity className="h-5 w-5" />}
              </div>
              <div>
                <p className="text-gray-200">{activity.event}</p>
                <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityFeedWidget;
