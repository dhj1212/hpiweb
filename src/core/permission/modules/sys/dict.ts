export const sysDict = {
  req: 'sys/log/req/page',
  list: 'sys/code/queryDict',
  add: 'sys/log/task/page',
  update: 'sys/log/task/page',
  del: 'sys/log/task/page',
} as const;
export const values = Object.values(sysDict);

//export type SysLogPerms = typeof values[number];

export default sysDict;
