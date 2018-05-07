import {StyleSheet} from 'react-native';

export const primaryColor = 'rgb(170, 190, 240)';
export const secondaryColor = 'rgb(80, 120, 210)';
export const spaceColor = 'rgb(225, 225, 225)';
export const secondSpaceColor = 'rgba(0, 0, 0, .3)';
export const barColor = 'rgb(20, 40, 100)';

const bigLetterSize = 300;

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
        backgroundColor: secondSpaceColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        width: bigLetterSize + 50,
        height: bigLetterSize + 50,
        borderRadius: (bigLetterSize + 50) / 2
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
        alignItems: 'center'
    }
});

export const textStyle = StyleSheet.create(
{
    bigLetter:
    {
        position: 'absolute',
        color: primaryColor,
        fontSize: bigLetterSize,
        fontFamily: 'LemonMilk',
        textShadowOffset: {width: 6, height: -5},
        textShadowRadius: 1,
        textShadowColor: barColor
    },
    dateDisplay:
    {
        color: 'white',
        fontSize: 25,
        fontFamily: 'LemonMilk'
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