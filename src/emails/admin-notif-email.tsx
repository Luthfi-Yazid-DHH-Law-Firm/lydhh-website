import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
} from "@react-email/components";

interface AdminNotifEmailProps {
  name: string;
  subject: string;
  message: string;
};

export const AdminNotifEmail = ({ name, subject, message }: AdminNotifEmailProps) => (
  <Html>
    <Head />
    <Preview>
        { subject } from { name }
    </Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans px-2">
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
          <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            { subject } from { name }
          </Heading>
          <Text className="text-black text-[14px] leading-[24px]">
            {message},
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

AdminNotifEmail.PreviewProps = {
  name: "Michael Bulba",
  subject: "Need a Lawyer for Elder Abuse Case",
  message: "Hello, JILO. I am Michael Bulba."
} as AdminNotifEmailProps;

export default AdminNotifEmail;
