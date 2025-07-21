import { Group, Stack } from '@mantine/core';
import { useState } from 'react';
import { MealType } from '../../enums';
import MealSection from '../MealSection/MealSection';
import NutritionSummary from '../NutritionSummary/NutritionSummary';
import PrepList from '../PrepList/PrepList';
import AddFoodModal from '../AddFoodModal/AddFoodModal';
import ViewDetailsModal from '../ViewDetailsModal/ViewDetailsModal';
import ReplaceItemModal from '../ReplaceItemModal/ReplaceItemModal';
import { DietPlanProps, Meal } from '../../types';
import classes from './DietPlanPage.module.css';

const DietPlanPage = ({ meals: initialMeals, nutritionSummary, prepList }: DietPlanProps) => {
  const [meals, setMeals] = useState<Meal[]>(initialMeals);
  const [addFoodModalOpened, setAddFoodModalOpened] = useState(false);
  const [viewDetailsModalOpened, setViewDetailsModalOpened] = useState(false);
  const [replaceItemModalOpened, setReplaceItemModalOpened] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState<string>('');
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const handleAddFood = (mealType: string) => {
    setSelectedMealType(mealType);
    setAddFoodModalOpened(true);
  };

  const handleViewDetails = (mealId: number) => {
    const meal = meals.find(m => m.id === mealId);
    if (meal) {
      setSelectedMeal(meal);
      setViewDetailsModalOpened(true);
    }
  };

  const handleReplaceItem = (mealId: number) => {
    const meal = meals.find(m => m.id === mealId);
    if (meal) {
      setSelectedMeal(meal);
      setReplaceItemModalOpened(true);
    }
  };

  const handleAddFoodSubmit = (foodData: {
    name: string;
    calories: number;
    mealType: string;
    time: string;
    tags: string[];
    image: string;
  }) => {
    const newMeal: Meal = {
      id: Math.max(...meals.map(m => m.id)) + 1,
      ...foodData
    };
    setMeals(prev => [...prev, newMeal]);
  };

  const handleReplaceMeal = (newMealId: number) => {
    if (!selectedMeal) return;
    
    const newMeal = meals.find(m => m.id === newMealId);
    if (newMeal) {
      setMeals(prev => prev.map(meal => 
        meal.id === selectedMeal.id 
          ? { ...newMeal, id: selectedMeal.id, time: selectedMeal.time }
          : meal
      ));
    }
  };

  const groupMealsByType = () => {
    const grouped = meals.reduce((acc, meal) => {
      if (!acc[meal.mealType]) {
        acc[meal.mealType] = [];
      }
      acc[meal.mealType].push(meal);
      return acc;
    }, {} as Record<string, typeof meals>);

    // Ensure all meal types are present in the correct order
    const mealTypes = [MealType.BREAKFAST, MealType.LUNCH, MealType.DINNER, MealType.SNACKS];
    return mealTypes.map(type => ({
      type,
      meals: grouped[type] || []
    }));
  };

  const mealSections = groupMealsByType();

  return (
    <>
      <Group align="flex-start" gap={32} className={classes.container}>
        <Stack flex={1} gap={24} className={classes.mainContent}>
          {mealSections.map((section) => (
            <MealSection
              key={section.type}
              mealType={section.type}
              meals={section.meals}
              onAddFood={handleAddFood}
              onViewDetails={handleViewDetails}
              onReplaceItem={handleReplaceItem}
            />
          ))}
        </Stack>
        
        <Stack w={320} gap={24} className={classes.rightPanel}>
          <NutritionSummary nutritionSummary={nutritionSummary} />
          <PrepList prepList={prepList} />
        </Stack>
      </Group>

      <AddFoodModal
        opened={addFoodModalOpened}
        onClose={() => setAddFoodModalOpened(false)}
        mealType={selectedMealType}
        onSubmit={handleAddFoodSubmit}
      />

      <ViewDetailsModal
        opened={viewDetailsModalOpened}
        onClose={() => setViewDetailsModalOpened(false)}
        meal={selectedMeal}
      />

      <ReplaceItemModal
        opened={replaceItemModalOpened}
        onClose={() => setReplaceItemModalOpened(false)}
        currentMeal={selectedMeal}
        availableMeals={meals}
        onReplace={handleReplaceMeal}
      />
    </>
  );
};

export default DietPlanPage;