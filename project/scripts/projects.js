const filterButtons = document.querySelectorAll('.filter-list a');
const projectCards = document.querySelectorAll('.project-card');
const filterEmpty = document.querySelector('.filter-empty');

filterButtons.forEach((button) => {
  button.addEventListener('click', function (event) {
    event.preventDefault();

    const selectedFilter = this.dataset.filter || 'all';

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === this));

    let visibleCount = 0;

    projectCards.forEach((card) => {
      const matches = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.hidden = !matches;
      if (matches) {
        visibleCount += 1;
      }
    });

    if (filterEmpty) {
      filterEmpty.hidden = visibleCount !== 0;
    }
  });
});
