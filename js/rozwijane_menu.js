document.addEventListener('DOMContentLoaded', function() {
  // Tutaj umieść swój kod JavaScript
  function Rozwin(event) {
      const dropdownMenu = document.querySelector('.menu_rozwijane');
      const przycisk = document.querySelector('.przycisk_menu span');
      const isOpen = dropdownMenu.classList.toggle('open');

      przycisk.textContent = isOpen ? '×' : '☰';

      document.querySelectorAll('.przeswit').forEach(element => {
          element.style.display = isOpen ? 'none' : 'block';
      });

      if (isOpen) {
          dropdownMenu.querySelectorAll('a').forEach(link => {
              link.addEventListener('click', handleLinkClick);
          });
      } else {
          dropdownMenu.querySelectorAll('a').forEach(link => {
              link.removeEventListener('click', handleLinkClick);
          });
      }

      event.preventDefault();
  }

  function handleLinkClick(event) {
      event.stopPropagation();
      Rozwin(event);
  }

  document.querySelector('.przycisk_menu').addEventListener('click', Rozwin);
});
