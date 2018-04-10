import {StyleSheet} from 'react-native';

export const primaryColor = 'rgb(80, 120, 210)';
//export const secondaryColor = 'rgb(80, 120, 210)';
export const spaceColor = 'rgb(225, 225, 225)';
export const barColor = 'rgb(20, 40, 100)';

export const pageStyle = StyleSheet.create(
{
    default:
    {
        flex: 1,
        backgroundColor: spaceColor,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
},
    container:
    {
        flex: 1,
        backgroundColor: spaceColor
    }
});