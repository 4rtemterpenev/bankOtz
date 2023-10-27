function toggleBlock() {
  const title = document.querySelector('.instruct-block__btn');
  const content = document.querySelector('.instruct-block__cards');
  const arrow = document.querySelector('.instruct-block__icon');

  if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'flex';
      arrow.style.transform = 'rotate(180deg)';
  } else {
      content.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
  }
}

const accordionItems = document.querySelectorAll('.links-block__item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.links-block__switch');
    const content = item.querySelector('.links-block__content');
    const arrow = item.querySelector('.links-block__arrow');

    header.addEventListener('click', () => {
        content.classList.toggle('show');
        arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});