import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center p-8 space-y-6">
      <h1 className="text-3xl font-bold">Qapla' Fitness</h1>
      <Link
        to="/workout-type"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Start Workout
      </Link>
    </main>
  );
}
