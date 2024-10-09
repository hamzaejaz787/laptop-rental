import React from "react";
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
import { render } from "@react-email/render";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  location: string;
  message: string;
  contact: string;
  company: string;
}

const ContactEmailTemplate = (EmailItems: ContactEmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Message from Laptop Rental</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={headerContainer}>
            <Row>
              <Column align="center">
                <Link href="https://laptop-rental.com.au/">
                  <Img
                    src="https://laptop-rental.com.au/laptop_rental_logo.png"
                    alt="logo"
                    width={200}
                    height={100}
                  />
                </Link>
              </Column>
            </Row>
          </Section>
          <Section style={{ padding: "20px" }}>
            <Text style={paragraph}>Site: laptop-rental.com.au/contact-us</Text>
            <Text style={paragraph}>
              <strong>Name:</strong> {EmailItems.name}
            </Text>
            <Text style={paragraph}>
              <strong>Email:</strong> {EmailItems.email}
            </Text>
            <Text style={paragraph}>
              <strong>Phone Number:</strong> {EmailItems.contact}
            </Text>
            <Text style={paragraph}>
              <strong>Company Name:</strong> {EmailItems.company}
            </Text>
            <Text style={paragraph}>
              <strong>Location:</strong> {EmailItems.location}
            </Text>
            <Text style={messageParagraph}>
              <strong>Message:</strong> {EmailItems.message}
            </Text>
          </Section>
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
  maxWidth: "720px",
  width: "100%",
  backgroundColor: "#fff",
};

const headerContainer = {
  backgroundColor: "#fff",
};

const messageParagraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  padding: "0 16px",
  color: "#484848",
  whiteSpace: "pre",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  padding: "0 16px",
  color: "#484848",
};

export const renderContactEmailTemplate = (
  props: ContactEmailTemplateProps
) => {
  return render(<ContactEmailTemplate {...props} />);
};

export default ContactEmailTemplate;
