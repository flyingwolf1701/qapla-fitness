import { Link } from "react-router";

export default function WorkoutType() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Choose Workout Type</h1>
      <div>
        <label className="flex items-center gap-2">
          <input type="radio" name="type" defaultChecked disabled />
          Calisthenics
        </label>
      </div>
      <Link
        to="/select-movements"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next
      </Link>
    </main>
  );
}
