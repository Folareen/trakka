import { StyleSheet } from 'react-native'
import { screenWidth } from '../../../utils/screenDimen'

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
    }, dropdown: {
        borderColor: '#02021A',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        borderRadius: 40,
        backgroundColor: 'transparent',
        width: screenWidth / 1.5,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 15
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
    pieChartContainer:{
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pieChartTotalAmount:{
        position: 'absolute',
        fontFamily: '600',
        fontSize: 18,
        color: 'rgba(0,0,0,0.9)'
    },
    typeFilterBtnsContainer: {
        backgroundColor: '#f1f1f9',
        marginHorizontal: 20,
        borderRadius: 30,
        flexDirection: 'row',
        columnGap: 5,
        marginVertical: 20
    },
    typeFilterBtn: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        borderRadius: 30,
    },
    typeFilterBtnText: {
        fontFamily: '600',
        fontSize: 16,
        color: 'rgba(0,0,0,0.85)',
        textTransform: 'capitalize'
    },
    activeTypeFilterBtn: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    }, activeTypeFilterBtnText: {
        color: '#FCFCFC',
    }, statItem: {
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.6)',
        paddingVertical: 10,
        paddingHorizontal: 8,
        rowGap: 10,
        borderRadius: 5
    }, statItemDot :{
        width: 15,
        height: 15,
        borderRadius: 15
    }, statItemCategory: {
        flex: 1,
        color: '#212325',
        fontFamily: '500',
        fontSize: 13
    }, statItemAmount: {
        fontFamily: '500',
        fontSize: 18,
        alignItems: 'center'
    }, 
    statItemBar: {
        borderRadius: 10,
        backgroundColor: '#f1f1f9',
        height: 15,
        flexDirection: 'row'
    }, statItemBarInner: {
        backgroundColor: 'red',
        borderRadius: 10
    }
})