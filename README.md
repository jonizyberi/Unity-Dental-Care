jonizyberi_db_user
Fjalekalim24.

mongodb+srv://jonizyberi_db_user:Fjalekalim24.@cluster0.wzy77ij.mongodb.net/

Twiglio code recovery  L6669SER4ZFFRNWRYA14QBL6

🧱 1️⃣ ARCHITECTURE OVERVIEW
text

CLIENT (Next.js 15)
│
│  Booking Form → POST → API
│  Login → POST → API
│  Admin → GET → API (Protected)
│
└─────────────── HTTP ───────────────┐
                                      ↓
SERVER (Express)
│
│  /api/auth
│  /api/bookings
│
└─────────────── Mongoose ───────────┐
                                      ↓
MongoDB Atlas (Cloud Database)
🖥 2️⃣ FRONTEND STRUCTURE
text

client/
│
├── app/
│   ├── page.tsx              → Homepage
│   ├── login/page.tsx        → Admin login
│   ├── admin/page.tsx        → Dashboard
│   └── layout.tsx            → Global layout
│
├── components/
│   ├── Navbar.tsx
│   ├── BookingSystem.tsx
│   ├── ClinicServices.tsx
│   ├── DentalLab.tsx
│   ├── DentalTourism.tsx
│   └── Footer.tsx
│
├── src/i18n/
│   ├── i18n.ts
│   └── locales/
│       ├── en.json
│       ├── sq.json
│       └── it.json
│
└── .env.local
🌍 3️⃣ MULTI-LANGUAGE SYSTEM
Library:

text

react-i18next
Core file:

text

src/i18n/i18n.ts
Logic:

JSON-based translations
Language stored in localStorage
useTranslation() hook
Example usage:

React

const { t } = useTranslation();
<h2>{t("home.title")}</h2>
🔐 4️⃣ AUTHENTICATION SYSTEM
Backend uses:
bcryptjs
jsonwebtoken
JWT Middleware
User Model
JavaScript

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, default: "admin" }
});
Password hashing:

JavaScript

bcrypt.hash()
JWT Generation
JavaScript

jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" })
Auth Middleware
JavaScript

export const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
};
🗄 5️⃣ DATABASE STRUCTURE
Booking Model
JavaScript

{
  name: String,
  email: String,
  phone: String,
  message: String,
  date: Date,
  status: "pending" | "approved" | "rejected"
}
🔄 6️⃣ BOOKING FLOW
1️⃣ User fills booking form
2️⃣ Frontend sends:

text

POST /api/bookings
3️⃣ Server saves booking in MongoDB
4️⃣ Admin dashboard fetches:

text

GET /api/bookings
5️⃣ Admin updates status:

text

PUT /api/bookings/:id
📊 7️⃣ ADMIN DASHBOARD
Features implemented:

✅ Search
✅ Sorting
✅ Pagination
✅ Modal details
✅ Status update
✅ Chart.js graph
✅ Protected route

Protected with:

React

Authorization: Bearer TOKEN
If invalid:

React

router.push("/login")
🛡 8️⃣ SECURITY LAYER
✅ JWT verification
✅ Protected GET & PUT routes
✅ Password hashing
✅ Token expiry
✅ Role-based middleware
✅ CORS configuration

📡 9️⃣ ENVIRONMENT VARIABLES
Frontend (.env.local)
text

NEXT_PUBLIC_API_URL=http://localhost:5000
Backend (.env)
text

PORT=5000
MONGO_URI=...
JWT_SECRET=...
CLIENT_URL=http://localhost:3000
📈 10️⃣ CURRENT SYSTEM STATUS
✅ Multi-language functional
✅ MongoDB connected
✅ Admin login working
✅ Dashboard live
✅ Booking real-time
✅ JWT protected
✅ Graph dashboard
✅ Status system

🔮 11️⃣ NEXT LEVEL OPTIONS
Role-based system (admin/receptionist)
Email notifications
Refresh tokens
Rate limiting
Production deployment
Audit logging
Payment integration
✅ SHORT TECH SUMMARY
You built:

✔ Full-stack MERN architecture
✔ Authenticated admin system
✔ Multi-language support
✔ Secure API
✔ Modern UI
✔ Live dashboard with analytics

This is now a real production-grade booking system.