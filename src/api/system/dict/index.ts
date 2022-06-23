import { request } from '@/utils/request';
import DictApi from '@/core/permission/modules/sys/dict';

export function getReqLogList(query: API.PageParams) {
  return request<API.TableListResult>(
    {
      url: DictApi.req,
      method: 'get',
      params: query,
    },
    {
      isMock: true,
    },
  );
}

export function getDictList(query: API.PageParams) {
  return request<API.DictListResult>({
    url: DictApi.list,
    method: 'get',
    params: query,
  });
}

export function findDict() {
  return request<API.DictListResult>({
    url: DictApi.findDict,
    method: 'get',
  });
}

export function createDict(data: API.DictAddParams) {
  return request(
    {
      url: DictApi.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建成功',
    },
  );
}

export function updateDict(data: API.DictAddParams) {
  return request(
    {
      url: DictApi.update,
      method: 'post',
      data,
    },
    {
      successMsg: '更新成功',
    },
  );
}

export function deleteDict(data: { id: string }) {
  return request(
    {
      url: DictApi.del,
      method: 'post',
      data,
    },
    {
      successMsg: '删除成功',
    },
  );
}
