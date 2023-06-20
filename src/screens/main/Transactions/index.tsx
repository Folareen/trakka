import { Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './Style'
import { AntDesign } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import { months } from '../../../utils/formatDate'
import categories from '../../../utils/categories'
import TransactionCard from '../../../components/TransactionCard'
import { StatusBar } from 'expo-status-bar'
import useFetch from '../../../hooks/useFetch'
import { Skeleton } from 'moti/build/skeleton'


const Transactions = ({ navigation }: { navigation: any }) => {
    const [transType, setTransType] = useState<'all' | 'expenses' | 'income'>('all')
    const [month, setMonth] = useState<string>(months[new Date().getMonth()])

    const [refresh, setRefresh] = useState(false)

    const transactions = useFetch(`transaction?type=${transType}&month=${months.indexOf(month) + 1}`, [transType, refresh, month])

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
                    onSelect={(selectedItem) => {
                        setMonth(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        return item
                    }}
                    defaultValue={month}
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
                    onSelect={(selectedItem) => {
                        setTransType(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item) => {
                        return item
                    }}
                    defaultValue={transType}
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

            {
                transactions.loading ?
                    <View style={styles.transSkeleton}>
                        <Skeleton height={80} colorMode='light' width={'100%'} />
                        <Skeleton height={80} colorMode='light' width={'100%'} />
                        <Skeleton height={80} colorMode='light' width={'100%'} />
                        <Skeleton height={80} colorMode='light' width={'100%'} />
                        <Skeleton height={80} colorMode='light' width={'100%'} />
                        <Skeleton height={80} colorMode='light' width={'100%'} />
                        <Skeleton height={80} colorMode='light' width={'100%'} />
                    </View>
                    :
                    <FlatList
                        style={styles.transactions}
                        data={transactions.data?.transactions}
                        renderItem={({ item: { amount, type, category, date, description } }) => (
                            <TransactionCard amount={amount} type={type} category={category} date={date} description={description} />
                        )}
                        ListEmptyComponent={() => (
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={{ fontFamily: '500', fontSize: 16 }}>
                                    No transaction found...
                                </Text>
                            </View>
                        )}
                    />

            }



        </View>
    )
}

export default Transactions