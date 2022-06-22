import type { TableColumn } from '@/components/core/dynamic-table';
// import { Avatar, Space, Tag } from 'ant-design-vue';

export type TableListItem = API.DictListResultItem;
export type TableColumnItem = TableColumn<TableListItem>;

/**
 * 将对应菜单类型转为字符串字意
 */
const getDictName = (id: string, codeid: string, value: string) => {
  switch (codeid) {
    case '-1':
      return id;
    default:
      return value;
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
    fixed: 'left',
    bodyCell: ({ record }) => <>{getDictName(record.id, record.codeid, record.itemvalue)}</>,
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
