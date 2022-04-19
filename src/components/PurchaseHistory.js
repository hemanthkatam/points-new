import React from "react";
import { usePurChases } from "../context/usePurChases";

export const PurchaseHistory = () => {
  const { purchaseData } = usePurChases();
  return (
    <div className="purchase-table">
      {purchaseData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Total rewards</th>
            </tr>
          </thead>
          <tbody>
            {purchaseData.map((trxn, idx) => (
              <tr key={idx}>
                <td>{trxn.id}</td>
                <td>{trxn.date}</td>
                <td>{trxn.amount}</td>
                <td>{trxn.rewards}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
