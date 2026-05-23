"use client";
 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
 
interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  status: "pending" | "approved" | "rejected";
}
 
export default function AdminPage() {
  const router = useRouter();
 
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
 
  const itemsPerPage = 5;
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    fetchBookings(token);
  }, []);
 
  const fetchBookings = async (token: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bookings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
 
      const data = await res.json();
 
      if (!res.ok) {
        console.error("Backend error:", data);
        setBookings([]);
        return;
      }
 
      if (Array.isArray(data)) {
        setBookings(data);
      } else {
        console.error("Unexpected response:", data);
        setBookings([]);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      setBookings([]);
    }
  };
 
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
 
  const updateStatus = async (id: string, status: string) => {
    const token = localStorage.getItem("token");
    if (!token) return;
 
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      }
    );
 
    const updated = await res.json();
 
    if (!res.ok) {
      console.error("Update failed:", updated);
      return;
    }
 
    setBookings((prev) => prev.map((b) => (b._id === id ? updated : b)));
    setSelectedBooking(updated);
  };
 
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );
 
    if (!confirmDelete) return;
 
    const token = localStorage.getItem("token");
    if (!token) return;
 
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
 
    if (!res.ok) {
      console.error("Delete failed");
      return;
    }
 
    setBookings((prev) => prev.filter((booking) => booking._id !== id));
    setSelectedBooking(null);
  };
 
  const filtered = Array.isArray(bookings)
    ? bookings
        .filter(
          (b) =>
            b.name.toLowerCase().includes(search.toLowerCase()) ||
            b.email.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
          if (sortBy === "date") {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          }
          if (sortBy === "name") {
            return a.name.localeCompare(b.name);
          }
          return 0;
        })
    : [];
 
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
 
  return (
    <>
      {/* ✅ FSHEH NAVBAR-IN GLOBAL */}
      <style>{`
        nav, header { display: none !important; }
      `}</style>
 
      <div className="min-h-screen bg-[#071A26] text-white p-10">
        
        {/* ✅ HEADER ME LOGOUT */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">
            Unity<span className="text-cyan-400">Dental</span> — Admin Dashboard
          </h1>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded font-semibold transition"
          >
            Logout
          </button>
        </div>
 
        {/* SEARCH + SORT */}
        <div className="flex justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 w-1/2 bg-white/10 rounded"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-3 bg-white/10 rounded"
          >
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
 
        {/* TABLE */}
        <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
          <table className="w-full text-left">
            <thead className="bg-white/10">
              <tr>
                <th className="p-4">Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-t border-white/10 hover:bg-white/5"
                >
                  <td className="p-4">{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{new Date(booking.date).toLocaleDateString()}</td>
                  <td>{booking.status}</td>
                  <td>
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="bg-cyan-400 text-black px-3 py-1 rounded"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 
        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-cyan-400 text-black"
                    : "bg-white/10"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
 
        {/* MODAL */}
        {selectedBooking && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#0d2535] rounded-2xl p-8 w-full max-w-md border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                Booking Details
              </h2>
              <p><span className="text-white/50">Name:</span> {selectedBooking.name}</p>
              <p><span className="text-white/50">Email:</span> {selectedBooking.email}</p>
              <p><span className="text-white/50">Phone:</span> {selectedBooking.phone}</p>
              <p><span className="text-white/50">Date:</span> {new Date(selectedBooking.date).toLocaleDateString()}</p>
              <p><span className="text-white/50">Message:</span> {selectedBooking.message}</p>
              <p className="mt-2">
                <span className="text-white/50">Status:</span>{" "}
                <span className={`font-semibold ${
                  selectedBooking.status === "approved" ? "text-green-400" :
                  selectedBooking.status === "rejected" ? "text-red-400" :
                  "text-yellow-400"
                }`}>
                  {selectedBooking.status}
                </span>
              </p>
 
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => updateStatus(selectedBooking._id, "approved")}
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(selectedBooking._id, "rejected")}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition"
                >
                  Reject
                </button>
                <button
                  onClick={() => handleDelete(selectedBooking._id)}
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition"
                >
                  Delete
                </button>
              </div>
 
              <button
                onClick={() => setSelectedBooking(null)}
                className="mt-4 text-white/50 hover:text-white text-sm"
              >
                ✕ Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}