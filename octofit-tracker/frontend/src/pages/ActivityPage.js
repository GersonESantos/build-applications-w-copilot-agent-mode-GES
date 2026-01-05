import React, { useEffect, useState } from 'react';
import { fetchActivities } from '../api/apiService';

function ActivityPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await fetchActivities();
        setActivities(data);
      } catch (error) {
        console.error('Failed to load activities:', error);
      }
    };

    loadActivities();
  }, []);

  return (
    <div>
      <h1>Activity Log</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name} - {activity.duration} mins</li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityPage;