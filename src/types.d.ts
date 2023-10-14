type ServiceType = {
  id: number;
  name: "БАНКОМАТ" | "ОФИС";
};

type ClientType = {
  id: number;
  name: "ЮЛ" | "ФЛ";
};

type BankService = {
  name: string;
  clientTypes: ClientType;
  serviveTypes: ServiceTypem;
};
