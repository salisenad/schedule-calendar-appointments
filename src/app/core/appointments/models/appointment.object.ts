import { Contact } from "./contact.object";
import { Property } from "./property.object";

export interface Appointment {
  id: string;
  date: string;
  maxInviteeCount: number;
  attendeeCount: number;
  showContactInformation: boolean;
  image: string;
  contact: Contact;
  property: Property
}