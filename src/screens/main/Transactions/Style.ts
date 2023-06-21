import { StyleSheet } from "react-native";
import { screenWidth } from "../../../utils/screenDimen";

export const styles = StyleSheet.create({
    container: { backgroundColor: '#FFF6E5', flex: 1 },
    header: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    backBtn: {

    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: '600'
    },
    dropdownsContainer: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 15,
        marginHorizontal: 15,
        columnGap: 10
    },
    dropdown: {
        borderColor: '#02021A',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        borderRadius: 40,
        backgroundColor: 'transparent',
    },
    monthDropdown: {
        width: screenWidth / 2.5
    },
    categoriesDropdown: {
        width: screenWidth / 3
    },
    dropdownText: {
        fontFamily: '600',
        fontSize: 15,
        textTransform: 'capitalize'
    },
    rowText: {
        fontFamily: '500',
        fontSize: 14,
        textTransform: 'capitalize'
    },
    selectedRow: {
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    selectedRowText: {
        fontFamily: '600'
    },
    transactions: {

    },
    swipeTD:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 25,
        marginTop: 10
    },
    swipeText:{
        fontFamily: '400',
        fontSize: 10,
        marginLeft: 8
    },
    transSkeleton: {
        rowGap: 20,
        paddingBottom: 20,
    },
})