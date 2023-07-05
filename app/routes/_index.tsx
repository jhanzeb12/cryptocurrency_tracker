import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchAllCurrenciesData } from "~/services/coincap.service";
import CurrenciesList from "~/containers/currencies_list/currencieslist";

export const meta = () => {
  return {
    title: "Cryptocurrency Tracker",
  };
};

export const loader = async () => {
  const result = await fetchAllCurrenciesData();
  return json(result);
};

export default function Index() {
  const currencies = useLoaderData<typeof loader>();

  return (
    <CurrenciesList currencies={currencies?.data} />
  );
}
