import React from "react";
import { usePurChases } from "../context/usePurChases";
import { PurchaseHistory } from "./PurchaseHistory";
import { Rewards } from "./Rewards";

export const PurchasePoints = () => {
  const { purchaseData } = usePurChases();

  return (
    <div>
      {purchaseData && (
        <>
          <PurchaseHistory />
          <Rewards />
        </>
      )}
    </div>
  );
};
