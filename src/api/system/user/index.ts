import { request } from '@/utils/request';
import Api from '@/core/permission/modules/sys/user';

/* export function getUserListPage(data: API.PageParams<{ departmentIds: string[]}>) {
  console.log('API.PageParams==', data);
  return request<API.TableListResult<API.UserListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
} */

export function getUserListPage(data: API.PageParams<API.UserPageParams>) {
  console.log('API.PageParams==', data);
  return request<API.TableListResult<API.UserListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function getUserListPage1(query: API.PageParams) {
  return request({
    url: Api.page,
    method: 'post',
    params: query,
  });
}

export function createUser(data: API.CreateUserParams) {
  return request(
    {
      url: Api.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建用户成功',
    },
  );
}

export function getUserInfo(query: { userId: string }) {
  return request<API.AdminUserInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateUser(data: API.UpdateAdminInfoParams) {
  return request(
    {
      url: Api.update,
      method: 'post',
      data,
    },
    {
      successMsg: '修改用户成功',
    },
  );
}

export function updateUserPassword(data: API.UpdateAdminUserPassword) {
  return request(
    {
      url: Api.password,
      method: 'put',
      data,
    },
    {
      successMsg: '操作成功',
    },
  );
}

export function deleteUsers(data: { userIds: string[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}
