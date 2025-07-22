import { MealType, DietaryTag, NutrientType } from './enums';

// Data passed as props to the root component
export const mockRootProps = {
  meals: [
    {
      id: 1,
      name: "Avocado Toast",
      description: "Whole grain toast topped with fresh avocado, cherry tomatoes, and a sprinkle of hemp seeds",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop",
      calories: 320,
      mealType: MealType.BREAKFAST as const,
      time: "08:00 AM",
      tags: [DietaryTag.VEGAN as const, DietaryTag.HIGH_PROTEIN as const]
    },
    {
      id: 2,
      name: "Greek Yogurt Bowl",
      description: "Creamy Greek yogurt with mixed berries, granola, and a drizzle of honey",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop",
      calories: 280,
      mealType: MealType.BREAKFAST as const,
      time: "08:30 AM",
      tags: [DietaryTag.HIGH_PROTEIN as const, DietaryTag.VEGETARIAN as const]
    },
    {
      id: 3,
      name: "Grilled Chicken Salad",
      description: "Fresh mixed greens with grilled chicken breast, cucumber, tomatoes, and balsamic vinaigrette",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
      calories: 450,
      mealType: MealType.LUNCH as const,
      time: "12:30 PM",
      tags: [DietaryTag.HIGH_PROTEIN as const, DietaryTag.LOW_CARB as const]
    },
    {
      id: 4,
      name: "Quinoa Buddha Bowl",
      description: "Nutritious bowl with quinoa, roasted vegetables, chickpeas, and tahini dressing",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
      calories: 520,
      mealType: MealType.LUNCH as const,
      time: "01:00 PM",
      tags: [DietaryTag.VEGAN as const, DietaryTag.GLUTEN_FREE as const]
    },
    {
      id: 5,
      name: "Salmon with Vegetables",
      description: "Pan-seared salmon fillet served with steamed broccoli and roasted sweet potatoes",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop",
      calories: 580,
      mealType: MealType.DINNER as const,
      time: "07:00 PM",
      tags: [DietaryTag.HIGH_PROTEIN as const, DietaryTag.KETO as const]
    },
    {
      id: 6,
      name: "Vegetable Stir Fry",
      description: "Colorful mix of bell peppers, snap peas, carrots, and tofu in a savory sauce",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
      calories: 380,
      mealType: MealType.DINNER as const,
      time: "07:30 PM",
      tags: [DietaryTag.VEGAN as const, DietaryTag.LOW_CARB as const]
    },
    {
      id: 7,
      name: "Mixed Nuts",
      description: "A handful of almonds, walnuts, and cashews for a healthy energy boost",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=200&fit=crop",
      calories: 180,
      mealType: MealType.SNACKS as const,
      time: "03:00 PM",
      tags: [DietaryTag.KETO as const, DietaryTag.GLUTEN_FREE as const]
    },
    {
      id: 8,
      name: "Protein Smoothie",
      description: "Blend of banana, spinach, protein powder, almond milk, and peanut butter",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop",
      calories: 250,
      mealType: MealType.SNACKS as const,
      time: "10:00 AM",
      tags: [DietaryTag.HIGH_PROTEIN as const, DietaryTag.VEGETARIAN as const]
    }
  ],
  nutritionSummary: {
    calories: { consumed: 1850, goal: 2200 },
    protein: { consumed: 125, goal: 150 },
    carbs: { consumed: 180, goal: 220 },
    fats: { consumed: 65, goal: 80 }
  },
  prepList: [
    {
      id: 1,
      item: "Prep overnight oats",
      completed: false,
      icon: "bowl"
    },
    {
      id: 2,
      item: "Wash and chop vegetables",
      completed: true,
      icon: "vegetables"
    },
    {
      id: 3,
      item: "Marinate chicken breast",
      completed: false,
      icon: "meat"
    },
    {
      id: 4,
      item: "Prepare protein smoothie mix",
      completed: false,
      icon: "smoothie"
    }
  ]
};