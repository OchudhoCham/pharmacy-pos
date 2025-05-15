import React, { useEffect, useState } from 'react';
import { getMedicines } from '../api/medicine';

export default function MedicineList() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    getMedicines().then((res) => setMedicines(res.data));
  }, []);

  return (
    <div>
      <h1>Medicine Inventory</h1>
      <ul>
        {medicines.map((med) => (
          <li key={med.id}>{med.name} — {med.quantity} units</li>
        ))}
      </ul>
    </div>
  );
}
