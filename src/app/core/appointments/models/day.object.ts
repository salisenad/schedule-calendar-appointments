import { Viewing } from "./viewing.object";

export interface Day {
    date: Date;
    viewings: Viewing[];
    isSelected: boolean; 
    isScheduled?: boolean;
  }