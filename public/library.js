function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  if (sb.style.display === 'block') sb.style.display = '';
  else sb.style.display = 'block';
}

function filterBooks() {
  const q = document.getElementById('search').value.toLowerCase();
  const books = document.querySelectorAll('#booksGrid .book');
  books.forEach(b => {
    const t = b.getAttribute('data-title').toLowerCase();
    const a = b.getAttribute('data-author').toLowerCase();
    if (t.includes(q) || a.includes(q)) b.style.display = '';
    else b.style.display = 'none';
  })
}

function resetSearch() {
  document.getElementById('search').value = '';
  filterBooks();
}

// Smooth scroll for sidebar links
document.querySelectorAll('.fac-list a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('main.card').scrollIntoView({
      behavior: 'smooth'
    });
  })
})