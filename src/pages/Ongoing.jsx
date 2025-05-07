import SingleGoal from "../components/SingleGoal";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import ErrorFetch from "../components/ErrorFetch";
import Goals from "../data/goals";
import { axiosInstance } from "../axiosInstance";
import { useState, useEffect } from "react";
const Ongoing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [goals, setGoals] = useState([]);

  const getGoals = async () => {
    const { data } = await axiosInstance("/ongoing");
    setIsLoading(false);
    setGoals(data.goals);
  };

  useEffect(() => {
    getGoals();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && goals.length === 0) {
    return <Empty />;
  }

  return (
    <div className="container mt-2">
      <GoalHeader heading="Ongoing" />
      <div>
        {goals &&
          goals.map((g) => {
            return <SingleGoal key={g._id} {...g} />;
          })}
      </div>
    </div>
  );
};

export default Ongoing;
