import { Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { AntDesign } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import months from '../../../utils/months'
import categories from '../../../utils/categories'
import TransactionCard from '../../../components/TransactionCard'
import { StatusBar } from 'expo-status-bar'


const transactions = [
    {
        category: 'shopping', description: 'buy some grocery', amount: 4000, transactionType: 'expenses', date: '10:00AM july,2020'
    },
    {
        category: 'salary', description: 'buy some grocery', amount: 4000, transactionType: 'income', date: '10:00AM july,2020'
    },
    {
        category: 'shopping', description: 'buy some grocery', amount: 4000, transactionType: 'expenses', date: '10:00AM july,2020'
    },
    {
        category: 'salary', description: 'buy some grocery', amount: 4000, transactionType: 'income', date: '10:00AM july,2020'
    },
    {
        category: 'shopping', description: 'buy some grocery', amount: 4000, transactionType: 'expenses', date: '10:00AM july,2020'
    },
    {
        category: 'salary', description: 'buy some grocery', amount: 4000, transactionType: 'income', date: '10:00AM july,2020'
    },
    {
        category: 'shopping', description: 'buy some grocery', amount: 4000, transactionType: 'expenses', date: '10:00AM july,2020'
    },
    {
        category: 'salary', description: 'buy some grocery', amount: 4000, transactionType: 'income', date: '10:00AM july,2020'
    },
    {
        category: 'shopping', description: 'buy some grocery', amount: 4000, transactionType: 'expenses', date: '10:00AM july,2020'
    },
]

const Transactions = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <StatusBar style='dark' />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>
                    Transactions
                </Text>
            </View>

            <View style={styles.dropdownsContainer}>
                <SelectDropdown
                    data={months}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        return item
                    }}
                    defaultButtonText='Month'
                    buttonStyle={[styles.dropdown, styles.monthDropdown]}
                    buttonTextStyle={styles.dropdownText}
                    renderDropdownIcon={() => (
                        <AntDesign name="down" size={18} color="black" />
                    )}
                    rowTextStyle={styles.rowText}
                    selectedRowStyle={styles.selectedRow}
                    selectedRowTextStyle={styles.selectedRowText}
                    dropdownOverlayColor='rgba(0,0,0,0.8)'
                />
                <SelectDropdown
                    data={categories}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        return item
                    }}
                    defaultValue='all'
                    defaultButtonText='All'
                    buttonStyle={[styles.dropdown, styles.categoriesDropdown]}
                    buttonTextStyle={styles.dropdownText}
                    renderDropdownIcon={() => (
                        <AntDesign name="down" size={18} color="black" />
                    )}
                    rowTextStyle={styles.rowText}
                    selectedRowStyle={styles.selectedRow}
                    selectedRowTextStyle={styles.selectedRowText}
                    dropdownOverlayColor='rgba(0,0,0,0.8)'
                />
            </View>

            <FlatList
                style={styles.transactions}
                data={transactions}
                renderItem={({ item: { category, description, amount, transactionType, date } }) => (
                    <TransactionCard amount={amount} transactionType={transactionType} category={category} date={date} description={description} />
                )}
                ListEmptyComponent={() => (
                    <Text>
                        empty
                    </Text>
                )}

            />


        </View>
    )
}

export default Transactions