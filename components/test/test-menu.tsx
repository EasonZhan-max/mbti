import { Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

import TestTimer from "./test-timer";

interface TestMenuProps {
  onShowInstructionsButtonClick: () => void;
}

export default function TestMenu(props: TestMenuProps) {
  const buttonBg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(255, 255, 255, .12)");
  const buttonColor = useColorModeValue("#17232c", "#f4f9fb");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .22)", "rgba(255, 255, 255, .18)");
  const hoverBg = useColorModeValue("rgba(255, 255, 255, .94)", "rgba(255, 255, 255, .2)");

  return (
    <Flex
      width="full"
      my={2}
      px={4}
      direction="column"
      justifyContent="center"
      alignItems="flex-end"
      gap={2}
    >
      <Flex gap={3}>
        <TestTimer />
        <Button
          aria-label="instructions"
          variant="solid"
          leftIcon={<RiInformationLine size={24} />}
          onClick={props.onShowInstructionsButtonClick}
          h={11}
          rounded="16px"
          bg={buttonBg}
          color={buttonColor}
          border="1px solid"
          borderColor={borderColor}
          _hover={{ bg: hoverBg, transform: "translateY(-1px)" }}
        >
          说明
        </Button>
      </Flex>
    </Flex>
  );
}
