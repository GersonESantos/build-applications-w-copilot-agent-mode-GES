// Example API service file for OctoFit Tracker

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const fetchActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`);
    if (!response.ok) {
      throw new Error('Failed to fetch activities');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};

export const logActivity = async (activityData) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activityData),
    });
    if (!response.ok) {
      throw new Error('Failed to log activity');
    }
    return await response.json();
  } catch (error) {
    console.error('Error logging activity:', error);
    throw error;
  }
};