export const sysRole = {
  list: 'user/role/findRole',
  page: 'user/role/list',
  add: 'user/role/add',
  update: 'user/role/edit',
  delete: 'user/role/deleteBatchs',
  info: 'user/role/info',
} as const;

export const values = Object.values(sysRole);

export type SysRolePerms = typeof values[number];

export default sysRole;
