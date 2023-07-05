import { ActionArgs, ActionFunction } from "@remix-run/node";
import { CreateOrUpdateCryptoCurrency } from "~/services/cryptocurrencies.service";
import { ConvertFormDataToJson } from "~/utils/form.utils";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData()
    const json = ConvertFormDataToJson(formData);

    return (await CreateOrUpdateCryptoCurrency(json)); 
  }