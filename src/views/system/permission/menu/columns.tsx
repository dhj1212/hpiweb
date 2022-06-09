import type { TableColumn } from '@/components/core/dynamic-table';
// import { Avatar, Space, Tag } from 'ant-design-vue';

export type TableListItem = API.MenuListResultItem;
export type TableColumnItem = TableColumn<TableListItem>;

/**
 * 将对应菜单类型转为字符串字意
 */
const getMenuType = (menutype) => {
  switch (menutype) {
    case '0':
      return '目录';
    case '1':
      return '菜单';
    case '2':
      return '权限';
    default:
      return '';
  }
};

export const baseColumns: TableColumnItem[] = [
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '图标',
    width: 80,
    dataIndex: 'icon',
    align: 'center',
    bodyCell: ({ record }) => <>{record.icon && <icon-font type={record.icon} size="22" />}</>,
  },
  {
    title: '类型',
    width: 80,
    align: 'center',
    dataIndex: 'menutype',
    bodyCell: ({ record }) => <>{getMenuType(record.menutype)}</>,
  },
  {
    title: '节点路由',
    dataIndex: 'path',
    align: 'center',
    width: 240,
  },
  {
    title: '路由缓存',
    dataIndex: 'keepalive',
    align: 'center',
    width: 80,
  },
  {
    title: '文件路径',
    width: 280,
    align: 'center',
    dataIndex: 'component',
  },
  {
    title: '权限',
    width: 300,
    align: 'center',
    dataIndex: 'permission',
  },
  {
    title: '排序号',
    width: 80,
    align: 'center',
    dataIndex: 'seq',
  },
  {
    title: '更新时间',
    width: 180,
    align: 'center',
    dataIndex: 'updatedAt',
  },
];
