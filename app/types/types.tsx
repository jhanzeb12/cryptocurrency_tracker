export type ICryptocurrencyProps = {
    id: string;
    name: String;
    symbol: String;
    amount: Number;
    change_percentage: Number;
    trade_volume: Number;
}

export type IVariants = "primary" | "secondary" | "accent" | "success" | "info" | "error" | "neutral" | "warning";

export type ITextProps = {
    text?: String;
}