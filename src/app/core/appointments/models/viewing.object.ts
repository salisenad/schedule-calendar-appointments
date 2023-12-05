import { Appointment } from "./appointment.object";

export interface Viewing {
    time: string;
    isScheduled: boolean;
    details: Appointment[];
}