import { useState } from "react";
import {
  Paper,
  Textarea,
  useMantineColorScheme,
  TextInput,
  Button,
  Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";

import { IconAt, IconCheck, IconX } from "@tabler/icons-react";
import emailjs from "@emailjs/browser";

function Contacts({ contacts }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [message, setMessage] = useState("");
  const [senderFirstName, setSenderFirstName] = useState("");
  const [senderLastName, setSenderLastName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  const sendEmail = () => {
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const API_KEY = import.meta.env.VITE_API_KEY;

    notifications.show({
      id: "load-data",
      loading: true,
      title: "Sending Email!",
      message: "Please wait and don't close the tab",
      autoClose: false,
      withCloseButton: false,
    });
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          message: message,
          senderFirstName: senderFirstName,
          senderLastName: senderLastName,
          senderEmail: senderEmail,
        },
        API_KEY
      )
      .then(() => {
        notifications.update({
          id: "load-data",
          color: "teal",
          title: "Email Sent!",
          message: "Thank you for sending an email :>",
          icon: <IconCheck size="1rem" />,
          autoClose: 2000,
        });
      })
      .catch((error) => {
        console.log(error);
        notifications.update({
          id: "load-data",
          color: "red",
          title: `Error ${error.status}`,
          message: error.text,
          icon: <IconX size="1rem" />,
          autoClose: 2000,
        });
      });
  };

  return (
    <div
      ref={contacts}
      style={{
        width: "100vw",
        height: "100vh",
        background: dark ? "black" : "white",
        display: "flex",
        color: dark ? "white" : "black",
        flexDirection: "column",
      }}
    >
      <div style={{ margin: "auto" }}>
        <Text ta="center" fw="bold" style={{ fontSize: "1.400rem" }}>
          Contact Me
        </Text>
        <Text
          ta="center"
          c="dimmed"
          style={{ marginTop: "1rem", marginBottom: "2rem" }}
        >
          Any question or remarks? Just write me a message!
        </Text>
        <Paper
          style={{
            margin: "auto",
            background: dark ? "" : "white", // insert color
            color: dark ? "white" : "black",
            padding: "2rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <TextInput
              label="First Name"
              placeholder="Thom"
              style={{ marginRight: "0.500rem" }}
              onChange={(e) => setSenderFirstName(e.target.value)}
            />
            <TextInput
              label="Last Name"
              placeholder="Yorke"
              onChange={(e) => setSenderLastName(e.target.value)}
            />
          </div>
          <TextInput
            label="Email"
            placeholder="thom@yorke.com"
            onChange={(e) => setSenderEmail(e.target.value)}
            icon={<IconAt size="0.8rem" />}
            style={{ marginTop: "1rem" }}
          />
          <Textarea
            placeholder="Please type something nice."
            label="Message"
            variant="default"
            style={{
              width: "100%",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            minRows={2}
            maxRows={4}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="filled"
            color="dark"
            fullWidth
            onClick={sendEmail}
            style={{ cursor: "pointer" }}
          >
            Send Message
          </Button>
        </Paper>
      </div>
    </div>
  );
}

export default Contacts;
