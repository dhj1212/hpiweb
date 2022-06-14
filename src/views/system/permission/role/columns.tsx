import type { TableColumn } from '@/components/core/dynamic-table';
// import { Avatar, Space, Tag } from 'ant-design-vue';

export type TableListItem = API.RoleListResultItem;
export type TableColumnItem = TableColumn<TableListItem>;

export const baseColumns: TableColumnItem[] = [
  {
    title: '名称',
    width: 250,
    align: 'center',
    dataIndex: 'rolename',
  },
  {
    title: '标识',
    width: 150,
    align: 'center',
    dataIndex: 'rolecode',
  },
  {
    title: '创建时间',
    dataIndex: 'createdate',
    align: 'center',
    width: 150,
    hideInSearch: true,
  },
  {
    title: '描述',
    dataIndex: 'describes',
    align: 'center',
  },
];
