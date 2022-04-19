export default class PurchaseService {
  getPurchaseInfo = () => {
    return fetch("./PurchaseData.json").then((res) => res.json());
  };
}
