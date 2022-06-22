declare namespace API {
  /** 数据字典结果 */
  type DictListResultItem = {
    id: string;
    codename: string;
    codetypeseq: string;
    codeid: string;
    updateman: string;
    updatedate: string;
    status: string;
    seq: number;
    comments: string;
    itemvalue: string;
    keyPath?: number[];
  };
  /** 登录日志结果 */
  type DictListResult = DictListResultItem[];
  /** 请求日志项结果 */
  type ReqLogListItemResult = {
    createTime: string;
    updateTime: string;
    id: number;
    ip: string;
    userId: number;
    params: string;
    action: string;
    method: string;
    status: number;
    consumeTime: number;
  };
  /** 请求日志结果 */
  type ReqLogListResult = ReqLogListItemResult[];

  /** 任务日志项结果 */
  type TaskLogListItemResult = {
    id: number;
    taskId: number;
    name: string;
    createdAt: string;
    consumeTime: number;
    detail: string;
    status: number;
  };
  /** 任务日志结果 */
  type TaskLogListResult = TaskLogListItemResult[];
}
