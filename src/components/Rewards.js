import React from "react";
import { usePurChases } from "../context/usePurChases";

export const Rewards = ({}) => {
  const { purchaseData } = usePurChases();

  const calculateTransactionPoints = (points) => {
    let totalpoints = 0;
    totalpoints =
      points >= 100
        ? totalpoints + (points - 100) * 2 + 50
        : totalpoints + (points - 50) * 1;
    return totalpoints;
  };

  const getTotalRewards = () => {
    const totalPoints = purchaseData.reduce((total, ele) => {
      const selTranPoints = calculateTransactionPoints(ele.amount);
      const totalPoints = selTranPoints + total;
      return totalPoints;
    }, 0);
    return totalPoints;
  };
  const rewardpoints = getTotalRewards();
  return <div>Total Rewards: {rewardpoints}</div>;
};
