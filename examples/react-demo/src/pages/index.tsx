import { Button } from 'antd';
import request from 'umi-request';
import {
  FCrud,
  ICrud,
  ICurdContainerTypeEnum,
  IFormComTypeEnum,
} from '@crud/index';

const apiConfig = {
  add: '/api/json/add',
  edit: '/api/json/edit',
  delete: '/api/json/delete',
  export: '/api/json/export',
  list: '/api/json/list',
};

const demoTable: ICrud = {
  title: '人员管理',
  containerType: ICurdContainerTypeEnum.Modal,
  request: (params) =>
    request(apiConfig.list, { method: 'post', data: params }),
  batchToolbar: [
    {
      label: '添加',
      type: 'primary',
    },
    {
      label: '导出',
      type: 'ghost',
    },
    {
      label: '删除',
      type: 'dashed',
    },
    {
      render: (row) => {
        console.log(row);
        return <Button type="text">自定义按钮</Button>;
      },
    },
  ],
  rowToolbar: [
    {
      label: '编辑',
    },
    {
      render: (row) => {
        console.log(row);
        return <div>行级操作</div>;
      },
    },
  ],
  columns: [
    { title: 'ID', dataIndex: 'id', readonly: true },
    {
      title: '姓名',
      dataIndex: 'name',
      type: IFormComTypeEnum.Input,
      rules: [{ message: '姓名不能为空', required: true }],
      isFilter: true,
    },
    { title: '年龄', dataIndex: 'age', type: IFormComTypeEnum.InputNumber },
    { title: '地址', dataIndex: 'address', type: IFormComTypeEnum.Input },
    {
      title: '职位',
      dataIndex: 'title',
      type: IFormComTypeEnum.Select,
      isFilter: true,
      rules: [{ message: '职位不能为空', required: true }],
      options: [
        { label: 'CTO', value: 'cto' },
        { label: 'COO', value: 'coo' },
        { label: 'CFO', value: 'cfo' },
      ],
    },
  ],
};

export default function IndexPage() {
  return <FCrud {...demoTable} />;
}
