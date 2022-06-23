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
    pid: string;
    status: boolean;
    isdictitem: number;
    keyPath?: number[];
  };
  /** 数据字典结果 */
  type DictListResult = DictListResultItem[];

  /** 新增数据字典参数 */
  type DictAddParams = {
    id: string;
    codename: string;
    codeid: string;
    seq: number;
    comments: string;
    pid: string;
    isdictitem: number;
    status: boolean;
    itemvalue: string;
  };
}
