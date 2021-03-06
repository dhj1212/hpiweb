import MultipleCascader from './components/multiple-cascader/index.vue';
import type { FormSchema } from '@/components/core/schema-form/';
import IconsSelect from '@/components/basic/icons-select/index.vue';
import { constantRouterComponents } from '@/router/asyncModules';

export const menuSchemas: FormSchema<API.MenuAddParams>[] = [
  {
    field: 'menutype',
    component: 'RadioGroup',
    label: '菜单类型',
    defaultValue: ({ formModel }) => formModel['menutype'],
    rules: [{ required: true, type: 'string' }],
    componentProps: {
      options: [
        {
          label: '目录',
          value: '0',
        },
        {
          label: '菜单',
          value: '1',
        },
        {
          label: '权限',
          value: '2',
        },
      ],
    },
  },
  {
    field: 'name',
    component: 'Input',
    label: '节点名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'parentid',
    component: 'TreeSelect',
    label: '上级节点',
    componentProps: {
      fieldNames: {
        label: 'name',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'path',
    component: 'Input',
    label: '节点路由',
    vIf: ({ formModel }) => formModel['menutype'] !== '2',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'permission',
    component: () => MultipleCascader,
    label: '权限',
    vIf: ({ formModel }) => formModel['menutype'] === '2',
    rules: [{ required: true, type: 'array', message: '请选择权限' }],
  },
  {
    field: 'component',
    component: 'Select',
    label: '文件路径',
    vIf: ({ formModel }) => formModel['menutype'] === '1',
    componentProps: {
      options: Object.keys(constantRouterComponents).map((n) => ({ label: n, value: n })),
    },
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'icon',
    component: () => IconsSelect,
    label: '节点图标',
    vIf: ({ formModel }) => formModel['type'] !== 2,
  },
  {
    field: 'keepalive',
    component: 'Switch',
    label: '是否缓存',
    defaultValue: true,
    vIf: ({ formModel }) => formModel['type'] === 1,
  },
  {
    field: 'hidden',
    component: 'Switch',
    label: '是否隐藏',
    defaultValue: false,
    vIf: ({ formModel }) => formModel['type'] !== 2,
  },
  {
    field: 'seq',
    component: 'InputNumber',
    label: '排序号',
    defaultValue: 255,
    componentProps: {
      style: {
        width: '100%',
      },
    },
  },
];
