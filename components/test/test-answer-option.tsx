import { useRadio, Box, useColorModeValue } from "@chakra-ui/react";

export default function TestAnswerOption(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const bg = useColorModeValue("rgba(255, 255, 255, .64)", "rgba(255, 255, 255, .1)");
  const color = useColorModeValue("#17232c", "#f4f9fb");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .2)", "rgba(255, 255, 255, .18)");
  const hoverBg = useColorModeValue("rgba(255, 255, 255, .86)", "rgba(255, 255, 255, .18)");
  const checkedBg = useColorModeValue("primary.700", "primary.200");
  const checkedColor = useColorModeValue("white", "#0b141c");

  return (
    <Box
      w="full"
      as="label"
    >
      <input {...input} />
      <Box
        px={5}
        py={4}
        cursor="pointer"
        borderWidth={1}
        borderRadius="18px"
        borderColor={borderColor}
        bg={bg}
        color={color}
        fontWeight="700"
        userSelect="none"
        transition=".18s ease"
        _hover={{
          bg: hoverBg,
          transform: "translateY(-1px)",
        }}
        _checked={{
          bg: checkedBg,
          color: checkedColor,
          borderColor: checkedBg,
          boxShadow: "0 14px 32px rgba(86, 119, 137, .24)",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        {...checkbox}
      >
        {props.children}
      </Box>
    </Box>
  );
}
