<template>
  <div>
    <DynamicTable
      row-key="id"
      header-title="数据字典管理"
      :data-request="loadTableData"
      :columns="columns"
      bordered
      :scroll="{ x: 2000 }"
    >
      <template #toolbar>
        <a-button type="primary" :disabled="!$auth('sys.menu.add')" @click="openMenuModal({})">
          新增
        </a-button>
      </template>
    </DynamicTable>
  </div>
</template>

<script lang="tsx" setup>
  import { ref } from 'vue';
  import { cloneDeep } from 'lodash-es';
  import { baseColumns, type TableListItem, type TableColumnItem } from './columns';
  import { menuSchemas } from './formSchemas';
  import type { TreeSelectProps } from 'ant-design-vue';
  import { getDictList, updateDict, createDict, deleteDict } from '@/api/system/dict';
  import { useTable } from '@/components/core/dynamic-table';
  import { useFormModal } from '@/hooks/useModal/useFormModal';
  import { formatDict2Tree } from '@/core/permission/utils';

  defineOptions({
    name: 'SysDict',
  });

  const menuTree = ref<TreeSelectProps['treeData']>([]);
  const [DynamicTable, dynamicTableInstance] = useTable({
    search: false,
    pagination: false,
    size: 'small',
  });
  const [showModal] = useFormModal();

  const loadTableData = async () => {
    const data = await getDictList({});
    console.log('dictdata', data);
    menuTree.value = formatDict2Tree(
      cloneDeep(data).filter((n) => n.codeid === '-1'),
      '-1',
    ); //父节点为-1
    console.log('cloneDeep(data)', cloneDeep(data));
    //console.log('formatMenu2Tree(cloneDeep(data), null)=', formatMenu2Tree(cloneDeep(data), null));
    return { list: formatDict2Tree(cloneDeep(data), '-1') };
  };

  const openMenuModal = async (record: Partial<TableListItem>) => {
    const [formRef] = await showModal({
      modalProps: {
        title: `${record.id ? '编辑' : '新增'}菜单`,
        width: 700,
        onFinish: async (values) => {
          console.log('新增/编辑菜单', values);
          values.permissionsid = record.id;
          values.permission = values.permission?.join(',');
          await (record.id ? updateDict : createDict)(values);
          dynamicTableInstance?.reload();
        },
      },
      formProps: {
        labelWidth: 100,
        schemas: menuSchemas,
      },
    });

    formRef?.updateSchema([
      {
        field: 'parentid',
        componentProps: {
          treeDefaultExpandedKeys: [-1].concat(record?.keyPath || []),
          treeData: ref([{ id: -1, name: '一级菜单', children: menuTree.value }]),
        },
      },
    ]);

    formRef?.setFieldsValue({
      ...record,
      /* icon: record.icon ?? '',
      perms: record.permission?.split(','),
      parentid: record.parentid ?? -1, */
    });
  };
  const delRowConfirm = async (record: TableListItem) => {
    await deleteDict({ permissionsid: record.id });
    dynamicTableInstance?.reload();
  };

  const columns: TableColumnItem[] = [
    ...baseColumns,
    {
      title: '操作',
      width: 240,
      dataIndex: '$action',
      hideInSearch: true,
      align: 'center',
      fixed: 'right',
      actions: ({ record }) => [
        {
          label: '编辑',
          auth: {
            perm: 'sys.menu.update',
            effect: 'disable',
          },
          onClick: () => openMenuModal(record),
        },
        {
          label: '删除',
          auth: 'sys.menu.delete',
          popConfirm: {
            title: '你确定要删除吗？',
            onConfirm: () => delRowConfirm(record),
          },
        },
      ],
    },
  ];
</script>
