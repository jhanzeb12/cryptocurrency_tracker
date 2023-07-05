import { ICryptocurrencyProps } from "~/types/types"
import { db } from "~/utils/db.utils"

export const CreateOrUpdateCryptoCurrency = async (jsonData: ICryptocurrencyProps) => {

    const crypto = await db.cryptocurrencies.upsert({
        where: { id: jsonData.id },
        update: jsonData as any,
        create: jsonData as any,
    });

    console.log(crypto);

    return crypto;
}