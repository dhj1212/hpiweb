import type { CSSProperties } from 'vue';
import type {
  InputNumberProps,
  SelectProps,
  CascaderProps,
  SwitchProps,
  RateProps,
  DividerProps,
  TimePickerProps,
  TreeProps,
  TreeSelectProps,
  RadioGroupProps,
} from 'ant-design-vue';
import type { RenderCallbackParams } from './form';

export type { ComponentMapType } from '../componentMap';

type ColSpanType = number | string;

/** 组件属性 */
export type ComponentProps = (
  | InputNumberProps
  | SelectProps
  | CascaderProps
  | SwitchProps
  | RateProps
  | DividerProps
  | TimePickerProps
  | TreeProps
  | TreeSelectProps
  | RadioGroupProps
) & {
  /** 组件异步请求数据 */
  request?: PromiseFn<RenderCallbackParams, any>;
  /** 组件异步请求数据结果 */
  requestResult?: any;
  style?: CSSProperties;
  /** 手动指定v-model绑定的key */
  vModelKey?: string;
  [key: string]: any;
};

/** 所有组件属性集合 */
export type AllComponentProps = UnionToIntersection<ComponentProps>;

export interface ColEx {
  style?: any;
  /**
   * raster number of cells to occupy, 0 corresponds to display: none
   * @default none (0)
   * @type ColSpanType
   */
  span?: ColSpanType;

  /**
   * raster order, used in flex layout mode
   * @default 0
   * @type ColSpanType
   */
  order?: ColSpanType;

  /**
   * the layout fill of flex
   * @default none
   * @type ColSpanType
   */
  flex?: ColSpanType;

  /**
   * the number of cells to offset Col from the left
   * @default 0
   * @type ColSpanType
   */
  offset?: ColSpanType;

  /**
   * the number of cells that raster is moved to the right
   * @default 0
   * @type ColSpanType
   */
  push?: ColSpanType;

  /**
   * the number of cells that raster is moved to the left
   * @default 0
   * @type ColSpanType
   */
  pull?: ColSpanType;

  /**
   * <576px and also default setting, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xs?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥576px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  sm?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥768px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  md?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥992px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  lg?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥1200px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xl?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥1600px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xxl?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;
}
