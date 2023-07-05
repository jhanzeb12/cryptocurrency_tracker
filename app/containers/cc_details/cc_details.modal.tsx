import { useFetcher } from "@remix-run/react";
import React from "react";
import Divider from "~/components/divider/divider";
import Heading from "~/components/heading/heading";
import List from "~/components/list/list";
import ListItem from "~/components/list/listitem";
import Modal, { IModalProps } from "~/components/modal/modal";
import { ICryptocurrencyProps } from "~/types/types";
import { PercentageFormatter, USDFormatter } from "~/utils/currency.utils";

export type ICryptocurrencyDetailsModalProps = {
    data: Partial<ICryptocurrencyProps>;
} & Partial<IModalProps>;

const CryptocurrencyDetailsModal = ({ data, onClose, isOpen, onCancel }: ICryptocurrencyDetailsModalProps) => {
    const fetcher = useFetcher();
     const handleOnClose = () => {
        onClose?.();
    }

    return (
        <Modal isOpen={isOpen} onClose={handleOnClose} onCancel={() => {
            onCancel?.();
        }} closeBtnText="Save">
            <Heading variant="h1" text={data?.name} />
            <Divider />
            <List>
                <ListItem text={"Code: " + data?.symbol} />
                <ListItem text={"Rank: " + data?.rank} />
                <ListItem text={"Price (USD): " + USDFormatter(data?.priceUsd)} />
                <ListItem text={"Volume used (24 Hours): " + USDFormatter(data?.volumeUsd24Hr)} />
                <ListItem text={"Change Percentage (24 Hours): " + PercentageFormatter(data?.changePercent24Hr)} />
            </List>
        </Modal>
    );
}

export default React.memo(CryptocurrencyDetailsModal);