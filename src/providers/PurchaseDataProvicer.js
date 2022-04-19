import React, { createContext, useEffect, useState } from "react";
import PurchaseService from "../services/serivce";

export const PurchaseContext = createContext({ purchaseData: [] });

const service = new PurchaseService();

export const PurchaseDataProvicer = ({ children }) => {
  const [purchaseData, setPurchaseData] = useState([]);

  const calculateTransactionPoints = (points) => {
    let totalpoints = 0;
    totalpoints =
      points >= 100
        ? totalpoints + (points - 100) * 2 + 50
        : totalpoints + (points - 50) * 1;
    return totalpoints;
  };

  const getPurchases = async () => {
    const res = await service.getPurchaseInfo();
    const data =
      res.length > 0
        ? res.map((trxn) => {
            const selTranPoints = calculateTransactionPoints(trxn.amount);
            return { ...trxn, ...{ rewards: selTranPoints } };
          })
        : [];
    setPurchaseData(data);
  };

  useEffect(() => {
    getPurchases();
  }, []);

  return (
    <PurchaseContext.Provider value={{ purchaseData }}>
      {children}
    </PurchaseContext.Provider>
  );
};
