export const sysMenu = {
  list: 'user/perm/list',
  add: 'user/perm/add',
  update: 'user/perm/edit',
  info: 'sys/menu/info',
  delete: 'user/perm/delete',
} as const;

export const deptValues = Object.values(sysMenu);

export type SysMenuPerms = typeof deptValues[number];

export default sysMenu;
