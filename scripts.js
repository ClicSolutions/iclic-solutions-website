const SHEET_URL = 'PASTE_GOOGLE_SHEET_CSV_URL';

fetch(SHEET_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split('\n').slice(1);
    const data = lines.map(row => {
      const [nama, tarikh, lokasi] = row.split(',');
      return { nama, tarikh, lokasi };
    });

    document.getElementById('search').addEventListener('input', function () {
      const term = this.value.toLowerCase();
      const hasil = data.filter(d => d.nama.toLowerCase().includes(term));
      document.getElementById('results').innerHTML = hasil.map(d =>
        `<div>
           <strong>${d.nama}</strong><br>
           Tarikh: ${d.tarikh}<br>
           Lokasi: ${d.lokasi}<br>
           <a href="https://maps.google.com?q=${encodeURIComponent(d.lokasi)}" target="_blank" class="button">📍 Lihat di Peta</a>
         </div>`
      ).join('');
    });
  })
  .catch(err => console.error('Fetch error:', err));
