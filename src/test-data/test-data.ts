import * as credentials from "./credentials.json";
import * as payment from "./payment.json";
import { Credentials } from "../models/Credentials";
import { PaymentDetails } from "../models/PaymentDetails";

export const testCredentials: Credentials = credentials;
export const testPayment: PaymentDetails = payment;
