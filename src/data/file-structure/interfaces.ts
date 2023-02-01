export interface RenderTree {
  id: string;
  name: string;
  children?: readonly RenderTree[];
  expandIcon?: string;
  collapseIcon?: string;
  icon?: string;
  snippet?: string;
}