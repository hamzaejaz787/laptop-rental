import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  enddate: string;
  location: string;
  message: string;
  phone: string;
  company: string;
  startdate: string;
}

const EmailTemplate = (EmailItems: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Quote from Laptop Rental</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={headerContainer}>
            <Row>
              <Column style={{ padding: "0 20px" }}>
                <Link href="https://laptop-rental.com.au/">
                  <Img src="/logo_red.png" width={100} height={100} />
                </Link>
              </Column>

              <Column align="right">
                <Text style={heading}>Quote Request</Text>
              </Column>
            </Row>
          </Section>
          <Text style={paragraph}>
            <strong>Name:</strong> {EmailItems.name}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong> {EmailItems.email}
          </Text>
          <Text style={paragraph}>
            <strong>Phone Number:</strong> {EmailItems.phone}
          </Text>
          <Text style={paragraph}>
            <strong>Company Name:</strong> {EmailItems.company}
          </Text>
          <Text style={paragraph}>
            <strong>Location:</strong> {EmailItems.location}
          </Text>
          <Text style={paragraph}>
            <strong>Start Date:</strong> {EmailItems.startdate}
          </Text>
          <Text style={paragraph}>
            <strong>End Date:</strong> {EmailItems.enddate}
          </Text>
          <Text style={paragraph}>
            <strong>Message/Quote:</strong> {EmailItems.message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "660px",
  maxWidth: "100%",
  backgroundColor: "#eee",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#fff",
  padding: "0 16px",
};

const headerContainer = {
  backgroundColor: "rgb(214, 24, 55)",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  padding: "0 16px",
  color: "#484848",
};

export default EmailTemplate;
