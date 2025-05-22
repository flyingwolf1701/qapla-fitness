import { useSearchParams } from "react-router";
import { useState } from "react";
import { progressions, type MovementCategory } from "../movements";

export default function Workout() {
  const [params] = useSearchParams();
  const movements = params.get("movements")?.split(",") as MovementCategory[] | undefined;
  const [index, setIndex] = useState(0);
  const [level, setLevel] = useState(1);
  const [reps, setReps] = useState(0);

  if (!movements || movements.length === 0) {
    return (
      <main className="p-8">
        <p>No movements selected.</p>
      </main>
    );
  }

  const current = movements[index];

  const next = () => {
    if (index < movements.length - 1) {
      setIndex(index + 1);
      setReps(0);
    } else {
      setComplete(true);
    }
  };

  const [complete, setComplete] = useState(false);

  if (complete) {
    return (
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">Workout Complete!</h1>
      </main>
    );
  }

  const levels = progressions[current];

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">{current}</h1>
      <div className="space-x-2">
        <button
          onClick={() => setLevel((l) => Math.max(1, l - 1))}
          className="px-3 py-1 border rounded"
        >
          ⬇
        </button>
        <select
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          className="border p-1"
        >
          {levels.map((_, i) => (
            <option key={i} value={i + 1}>
              Level {i + 1}
            </option>
          ))}
        </select>
        <button
          onClick={() => setLevel((l) => Math.min(levels.length, l + 1))}
          className="px-3 py-1 border rounded"
        >
          ⬆
        </button>
      </div>
      <div className="space-x-2">
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
          className="border p-1 w-20"
        />
        <span>/ 50</span>
      </div>
      <button
        onClick={next}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        ✅ Done
      </button>
    </main>
  );
}
