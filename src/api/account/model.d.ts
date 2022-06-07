declare namespace API {
  type Menu = {
    createTime: Date;
    updateTime: Date;
    id: string;
    parentId: string;
    name: string;
    router: string;
    perms: string;
    /** 当前菜单类型 0: 目录 | 1: 菜单 | 2: 权限 */
    type: 0 | 1 | 2;
    icon: string;
    orderNum: number;
    viewPath: string;
    keepalive: boolean;
    isShow: boolean;
  };

  type PermMenu = {
    menus: Menu[];
    perms: string[];
  };

  type AdminUserInfo = {
    createdate: Date;
    updateTime: Date;
    //id: number;
    userid: string;
    departmentId: number;
    name: string;
    username: string;
    password: string;
    psalt: string;
    wxuserid: string;
    nickName: string;
    headImg: string;
    loginIp: string;
    email: string;
    phone: string;
    remark: string;
    status: number;
    roles: string[];
    departmentName: string;
  };
}
