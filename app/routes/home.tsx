import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Qapla' Fitness" },
    { name: "description", content: "Qapla' Fitness Workout" },
  ];
}

export default function Home() {
  return <Welcome />;
}
