declare namespace API {
  /** 新增角色 */
  type CreateRoleParams = {
    rolename: string;
    rolecode: string;
    describes: string;
    menus: Key[];
    depts: number[];
  };
  /** 更新角色 */
  type UpdateRoleParams = CreateRoleParams & {
    roleid: string;
  };

  /** 角色列表项 */
  type RoleListResultItem = {
    createdate: string;
    updatedAt: string;
    roleid: string;
    userId: string;
    rolename: string;
    rolecode: string;
    describes: string;
  };

  /** 角色列表 */
  type RoleListResult = RoleListResultItem[];

  /** 角色详情 */
  type RoleInfoResult = {
    roleInfo: {
      createTime: string;
      updateTime: string;
      roleid: string;
      userId: string;
      name: string;
      label: string;
      remark: string;
    };
    menus: {
      createTime: string;
      updateTime: string;
      permissionsid: string;
      roleid: string;
    }[];
    depts: {
      createTime: string;
      updateTime: string;
      id: string;
      roleId: string;
      departmentId: string;
    }[];
  };
}
