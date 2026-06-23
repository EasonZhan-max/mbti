import Link from "next/link";
import { Flex, Text, Button, useColorModeValue } from "@chakra-ui/react";

import { withBasePath } from "../../lib/asset-path";

export default function Footer() {
  const bg = useColorModeValue("rgba(237, 246, 251, .96)", "#091018");
  const color = useColorModeValue("#17232c", "whiteAlpha.900");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .14)", "whiteAlpha.100");

  return (
    <Flex
      as="footer"
      py={5}
      w="100%"
      bg={bg}
      color={color}
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Text>
        本网站上的所有测试都基于此{" "}
        <Link
          href={withBasePath("/MBTI-personality-test.pdf")}
          target="_blank"
        >
          <Button
            colorScheme="primary"
            variant="link"
          >
            来源
          </Button>
        </Link>
      </Text>
      <Text>
        Made by{" "}
        <Link
          href="https://github.com/EasonZhan-max/mbti"
          target="_blank"
        >
          <Button
            colorScheme="primary"
            variant="link"
          >
            Eason
          </Button>
        </Link>
      </Text>
    </Flex>
  );
}
