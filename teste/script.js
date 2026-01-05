// Função para buscar os dados da API
async function fetchActivities() {
  try {
    const response = await fetch('http://localhost:8000/activities');
    if (!response.ok) {
      throw new Error('Erro ao buscar atividades');
    }
    const data = await response.json();
    displayActivities(data);
  } catch (error) {
    console.error('Erro:', error);
  }
}

// Função para exibir as atividades na página
function displayActivities(activities) {
  const list = document.getElementById('activity-list');
  activities.forEach(activity => {
    const listItem = document.createElement('li');
    listItem.textContent = `${activity.name} - ${activity.duration} mins`;
    list.appendChild(listItem);
  });
}

// Chamar a função ao carregar a página
document.addEventListener('DOMContentLoaded', fetchActivities);