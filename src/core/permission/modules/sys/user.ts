export const sysUser = {
  add: 'user/user/add',
  page: 'user/user/list',
  info: 'user/user/getUser',
  update: 'user/user/edit',
  delete: 'user/user/deletions',
  password: 'user/user/adminChangPassword',
} as const;

export const values = Object.values(sysUser);

export type SysUserPerms = typeof values[number];

export default sysUser;
