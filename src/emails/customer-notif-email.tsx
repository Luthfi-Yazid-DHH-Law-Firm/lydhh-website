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

interface CustomerNotifEmailProps {
  name: string;
  mailID: string;
}

export const CustomerNotifEmail = ({
                                     name,
                                     mailID,
                                   }: CustomerNotifEmailProps) => (
    <Html>
      <Head />
      <Preview>We&#39;ve received your message — here&#39;s your reference number.</Preview>
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
                Message Received
              </Text>

              {/* Heading */}
              <Text className="text-[#0d1117] text-[20px] font-normal leading-[1.3] m-0 mb-[16px]">
                Thank you for reaching out, {name}.
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

              {/* Body copy */}
              <Text className="text-[#4a4a4a] text-[13.5px] leading-[1.8] m-0 mb-[14px]">
                We have received your inquiry and a member of our team will review
                it shortly. You can expect to hear from us within{" "}
                <span style={{ color: "#0d1117", fontWeight: 500 }}>
                1–2 business days
              </span>
                .
              </Text>

              <Text className="text-[#4a4a4a] text-[13.5px] leading-[1.8] m-0 mb-[16px]">
                For your records, here is your reference number:
              </Text>

              {/* Ticket badge */}
              <Section
                  style={{
                    display: "inline-block",
                    border: "1px solid rgba(201,168,76,0.3)",
                    background: "rgba(201,168,76,0.06)",
                    padding: "8px 16px",
                    marginBottom: "24px",
                  }}
              >
                <Text style={{ margin: 0 }}>
                <span
                    style={{
                      color: "#8a8a8a",
                      fontSize: "9.5px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginRight: "10px",
                    }}
                >
                  Reference
                </span>
                  <span
                      style={{
                        color: "#c9a84c",
                        fontSize: "13px",
                        fontWeight: 500,
                        fontFamily: "monospace",
                      }}
                  >
                  #{mailID}
                </span>
                </Text>
              </Section>

              <Hr style={{ borderColor: "#f0ede8", margin: "0 0 20px 0" }} />

              {/* Disclaimer */}
              <Text
                  style={{
                    color: "#8a8a8a",
                    fontSize: "12px",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
              >
                This message was intended for{" "}
                <span style={{ color: "#0d1117", fontWeight: 500 }}>{name}</span>.
                If you did not contact us, please disregard this email.
              </Text>
            </Section>

            {/* ── Footer ── */}
            <Section className="bg-[#f9f7f4] px-[32px] py-[16px]">
              <Row>
                <Text className="text-[#8a8a8a] text-[10px] tracking-[0.08em] m-0">
                  © {new Date().getFullYear()} Luthfi Yazid DHH Law Firm · Jakarta, Indonesia
                </Text>
              </Row>
              <Row>
                <Text className="text-[#aaa] text-[10px] m-0 mt-[4px]">
                  Satrio Tower, 22nd Floor, Mega Kuningan, Jakarta 12950
                </Text>
              </Row>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
);

CustomerNotifEmail.PreviewProps = {
  name: "Michael Bulba",
  mailID: "9083475",
} as CustomerNotifEmailProps;

export default CustomerNotifEmail;