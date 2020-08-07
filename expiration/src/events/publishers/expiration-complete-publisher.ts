import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@mmtickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
