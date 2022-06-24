import type { TableColumn } from '@/components/core/dynamic-table';
// import { Avatar, Space, Tag } from 'ant-design-vue';

export type TableListItem = API.DictListResultItem;
export type TableColumnItem = TableColumn<TableListItem>;

/**
 * 显示代码名称值信息
 */
const getDictName = (record: any) => {
  switch (record.pid) {
    case '-1':
      return record.id;
    default:
      return record.itemvalue;
  }
};

export const baseColumns: TableColumnItem[] = [
  {
    title: '代码名称',
    dataIndex: 'codename',
    align: 'center',
    width: 200,
  },
  {
    title: '代码',
    width: 200,
    dataIndex: 'codeid',
    align: 'center',
    bodyCell: ({ record }) => <>{getDictName(record)}</>,
  },
  {
    title: '序号',
    width: 80,
    align: 'center',
    dataIndex: 'seq',
  },
  {
    title: '更新日期',
    dataIndex: 'updatedate',
    align: 'center',
    width: 210,
  },
  {
    title: '说明',
    dataIndex: 'comments',
    align: 'center',
  },
];
