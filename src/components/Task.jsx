import { Checkbox, ListItem } from "@chakra-ui/react";

export default function Task({ title }) {
  return (
    <ListItem>
      <Checkbox>{title}</Checkbox>
    </ListItem>
  );
}
