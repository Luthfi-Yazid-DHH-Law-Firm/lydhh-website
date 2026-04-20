import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface AdminNotifEmailProps {
  name: string;
  subject: string;
  message: string;
}

export const AdminNotifEmail = ({
                                  name,
                                  subject,
                                  message,
                                }: AdminNotifEmailProps) => (
    <Html>
      <Head />
      <Preview>
        New inquiry: {subject} from {name}
      </Preview>
      <Tailwind>
        <Body className="bg-[#e8e4de] my-auto mx-auto font-sans px-4">
          <Container className="my-[40px] mx-auto max-w-[480px]">

            {/* ── Dark header ── */}
            <Section className="bg-[#0a0c0f] px-[32px] py-[20px]">
              <Row>
                <Text className="text-[rgba(255,255,255,0.55)] text-[9px] tracking-[0.2em] uppercase m-0">
                  Luthfi Yazid DHH Law Firm
                </Text>
              </Row>
              {/* Gold accent bar */}
              <Row>
                <div
                    style={{
                      width: "28px",
                      height: "1.5px",
                      background: "linear-gradient(to right, #c9a84c, #a98e16)",
                      marginTop: "8px",
                    }}
                />
              </Row>
            </Section>

            {/* ── Body ── */}
            <Section className="bg-white px-[32px] py-[32px]">
              {/* Eyebrow */}
              <Text className="text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase m-0 mb-[8px]">
                New Inquiry
              </Text>

              {/* Heading */}
              <Text className="text-[#0d1117] text-[20px] font-normal leading-[1.3] m-0 mb-[16px]">
                You have a new message from a prospective client.
              </Text>

              {/* Gold rule */}
              <div
                  style={{
                    width: "36px",
                    height: "2px",
                    background: "linear-gradient(to right, #c9a84c, #a98e16)",
                    borderRadius: "2px",
                    marginBottom: "20px",
                  }}
              />

              {/* Info box */}
              <Section
                  style={{
                    border: "1px solid rgba(201,168,76,0.25)",
                    background: "rgba(201,168,76,0.04)",
                    padding: "14px 16px",
                    marginBottom: "20px",
                  }}
              >
                <Row style={{ marginBottom: "8px" }}>
                  <Text
                      style={{
                        display: "inline",
                        color: "#c9a84c",
                        fontSize: "9.5px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        marginRight: "12px",
                        minWidth: "60px",
                      }}
                  >
                    From
                  </Text>
                  <Text
                      style={{ display: "inline", color: "#0d1117", fontSize: "12.5px" }}
                  >
                    {name}
                  </Text>
                </Row>
                <Row>
                  <Text
                      style={{
                        display: "inline",
                        color: "#c9a84c",
                        fontSize: "9.5px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        marginRight: "12px",
                        minWidth: "60px",
                      }}
                  >
                    Subject
                  </Text>
                  <Text
                      style={{ display: "inline", color: "#0d1117", fontSize: "12.5px" }}
                  >
                    {subject}
                  </Text>
                </Row>
              </Section>

              {/* Message */}
              <Text className="text-[#4a4a4a] text-[13.5px] leading-[1.8] m-0">
                {message}
              </Text>
            </Section>

            <Hr style={{ borderColor: "#f0ede8", margin: 0 }} />

            {/* ── Footer ── */}
            <Section className="bg-[#f9f7f4] px-[32px] py-[16px]">
              <Row>
                <Text className="text-[#8a8a8a] text-[10px] tracking-[0.08em] m-0">
                  © {new Date().getFullYear()} Luthfi Yazid DHH Law Firm · Jakarta, Indonesia
                </Text>
              </Row>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
);

AdminNotifEmail.PreviewProps = {
  name: "Michael Bulba",
  subject: "Need a Lawyer for Elder Abuse Case",
  message:
      "Hello, Luthfi Yazid DHH Law Firm. I am Michael Bulba and I need your assistance regarding an elder abuse case. Please get back to me at your earliest convenience.",
} as AdminNotifEmailProps;

export default AdminNotifEmail;