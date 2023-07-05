import HrefLink from "~/components/link/hreflink";
import Table from "~/components/table/table";
import { ICryptocurrencyProps } from "~/types/types";
import { useState } from "react";
import CryptocurrencyDetailsModal from "../cc_details/cc_details.modal";
import { USDFormatter } from "~/utils/currency.utils";
import { useFetcher } from "@remix-run/react";
import Spinner from "~/components/spinner/spinner";

export type ICurrencyListProps = {
    currencies: Array<ICryptocurrencyProps>;
}

const CurrenciesList = ({ currencies }: ICurrencyListProps) => {
    const [selectedRow, setSelectedRow] = useState<any>(null);
    const [lCurrencies, setLCurrencies] = useState(JSON.parse(JSON.stringify(currencies)));
    const fetcher = useFetcher();

    const TABLE_COLUMNS = [{
        displayName: "ID",
        field: "id",
    },
    {
        displayName: "Name",
        field: "name",
    },
    {
        displayName: "Code",
        field: "symbol",
    },
    {
        displayName: "Current Price (USD)",
        field: "priceUsd",
        formatter: USDFormatter,
    },];

    const _renderAction = (rowData: ICryptocurrencyProps, getIndex: Function) => {
        const handleShowDetails = (event: any) => {
            setSelectedRow(rowData);
        }

        return (
            <HrefLink text="Show Details" onClick={handleShowDetails} />
        )
    }

    const handleSaveDetails = () => {
        // Save data to db:
        const jsonData = {
            id: selectedRow.id,
            name: selectedRow.name,
            code: selectedRow.symbol,
            amount: parseFloat(selectedRow.priceUsd),
            trade_volume: parseFloat(selectedRow.volumeUsd24Hr),
            change_percentage: parseFloat(selectedRow.changePercent24Hr)
        };

        fetcher.submit(jsonData, {
            method: 'POST',
            action: '/server/save_crypto'
        });

        setSelectedRow(null);
    }

    const handleCancelDetails = () => {
        // Save data to db:
        setSelectedRow(null);
    }


    return (
        <>
            <Spinner show={fetcher.state === 'submitting'} />
            <Table
                columns={TABLE_COLUMNS}
                data={lCurrencies}
                actionColumnHeader="Actions"
                renderAction={_renderAction}
                showSearchBar={true}
                onSearch={(searchQuery) => {
                    if (!searchQuery) {
                        setLCurrencies(JSON.parse(JSON.stringify(currencies)));
                        return;
                    }

                    const sQuery = searchQuery.toLowerCase();

                    setLCurrencies(currencies.filter(curr => (
                        curr.name.toLowerCase().indexOf(sQuery) > -1
                        || curr.symbol.toLowerCase().indexOf(sQuery) > -1
                    )));
                }}
            />
            <CryptocurrencyDetailsModal
                isOpen={!!selectedRow}
                data={selectedRow}
                onClose={handleSaveDetails}
                onCancel={handleCancelDetails} />
        </>
    )
}

export default CurrenciesList;