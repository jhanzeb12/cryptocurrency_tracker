import { useCallback, useRef, useState } from "react";
import Divider from "../divider/divider";
import Input from "../form/input";
import React from "react";

type ITableProps = {
    columns: Array<{ displayName: string; field: string; formatter?: Function}>;
    data: Array<any>;
    actionColumnHeader?: string;
    renderAction?: any;
    height?: string;
    showSearchBar?: boolean;
    onSearch?: (searchQuery: string) => void;
};

export const EmptyTable = () => {
    return (<table className="table">
        <tbody>
            <tr>
                <td>No Data Found!</td>
            </tr>
        </tbody>
    </table>);
}

const Table = ({ columns, data, height, actionColumnHeader, renderAction, showSearchBar, onSearch }: ITableProps) => {
    const searchRef = useRef(null);
    const timerRef = useRef<any>(-1);

    const handleSearch = (e: any) => {
        if (timerRef.current > -1) {
            clearTimeout(timerRef.current);
            timerRef.current = -1;
        }

        timerRef.current = setTimeout(() => {
            onSearch?.(searchRef.current?.value);
        }, 500);
    };

    const defaultFormatter = (value: any) => value;

    return (
        <div className={["overflow-x-auto", "h-[" + height + "]"].join(' ')}>
            {showSearchBar && <div>
                <Input
                    variant="neutral"
                    className="float-right mb-[10px]"
                    placeholder="Search..."
                    ref={searchRef}
                    handleInput={handleSearch} />
                <Divider />
            </div>
            }
            {!columns && <EmptyTable />}
            {columns && <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        {columns?.map(column => <th key={column.field}>{column.displayName ?? column.field}</th>)}
                        {actionColumnHeader && <th>{actionColumnHeader}</th>}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, rIndex) => (
                        <tr key={"row" + rIndex}>
                            {columns?.map((column, idx) => <td key={"row_" + column.field + idx}>{(column.formatter ?? defaultFormatter)(row[column.field])}</td>)}
                            {actionColumnHeader && renderAction && <td>{renderAction(row)}</td>}
                        </tr>
                    ))}
                    {(!data || !data.length) && <tr><td colSpan={columns.length} className="center">No Data Found!</td></tr>}
                </tbody>
            </table>
            }
        </div>
    );
}

Table.defaultProps = {
    columns: null,
    data: null,
    height: '500px',
    renderAction: null,
    actionColumnHeader: '',
    showSearchBar: true,
}

export default React.memo(Table);