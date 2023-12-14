
import {Box, Center, Group, Title, Text} from "@mantine/core";

export const Advantages = () => {
    return (
        <section className="advantage">
            <div className="container">
               <Center >
                   <Title>
                       НАШИ ПРЕИМУЩЕСТВА
                   </Title>
               </Center>
                <Box>
                    <Group>
                        <Box>
                            <div className="adv-image">

                            </div>
                            <Title order={3}>
                                Удобная карта
                            </Title>
                            <Text size={'xs'}>
                                Наша карта показывает местонахождение примечательств в точности до милиметра!
                            </Text>
                        </Box>
                        <Box>
                            <div className="adv-image">

                            </div>
                            <Title order={3}>
                                Удобная карта
                            </Title>
                            <Text size={'xs'}>
                                Наша карта показывает местонахождение примечательств в точности до милиметра!
                            </Text>
                        </Box>
                        <Box>
                            <div className="adv-image">

                            </div>
                            <Title order={3}>
                                Мгновенная отзывчивость
                            </Title>
                            <Text size={'xs'}>
                                Наши операторы никогда не оставят вас одним, ответят в скорем времени!
                            </Text>
                        </Box>
                    </Group>
                </Box>
            </div>
        </section>
    );
};
