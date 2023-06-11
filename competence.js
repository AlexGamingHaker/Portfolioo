const competenceContainer = document.querySelector('.competences-container');
const competences = competenceContainer.querySelectorAll('.competence');
const competenceDropdown = competenceContainer.querySelectorAll('.competence-dropdown');

competences.forEach((competence, index) => {
  competence.addEventListener('mouseover', () => {
    competenceDropdown[index].classList.add('active');
  });

  competence.addEventListener('mouseout', () => {
    competenceDropdown[index].classList.remove('active');
  });

  competenceDropdown[index].addEventListener('mouseover', () => {
    competenceDropdown[index].classList.add('active');
  });

  competenceDropdown[index].addEventListener('mouseout', () => {
    competenceDropdown[index].classList.remove('active');
  });
});