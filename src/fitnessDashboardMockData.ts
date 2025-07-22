// Data passed as props to the root component
export const mockRootProps = {
  user: {
    name: "User",
    greeting: "Good Morning"
  },
  activities: [
    {
      type: "workout" as const,
      value: "4 hrs",
      icon: "timer",
      backgroundImage: "/images/workout-bg.png"
    },
    {
      type: "calories" as const,
      value: "1800 kcl",
      icon: "flame",
      backgroundImage: "/images/calories-bg.png"
    },
    {
      type: "steps" as const,
      value: "2200 steps",
      icon: "footprints",
      backgroundImage: "/images/steps-bg.png"
    }
  ],
  goalProgress: {
    weeklyData: [
      { day: "Mon", workout: 30, calories: 50, steps: 70 },
      { day: "Tue", workout: 45, calories: 35, steps: 50 },
      { day: "Wed", workout: 70, calories: 60, steps: 55 },
      { day: "Thu", workout: 75, calories: 80, steps: 45 },
      { day: "Fri", workout: 30, calories: 60, steps: 75 },
      { day: "Sat", workout: 35, calories: 65, steps: 80 },
      { day: "Sun", workout: 60, calories: 55, steps: 70 }
    ]
  },
  schedule: [
    {
      day: "Monday",
      exercise: "Stretch",
      time: "At 08:00",
      target: "20 Pieces",
      image: "/images/stretch-exercise.png"
    },
    {
      day: "Tuesday", 
      exercise: "Back Stretch",
      time: "At 08:00",
      target: "10 Round",
      image: "/images/back-stretch-exercise.png"
    },
    {
      day: "Wednesday",
      exercise: "Yoga", 
      time: "At 08:00",
      target: "20 min",
      image: "/images/yoga-exercise.png"
    }
  ],
  goals: [
    {
      title: "Running on Track",
      date: "Saturday, April 14 | 08:00 AM",
      target: "04 Rounds"
    },
    {
      title: "Push Up",
      date: "Sunday, April 15 | 08:00 AM", 
      target: "50 Pieces"
    }
  ],
  premiumOffer: {
    title: "50% off on Premium Membership",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    image: "/images/premium-promo.png"
  }
};