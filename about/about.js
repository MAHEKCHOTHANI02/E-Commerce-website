document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function() {
      document.querySelectorAll('.language-option').forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
      
      const selectedLang = this.getAttribute('data-lang');
      changeLanguage(selectedLang);
    });
  });
  
  function changeLanguage(lang) {
    // Function to change the language of the website
    // This could involve loading different content, changing text, etc.
    console.log(`Language changed to: ${lang}`);
    // Implementation to change content goes here
  }
  