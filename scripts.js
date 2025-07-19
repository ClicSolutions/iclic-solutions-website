function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(e) {
  e.preventDefault();
  alert('Terima kasih! Kami akan hubungi anda tidak lama lagi 😊');
  e.target.reset();
  return false;
}
