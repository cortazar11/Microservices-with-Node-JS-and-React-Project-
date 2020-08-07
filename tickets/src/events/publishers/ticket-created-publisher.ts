import { Publisher, Subjects, TicketCreatedEvent } from '@mmtickets/common';

export class TicketCreatePublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
