declare namespace API {
  type UserListPageResultItem = {
    createdate: date;
    orgid: string;
    eMail: string;
    headImg: string;
    userid: string;
    id: string;
    loginid: string;
    orgname: string;
    nickName: string;
    phone: string;
    remark: string;
    status: string;
    idno: string;
    ip: string;
    tel: string;
    wxuserid: string;
    post: string;
    modifydate: string;
    username: string;
    departmentName: string;
    roleNames: string[];
    keyPath?: number[];
  };

  /** 获取用户列表结果 */
  type UserListPageResult = UserListPageResultItem[];

  /** 创建用户参数 */
  type CreateUserParams = {
    orgid: string;
    loginid: string;
    username: string;
    roles: string[];
    nickName: string;
    eMail: string;
    phone: string;
    remark: string;
    status: string;
  };

  /** 管理员用户详情 */
  type AdminUserInfo = {
    createTime: string;
    updateTime: string;
    id: number;
    departmentId: number;
    name: string;
    username: string;
    password: string;
    psalt: string;
    nickName: string;
    headImg: string;
    email: string;
    phone: string;
    remark: string;
    status: string;
    roles: string[];
    departmentName: string;
  };

  /** 更新管理员用户参数 */
  type UpdateAdminInfoParams = {
    departmentId: number;
    name: string;
    username: string;
    roles: number[];
    nickName: string;
    email: string;
    phone: string;
    remark: string;
    status: number;
    id: number;
  };

  /** 更新管理员密码 */
  type UpdateAdminUserPassword = {
    userid: string;
    password: string;
    confirmpassword: string;
  };
}
