document.addEventListener('DOMContentLoaded', () => {
    const activitiesList = document.getElementById('activities');
    const activityForm = document.getElementById('activity-form');

    // Fetch activities from the backend
    const fetchActivities = async () => {
        try {
            const response = await fetch('http://localhost:8000/activities');
            const activities = await response.json();

            // Clear the list
            activitiesList.innerHTML = '';

            // Populate the list
            activities.forEach(activity => {
                const li = document.createElement('li');
                li.textContent = `${activity.name} - ${activity.duration} minutes`;
                activitiesList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    };

    // Add a new activity
    activityForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const duration = document.getElementById('duration').value;

        try {
            const response = await fetch('http://localhost:8000/activities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, duration }),
            });

            if (response.ok) {
                fetchActivities();
                activityForm.reset();
            } else {
                console.error('Error adding activity');
            }
        } catch (error) {
            console.error('Error adding activity:', error);
        }
    });

    // Initial fetch
    fetchActivities();
});