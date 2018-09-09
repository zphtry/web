export const switch_state = (e) => {

  if(e.classList[0] == 'heaven') e.className = 'hell'
  else e.className = 'heaven'

  e.textContent = 'omae wa mou shindeiru'
}