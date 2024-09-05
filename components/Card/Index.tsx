import * as React from 'react';
import { Button, Card as Cd, Text } from 'react-native-paper';

const Card = (props: any) => {
    return <Cd>
        {props.title ? <Cd.Title {...props} /> : null}
        {
            props.texts?.length > 0 ?
                <Cd.Content>
                    {props.texts.map((text: any, index: number) => <Text {...text.props}>Card title</Text>)}
                </Cd.Content> : null
        }
        {props.source ?
            <Cd.Cover {...props} /> : null
        }
        {
            props.buttons?.length > 0 ?
                <Cd.Actions>
                    {props.buttons.map((button: any, index: number) => <Button key={index} {...button.props}>{button.label}</Button>)}
                </Cd.Actions> : null
        }
    </Cd>
};

export default Card;