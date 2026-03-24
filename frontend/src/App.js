import { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    edge_followed_by: "",
    edge_follow: "",
    username_length: "",
    username_has_number: 0,
    full_name_has_number: 0,
    full_name_length: "",
    is_private: 0,
    is_joined_recently: 0,
    has_channel: 0,
    is_business_account: 0,
    has_guides: 0,
    has_external_url: 0,
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", form);
      setResult(res.data.result);
    } catch (err) {
      alert("API Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🤖 Bot Detection System</h1>

        <div style={styles.grid}>
          <input
            name="edge_followed_by"
            placeholder="Followers"
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="edge_follow"
            placeholder="Following"
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="username_length"
            placeholder="Username Length"
            onChange={handleChange}
            style={styles.input}
          />
          <input
            name="full_name_length"
            placeholder="Full Name Length"
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="username_has_number"
            onChange={handleChange}
            style={styles.input}
          >
            <option value={0}>Username has number: No</option>
            <option value={1}>Yes</option>
          </select>

          <select
            name="is_private"
            onChange={handleChange}
            style={styles.input}
          >
            <option value={0}>Private: No</option>
            <option value={1}>Yes</option>
          </select>

          <select
            name="is_joined_recently"
            onChange={handleChange}
            style={styles.input}
          >
            <option value={0}>Recently Joined: No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        <button onClick={handleSubmit} style={styles.button}>
          Analyze
        </button>

        {result && (
          <div
            style={{
              ...styles.result,
              backgroundColor: result === "Bot" ? "#ff4d4d" : "#4CAF50",
            }}
          >
            {result === "Bot" ? "⚠️ Bot Detected" : "✅ Real User"}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    marginTop: "15px",
    width: "100%",
    padding: "12px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  result: {
    marginTop: "20px",
    padding: "12px",
    borderRadius: "8px",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default App;
