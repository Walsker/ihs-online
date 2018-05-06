import {StyleSheet} from 'react-native';

export const primaryColor = 'rgb(80, 120, 210)';
export const secondaryColor = 'rgb(100, 100, 100)';
export const spaceColor = 'rgb(225, 225, 225)';
export const secondSpaceColor = 'rgb(170, 190, 240)';
export const barColor = 'rgb(20, 40, 100)';

export const actionBarStyle = StyleSheet.create(
{
    default:
    {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: barColor,
        elevation: 3
    }
});

export const containerStyle = StyleSheet.create(
{
    bigLetter:
    {
        marginVertical: 50
    },
    default:
    {
        flex: 1,
        backgroundColor: spaceColor
    },
    eventList:
    {
        flex: 1,
        backgroundColor: secondSpaceColor
    },
    eventLabel:
    {
        backgroundColor: barColor,
        alignItems: 'center'
    },
    page:
    {
        flex: 1,
        backgroundColor: spaceColor,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    quote:
    {
        backgroundColor: primaryColor,
        //marginTop: 40,
        alignItems: 'center'
    }
});

export const textStyle = StyleSheet.create(
{
    bigLetter:
    {
        fontSize: 300
    },
    dateDisplay:
    {
        color: 'white',
        fontSize: 20
    },
    eventLabel:
    {
        color: spaceColor,
        fontSize: 28
    },
    quote:
    {
        color: spaceColor,
        fontSize: 21
    },
    quoteSource:
    {
        color: spaceColor,
        fontSize: 16
    }
});