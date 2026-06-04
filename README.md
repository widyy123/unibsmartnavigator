# unibsmartnavigator
UnibSmartNavigator
Aplikasi navigasi berbasis web untuk optimasi rute di lingkungan Universitas Bengkulu menggunakan Algoritma Dijkstra.

Deskripsi Sistem
UnibSmartNavigator adalah sistem informasi geografis berbasis web yang dirancang untuk membantu civitas akademika Universitas Bengkulu menemukan jalur tercepat antar-gedung. Aplikasi ini mengintegrasikan peta interaktif dengan logika optimasi jalur untuk memberikan estimasi jarak dan waktu tempuh yang akurat, baik dengan berjalan kaki maupun berkendara.

Analisis Teknis
Antarmuka: Menggunakan framework Tailwind CSS dengan estetika glassmorphism untuk menciptakan desain yang responsif, bersih, dan intuitif bagi pengguna.

Struktur Data: Lokasi kampus dipetakan menggunakan struktur graf bidirectional. Setiap gedung (node) menyimpan koordinat serta bobot (jarak dan waktu) yang menjadi dasar kalkulasi.

Algoritma: Implementasi Algoritma Dijkstra digunakan untuk mencari jalur dengan bobot total (jarak/waktu) paling kecil. Algoritma melakukan iterasi sistematis dan relaksasi bobot pada setiap node tetangga untuk memastikan rute yang dihasilkan adalah yang paling efisien.

Integrasi: Visualisasi hasil rute dilakukan melalui library Leaflet.js, yang memungkinkan pengguna melihat jalur optimal secara langsung di atas peta interaktif kampus.

Kesimpulan
Sistem ini berhasil mengimplementasikan metode graf untuk pemecahan masalah navigasi di area kampus. Dengan menggabungkan efisiensi algoritma Dijkstra dan kemudahan akses berbasis web, UnibSmartNavigator menjadi solusi praktis untuk mendukung mobilitas civitas akademika di lingkungan Universitas Bengkulu.
