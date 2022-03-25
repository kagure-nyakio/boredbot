const getActivityBtn = document.querySelector('#get-activity-btn')
const activityTxt = document.querySelector('#activity-txt')


getActivityBtn.addEventListener('click', () => {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
      document.getElementById("title").textContent = "🦾 HappyBot🦿"
      activityTxt.classList.add('fade-in')
      activityTxt.textContent = data.activity
    })
})