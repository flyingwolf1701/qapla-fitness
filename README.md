# Qapla' Fitness

**Qapla' Fitness** is a web-based platform focused on adaptive bodyweight training. The goal is to remove friction and shame from working out by rewarding users for effort rather than output. The project name comes from the Klingon word for "success"—showing up is the victory.

---

## Overview

- **Platform:** Browser-based React application
- **Workout type:** Calisthenics only in the MVP
- **Progression:** Movements are organized into five categories (Push, Pull, Dips, Legs, and Core) with 10 levels each
- **Philosophy:** Start small, scale up or down without penalty, and focus on consistency

The app tracks workouts through a simple interface that lets users log reps, change levels on the fly, and earn points for participation. When a user reaches 30 reps at their current level, they unlock the next level in that progression. A typical session targets 50 reps per movement.

## Key MVP Features

1. **Progressive Movement Engine**
   - Sessions are divided into **waves** starting two levels below the user's current level
   - Users adjust levels up or down as needed and log reps for each wave
   - Completing 30 reps at the current level unlocks the next level
   - Any rep combination that hits the 50‑rep target counts as a win
2. **Workout Controls**
   - Level selector, rep input, and target tracker on each screen
   - Buttons to move down or up a level or mark the wave done
   - A log shows the last five workouts for comparison
3. **User Flow**
   - Choose the workout type (Calisthenics is the only option in MVP)
   - Select movements by category
   - Complete each movement in sequence until all are done

## Progressions

**Push (Push-Ups)**
1. Wall
2. Incline
3. Knee
4. Full
5. Decline
6. Diamond
7. Archer
8. Clap
9. One‑Arm Assisted
10. One‑Arm

**Pull (Pull-Ups)**
1. Dead Hang *(disabled in MVP)*
2. Scapular
3. Assisted
4. Negative
5. Jumping
6. Half
7. Full
8. Close
9. Wide
10. Muscle-Up

**Dips**
1. Bench (feet on floor)
2. Bench (elevated)
3. Support Hold
4. Assisted
5. Negative
6. Full
7. Ring
8. Korean
9. Weighted
10. Straight Bar

**Legs (Squats)**
1. Chair
2. Assisted
3. Bodyweight
4. Wide
5. Narrow
6. Bulgarian Split
7. Pistol w/ Support
8. Pistol
9. Jump
10. Shrimp

**Core (Leg Raises)**
1. Lying Knee
2. Lying Leg
3. Hanging Knee
4. Hanging Leg
5. Toes-to-Bar
6. L-Sit
7. Windshield
8. Dragon Flag
9. V-Up
10. Front Lever

---

## Post-MVP Roadmap

- Warm-up flows and time-based holds
- Machine-based movement mapping
- Multiple workout modes (Small, Medium, Large, Massive)
- Avatars and gamified creature modes
- Return bonuses and cooldown libraries
- Voice and haptic coaching
- Native phone and watch apps

---

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

Build for production:

```bash
npm run build
npm run start
```

For deployment using Docker:

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
```

---

Built with ❤️ using React Router and TailwindCSS.

