import {StyleSheet} from 'react-native';

export const colors = 
{
    spaceColor: 'rgb(250, 250, 250)',
    darkSpaceColor: 'rgb(200, 200, 200)',
    accentColor: '#FF4081',
    primaryColor: '#3F51B5',
    darkPrimaryColor: '#303F9F',
    lightPrimaryColor: '#C5CAE9',
    primaryTextColor: '#212121',
    secondaryTextColor: '#757575',
    dividerColor: 'rgba(0, 0, 0, 0.1)',
    titleAndIconColor: '#FFFFFF'
}

const bigLetterSize = 300;

export const actionBarStyle = StyleSheet.create(
{
    default:
    {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryColor,
        elevation: 3
    }
});

export const containerStyle = StyleSheet.create(
{
    bigLetter:
    {
        backgroundColor: colors.lightPrimaryColor + '55',
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
        backgroundColor: colors.spaceColor
    },
    drawerHeader:
    {
        flex: 0.25,
        backgroundColor: colors.primaryColor,
        justifyContent: 'center',
        paddingLeft: 10
    },
    page:
    {
        flex: 1,
        backgroundColor: colors.spaceColor,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

const createFont = (size, alignment) =>
{
    var style = {color: colors.primaryTextColor};

    if (size)
    {
        style["fontSize"] = size;
    }
    if (alignment)
    {
        style["textAlign"] = alignment;
    }
    
    return style;
};

export const textStyle = 
{
    regular: (size, alignment) => 
    {
        return Object.assign({fontFamily: 'LemonMilk'}, createFont(size, alignment));
    },
    bold: (size, alignment) => 
    {
        return Object.assign({fontFamily: 'LemonMilkbold'}, createFont(size, alignment));
    },
    italic: (size, alignment) => 
    {
        return Object.assign({fontFamily: 'LemonMilkitalic'}, createFont(size, alignment));
    },
    actionBarTitle:
    {
        color: colors.titleAndIconColor,
        fontSize: 24,
        fontFamily: 'LemonMilkbold'
    },
    bigLetter:
    {
        color: colors.lightPrimaryColor,
        fontSize: bigLetterSize,
        fontFamily: 'LemonMilk',
        textShadowOffset: {width: 6, height: -5},
        textShadowRadius: 1,
        textShadowColor: colors.darkPrimaryColor
    },
}