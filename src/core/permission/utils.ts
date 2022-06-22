import type { TreeDataItem as ATreeDataItem } from 'ant-design-vue/es/tree/Tree';

export interface TreeDataItem extends ATreeDataItem {
  children: any;
}

/**
 * 渲染部门至树形控件
 * @param {Array} depts 所有部门
 * @param {Number | null} parentId 父级部门ID
 * @param {number[]|string[]} keyPath ID路径
 */
export const formatDept2Tree = (
  depts: API.SysDeptListResult[],
  parentId: string | null = '-1',
  keyPath: (string | number)[] = [],
): TreeDataItem[] => {
  return depts
    .filter((item) => item.parentId === parentId)
    .map((item) => {
      const _keyPath = keyPath.concat(parentId || []);
      const arr = formatDept2Tree(depts, item.id, _keyPath);
      return Object.assign(item, {
        keyPath: _keyPath,
        title: item.name,
        key: item.id,
        value: item.id,
        formData: item,
        children: arr.length ? arr : null,
      });
    });
};

/**
 * 渲染菜单至树形控件
 * @param {Array} menus 所有菜单
 * @param {Number | null} parentId 父级菜单ID
 * @param {number[]|string[]} keyPath ID路径
 */
export const formatMenu2Tree = (
  menus: API.MenuListResult,
  parentId: string | null | undefined = null,
  keyPath: (string | number)[] = [],
): TreeDataItem[] => {
  return menus
    .filter((item) => item.parentid === parentId)
    .map((item) => {
      const _keyPath = keyPath.concat(parentId || []);
      const arr = formatMenu2Tree(menus, item.permissionsid, _keyPath);
      return Object.assign(item, {
        keyPath: _keyPath,
        title: item.name,
        key: item.permissionsid,
        value: item.permissionsid,
        formData: item,
        children: arr.length ? arr : null,
      });
    });
};

export const formatDict2Tree = (
  dicts: API.DictListResult,
  parentId: string | null | undefined = null,
  keyPath: (string | number)[] = [],
): TreeDataItem[] => {
  return dicts
    .filter((item) => item.codeid === parentId)
    .map((item) => {
      const _keyPath = keyPath.concat(parentId || []);
      const arr = formatDict2Tree(dicts, item.id, _keyPath);
      return Object.assign(item, {
        keyPath: _keyPath,
        title: item.codename,
        key: item.id,
        value: item.id,
        formData: item,
        children: arr.length ? arr : null,
      });
    });
};

/**
 * 在树中根据ID找child
 * @param {string|number} id
 * @param {any[]} treeData 树形数据
 * @param {string} keyName 指定ID的属性名，默认是id
 * @param {string} children 指定children的属性名，默认是children
 */
export const findChildById = <T = any>(
  id,
  treeData: T[] = [],
  keyName = 'id',
  children = 'children',
) => {
  return treeData.reduce((prev, curr) => {
    if (curr[keyName] === id) {
      return curr;
    }
    if (prev) {
      return prev;
    }
    if (curr[children]?.length) {
      return findChildById(id, curr[children], keyName, children);
    }
  }, undefined);
};
