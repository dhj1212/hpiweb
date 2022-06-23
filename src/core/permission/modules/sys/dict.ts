export const sysDict = {
  req: 'sys/log/req/page',
  list: 'sys/code/queryDict',
  findDict: 'sys/code/findDict',
  add: 'sys/code/addDicrOrItem',
  update: 'sys/code/editDicrOrItem',
  del: 'sys/code/editDicrOrItem',
} as const;
export const values = Object.values(sysDict);

//export type SysLogPerms = typeof values[number];

export default sysDict;
