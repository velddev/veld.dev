import {
  Button,
  Collapse,
  Stack,
  StackProps,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = StackProps & {
  defaultOpen?: boolean;
  showAmount?: number;
  startingHeight?: string | number;
};

const CollapsibleStack = ({
  defaultOpen,
  showAmount,
  startingHeight,
  children,
  ...rest
}: Props) => {
  const [isOpen, { toggle }] = useBoolean(false);
  return (
    <VStack spacing="6">
      <Collapse in={isOpen} startingHeight={startingHeight}>
        <Stack {...rest}>{children}</Stack>
      </Collapse>
      <Button bg="transparent" onClick={() => toggle()} w="full">
        Show {isOpen ? "less" : "more"}
      </Button>
    </VStack>
  );
};

export default CollapsibleStack;
