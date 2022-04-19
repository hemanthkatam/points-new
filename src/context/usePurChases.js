import { useContext } from "react";
import { PurchaseContext } from "../providers/PurchaseDataProvicer";

export const usePurChases = () => useContext(PurchaseContext);
