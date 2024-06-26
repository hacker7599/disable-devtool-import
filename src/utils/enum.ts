/*
 * @Author: tackchen
 * @Date: 2022-09-27 22:10:55
 * @Description: Coding something
 */

export enum DetectorType {
  Unknown = -1,
  RegToString = 0, // 根据正则检测
  DefineId, // 根据dom id检测 1
  Size, // 根据窗口尺寸检测 2
  DateToString, // 根据Date.toString 检测 3
  FuncToString, // 根据Function.toString 检测 4
  Debugger, // 根据断点检测，仅在ios chrome 真机情况下有效 5
  Performance, // 根据log大数据性能检测 6
  DebugLib, // 检测第三方调试工具
};