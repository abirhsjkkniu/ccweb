// PLACEHOLDER DATA — replace with real tournament records.
export const tournaments = [
  {
    id: "t1",
    name: "JKKNIU Inter-Department Chess Championship 2026",
    date: "2026-11-14",
    registrationDeadline: "2026-11-05",
    format: "Swiss System — 7 Rounds",
    participants: 64,
    maxParticipants: 80,
    status: "upcoming",
    venue: "Central Auditorium, JKKNIU",
    description: "The flagship annual championship open to all departments, featuring classical time control and standard FIDE rules.",
    rules: [
      "Standard FIDE rules apply throughout the event.",
      "Time control: 90 minutes + 30 seconds increment per move.",
      "Players must report 15 minutes before each round.",
      "Three consecutive byes result in disqualification.",
    ],
    schedule: [
      { round: "Round 1-2", time: "14 Nov, 9:00 AM – 1:00 PM" },
      { round: "Round 3-4", time: "14 Nov, 2:30 PM – 6:30 PM" },
      { round: "Round 5-6", time: "15 Nov, 9:00 AM – 1:00 PM" },
      { round: "Round 7 & Prize Giving", time: "15 Nov, 2:30 PM – 6:00 PM" },
    ],
  },
  {
    id: "t2",
    name: "Freshers' Rapid Chess Cup 2026",
    date: "2026-10-10",
    registrationDeadline: "2026-10-02",
    format: "Rapid — Round Robin",
    participants: 32,
    maxParticipants: 32,
    status: "ongoing",
    venue: "Chess Club Room, Student Activity Center",
    description: "A welcoming rapid tournament designed to introduce newly admitted students to competitive chess at JKKNIU.",
    rules: [
      "Open only to first-year students.",
      "Time control: 15 minutes + 10 seconds increment.",
      "Round robin format within groups of 8 players.",
    ],
    schedule: [
      { round: "Group Stage", time: "10 Oct, 10:00 AM – 4:00 PM" },
      { round: "Finals", time: "10 Oct, 4:30 PM – 6:00 PM" },
    ],
  },
  {
    id: "t3",
    name: "JKKNIU Blitz Championship 2026",
    date: "2026-08-20",
    registrationDeadline: "2026-08-15",
    format: "Blitz — Swiss System",
    participants: 48,
    maxParticipants: 48,
    status: "completed",
    venue: "Central Auditorium, JKKNIU",
    description: "A high-speed blitz event that tested quick decision-making and tactical sharpness among club members.",
    rules: [
      "Time control: 5 minutes per player, no increment.",
      "9-round Swiss system.",
    ],
    schedule: [
      { round: "All Rounds", time: "20 Aug, 10:00 AM – 5:00 PM" },
    ],
    winner: "Sadman Anik",
  },
];

export const leaderboard = [
  { rank: 1, player: "Sadman Anik", department: "CSE", games: 9, wins: 8, draws: 1, losses: 0, points: 8.5 },
  { rank: 2, player: "Md. Rakibul Hasan", department: "English", games: 9, wins: 7, draws: 1, losses: 1, points: 7.5 },
  { rank: 3, player: "Tanvir Hossain", department: "Physics", games: 9, wins: 6, draws: 2, losses: 1, points: 7.0 },
  { rank: 4, player: "Farzana Yasmin", department: "Botany", games: 9, wins: 6, draws: 1, losses: 2, points: 6.5 },
  { rank: 5, player: "Arifin Chowdhury", department: "Law", games: 9, wins: 5, draws: 2, losses: 2, points: 6.0 },
  { rank: 6, player: "Ruma Akter", department: "Bangla", games: 9, wins: 5, draws: 1, losses: 3, points: 5.5 },
  { rank: 7, player: "Mahin Sarker", department: "Statistics", games: 9, wins: 4, draws: 2, losses: 3, points: 5.0 },
  { rank: 8, player: "Nusrat Jahan Priya", department: "Public Admin.", games: 9, wins: 3, draws: 2, losses: 4, points: 4.0 },
];
