export interface Task {
  /** @example "asdjasdj123123" */
  _id?: string;
  /** @example "Create Redux Store" */
  title: string;
  /** @example "todo" */
  status: string;
  /** @example "epic" */
  label: string;
  /** @example "high" */
  priority: string;
}

export enum StatusOptions {
  Todo = "todo",
  InProgress = "in-progress",
  Done = "done",
  Cancelled = "cancelled",
  Backlog = "backlog",
}

export enum PriorityOptions {
  Low = "low",
  High = "high",
  Medium = "medium",
}

export enum LabelOptions {
  Bug = "bug",
  Feature = "feature",
  TechDebt = "tech-debt",
  Epic = "epic",
  Documentation = "documentation",
}

export interface Priority {
  /** @example "kslak212ss" */
  _id?: string;
  /** @example "medium" */
  value: string;
  /** @example "Medium" */
  label: string;
}

export interface Status {
  /** @example "sjsdla222" */
  _id?: string;
  /** @example "in-progress" */
  value: string;
  /** @example "In-progress" */
  label: string;
}

export interface Label {
  /** @example "dksl1m2ss" */
  _id?: string;
  /** @example "epic" */
  value: string;
  /** @example "Epic" */
  label: string;
}
