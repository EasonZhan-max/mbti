import { useState, useEffect } from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { Option } from "@swan-io/boxed";
import dayjs from "dayjs";

const SECOND_IN_MILISECONDS = 1000;

export default function TestTimer() {
  const [elapsedTime, setElapsedTime] = useState<Option<dayjs.Dayjs>>(
    Option.None()
  );
  const bg = useColorModeValue("rgba(255, 255, 255, .68)", "rgba(255, 255, 255, .1)");
  const color = useColorModeValue("#17232c", "#f4f9fb");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .22)", "rgba(255, 255, 255, .18)");

  useEffect(() => {
    if (elapsedTime.isNone()) {
      setElapsedTime(Option.Some(dayjs().minute(0).second(0).millisecond(0)));
      return;
    }

    const intervalId = setTimeout(() => {
      setElapsedTime((elapsedTime) =>
        elapsedTime.map((elapsedTime) => elapsedTime.add(1000, "ms"))
      );
    }, SECOND_IN_MILISECONDS);

    return () => clearTimeout(intervalId);
  }, [elapsedTime]);

  return (
    <Flex
      width={120}
      px={3}
      h={11}
      columnGap={2}
      justifyContent="flex-start"
      alignItems="center"
      border="1px solid"
      borderColor={borderColor}
      rounded="16px"
      bg={bg}
      color={color}
      fontWeight="800"
    >
      <FiClock size={20} />
      <Text fontWeight="bold">
        {elapsedTime.match({
          Some: (elapsedTime) => {
            const minute = elapsedTime.minute().toString().padStart(2, "0");
            const second = elapsedTime.second().toString().padStart(2, "0");

            return `${minute} : ${second}`;
          },
          None: () => "-- : --",
        })}
      </Text>
    </Flex>
  );
}
