
import { useEffect, useState } from "react";

const BASE = "http://localhost:5000/api";

export default function PaymentPage() {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE}/payments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setPayments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredPayments = payments.filter((p) => {
    const studentName =
      p.student?.name?.toLowerCase() || "";

    const searchMatch = studentName.includes(
      search.toLowerCase()
    );

    const minMatch =
      !minAmount || p.amount >= Number(minAmount);

    const maxMatch =
      !maxAmount || p.amount <= Number(maxAmount);

    return searchMatch && minMatch && maxMatch;
  });

  const totalRevenue = payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const paidCount = payments.filter(
    (p) => p.status === "Paid"
  ).length;

  const pendingCount = payments.filter(
    (p) => p.status === "Pending"
  ).length;

  return (
    <div style={styles.container}>
      <h2>💳 Payment Dashboard</h2>

      {/* CARDS */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>₹{totalRevenue}</h3>
          <p>Total Revenue</p>
        </div>

        <div style={styles.card}>
          <h3>{paidCount}</h3>
          <p>Paid Payments</p>
        </div>

        <div style={styles.card}>
          <h3>{pendingCount}</h3>
          <p>Pending Payments</p>
        </div>
      </div>

      {/* FILTERS */}
      <div style={styles.filterBox}>
        <input
          style={styles.input}
          placeholder="🔍 Search student..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Min Amount"
          value={minAmount}
          onChange={(e) =>
            setMinAmount(e.target.value)
          }
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Max Amount"
          value={maxAmount}
          onChange={(e) =>
            setMaxAmount(e.target.value)
          }
        />
      </div>

      {/* TABLE */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Course</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.length > 0 ? (
              filteredPayments.map((p, index) => (
                <tr key={p._id}>
                  <td>{index + 1}</td>

                  <td>{p.student?.name}</td>

                  <td>{p.course?.title}</td>

                  <td>₹{p.amount}</td>

                  <td>
                    {new Date(
                      p.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <span
                      style={{
                        color:
                          p.status === "Paid"
                            ? "green"
                            : "orange",
                        fontWeight: "bold",
                      }}
                    >
                      {p.status}
                    </span>
                  </td>

                  <td>
                    <button
                      style={styles.viewBtn}
                    >
                      👁 View
                    </button>

                    <a
                      href={`${BASE}/payments/receipt/${p._id}`}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.receiptBtn}
                    >
                      ⬇ Receipt
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Payment Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#f5f7fb",
    minHeight: "100vh",
  },

  cards: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },

  card: {
    flex: 1,
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  filterBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },

  tableWrapper: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  viewBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "5px",
  },

  receiptBtn: {
    background: "green",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: "6px",
    textDecoration: "none",
  },
};