import { Subjects, Publisher, PaymentCreatedEvent } from '@mmtickets/common';
import { Payment } from '../../models/payment';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
