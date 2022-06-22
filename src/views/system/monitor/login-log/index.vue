<template>
  <DynamicTable header-title="登录日志" :data-request="loadTableData" :columns="columns" />
</template>

<script setup lang="ts">
  import { useTable, LoadDataParams, TableColumn } from '@/components/core/dynamic-table';
  import { getLoginLogList } from '@/api/system/log';

  defineOptions({
    name: 'SystemMonitorLoginLog',
  });

  const [DynamicTable] = useTable();

  const loadTableData = async ({ page, limit }: LoadDataParams) => {
    const data = await getLoginLogList({ page, limit });
    return data;
  };

  const columns: TableColumn[] = [
    {
      title: '内容',
      dataIndex: 'content',
      align: 'center',
    },
    {
      title: '用户名',
      dataIndex: 'opermanname',
      width: 100,
      align: 'center',
    },
    {
      title: '登录IP',
      dataIndex: 'ip',
      width: 120,
      align: 'center',
    },
    {
      title: '时间',
      dataIndex: 'logdate',
      align: 'center',
      width: 180,
      formItemProps: {
        component: 'DatePicker',
        componentProps: {
          class: 'w-full',
        },
      },
    },
    {
      title: '浏览器',
      dataIndex: 'browser',
      align: 'center',
      width: 140,
    },
  ];
</script>
