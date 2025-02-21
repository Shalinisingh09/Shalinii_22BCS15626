import { useState } from 'react';

const Home = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const rollNumber = "22BCS15626";

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      setResponseData(data);
    } catch (error) {
      alert("Error occuring in data from backend");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{rollNumber}</h1>
      <button onClick={handleSubmit} style={{ marginTop: 10 }}>Fetch Data</button>
      <select multiple onChange={(e) => setSelectedOptions([...e.target.selectedOptions].map(o => o.value))} style={{ width: "100%", marginTop: 10 }}>
        <option value="Alphabets">Alphabets</option>
        <option value="Numbers">Numbers</option>
        <option value="Highest Alphabet">Highest Alphabet</option>
      </select>
      {responseData && (
        <div style={{ marginTop: 20, padding: 10, border: "1px solid black" }}>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;
