import {Table} from "antd";
import type {
    TableProps,
} from "antd/es/table";


type CustomTableProps<T> = TableProps<T>;

const CustomTable = <T extends object = any>({...props}: CustomTableProps<T>) => <Table<T> {...props} />;

export default CustomTable;
