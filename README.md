🚦 Python Light Traffic API

REST API sederhana menggunakan FastAPI untuk simulasi dan pengelolaan sistem traffic (lampu lalu lintas).

Project ini dibuat sebagai latihan backend menggunakan FastAPI dengan struktur folder yang rapi dan scalable.

📦 Tech Stack

Python 3.13

FastAPI

Uvicorn

Pydantic

📁 Struktur Project
backend/
│
├── app/
│   ├── main.py
│   ├── routers/
│   │    └── traffic.py
│   ├── schemas/
│   │    └── traffic_schema.py
│
└── venv/
Penjelasan

main.py → Entry point aplikasi

routers/ → Menyimpan endpoint API

schemas/ → Validasi request & response

venv/ → Virtual environment Python

⚙️ Instalasi
1️⃣ Clone Repository
git clone <repository-url>
cd backend
2️⃣ Buat Virtual Environment
python -m venv venv
3️⃣ Aktifkan Virtual Environment

Windows (Git Bash):

source venv/Scripts/activate

atau

venv\Scripts\activate
4️⃣ Install Dependencies
pip install fastapi uvicorn
▶️ Menjalankan Server

Karena file utama ada di dalam folder app, jalankan:

uvicorn app.main:app --reload

Server akan berjalan di:

http://127.0.0.1:8000
📄 Dokumentasi API

Swagger UI otomatis tersedia di:

http://127.0.0.1:8000/docs

Redoc tersedia di:

http://127.0.0.1:8000/redoc
🧪 Contoh Endpoint
GET Traffic Status
GET /traffic

Response:

{
  "status": "Traffic running"
}
🚀 Pengembangan Selanjutnya

Beberapa fitur yang bisa ditambahkan:

Simulasi lampu merah (Red, Yellow, Green)

Perhitungan kepadatan kendaraan

Integrasi database

Authentication (JWT)

Logging & middleware

🛠 Development Notes

Gunakan --reload hanya saat development

Pastikan menjalankan server dari folder backend

Jika muncul error Could not import module, cek struktur folder dan path uvicorn

📌 Author

Developed as a backend learning project using FastAPI.
