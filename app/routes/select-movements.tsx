import { useNavigate } from "react-router";
import { useState } from "react";
import { movementCategories } from "../movements";

export default function SelectMovements() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (cat: string) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const next = () => {
    if (selected.length === 0) return;
    navigate(`/workout?movements=${selected.join(",")}`);
  };

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Select Movements</h1>
      <ul className="space-y-2">
        {movementCategories.map((cat) => (
          <li key={cat}>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value={cat}
                checked={selected.includes(cat)}
                onChange={() => toggle(cat)}
              />
              {cat}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={next}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={selected.length === 0}
      >
        Next
      </button>
    </main>
  );
}
