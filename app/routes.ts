import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("routes/workout-type.tsx"),
  route("routes/select-movements.tsx"),
  route("routes/workout.tsx"),
] satisfies RouteConfig;
