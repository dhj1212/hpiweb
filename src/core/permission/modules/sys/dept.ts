export const sysDept = {
  /** 获取部门列表 */
  list: 'user/org/list',
  /** 移动部门 */
  move: 'sys/dept/move',
  /** 更新部门 */
  update: 'user/org/edit',
  delete: 'user/org/delete',
  add: 'user/org/add',
  info: 'user/org/info',
  transfer: 'sys/dept/transfer',
} as const;

export const values = Object.values(sysDept);

export type SysDeptPerms = typeof values[number];

export default sysDept;
