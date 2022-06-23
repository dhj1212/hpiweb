import type { FormSchema } from '@/components/core/schema-form/';
import { findDict } from '@/api/system/dict/';

export const dictSchemas: FormSchema<API.DictAddParams>[] = [
  {
    field: 'isdictitem',
    component: 'RadioGroup',
    label: '代码类型',
    defaultValue: 0,
    rules: [{ required: true, type: 'number' }],
    componentProps: {
      options: [
        {
          label: '代码',
          value: 0,
        },
        {
          label: '代码项目',
          value: 1,
        },
      ],
    },
  },
  {
    field: 'pid',
    component: 'Select',
    label: '上级代码',
    vIf: ({ formModel }) => formModel['isdictitem'] === 1,
    rules: [{ required: true, type: 'string' }],
    componentProps: {
      request: async () => {
        const data = await findDict();
        return data.map((n) => ({ label: n.codename, value: n.codeid }));
      },
    },
  },
  {
    field: 'codename',
    component: 'Input',
    label: '代码名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'itemvalue',
    component: 'Input',
    label: '代码值',
    vIf: ({ formModel }) => formModel['isdictitem'] === 1,
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'codeid',
    component: 'Input',
    label: '代码',
    vIf: ({ formModel }) => formModel['isdictitem'] === 0,
    rules: [{ required: true, type: 'string' }],
  },
  /* {
    field: 'pid',
    component: 'TreeSelect',
    label: '上级代码',
    componentProps: {
      fieldNames: {
        label: 'codename',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    vIf: ({ formModel }) => formModel['codetype'] === 1,
    rules: [{ required: true, type: 'string' }],
  }, */
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
  {
    field: 'status',
    component: 'Switch',
    label: '是否可用',
    defaultValue: true,
  },
  {
    field: 'comments',
    component: 'Input',
    label: '说明',
  },
];
