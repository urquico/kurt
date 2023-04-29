import {
  Paper,
  Textarea,
  useMantineColorScheme,
  TextInput,
  Button,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

function Contacts({ contacts }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div
      ref={contacts}
      style={{
        width: "100vw",
        height: "100vh",
        background: dark ? "black" : "white",
        display: "flex",
        color: dark ? "white" : "black",
      }}
    >
      <Paper
        style={{
          margin: "auto",
          // background: dark ? "#1B1B1B" : "white",
          color: dark ? "white" : "black",
          padding: "2rem",
        }}
      >
        <TextInput
          label="Your email"
          placeholder="Your email"
          icon={<IconAt size="0.8rem" />}
        />
        <Textarea
          placeholder="Please type something nice."
          label="Message"
          variant="default"
          style={{ width: "50vw", marginBottom: "0.500rem" }}
          minRows={2}
          maxRows={4}
        />
        <Button variant="outline" color="gray" fullWidth>
          Send Message
        </Button>
      </Paper>
    </div>
  );
}

export default Contacts;
