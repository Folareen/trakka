import { Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style'
import PieChart from 'react-native-pie-chart'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'
import useFetch from '../../../hooks/useFetch'
import { months } from '../../../utils/formatDate'
import SelectDropdown from 'react-native-select-dropdown'
import formatAmount from '../../../utils/formatAmount'
import { screenHeight, screenWidth } from '../../../utils/screenDimen'
import { Skeleton } from 'moti/skeleton'

const piechartColors = [
    "#4B77BE",
    "#5DA5DA",
    "#53917E",
    "#6A9373",
    "#4E8542",
    "#8C564B",
    "#E377C2",
    "#F7B6D2",
    "#C49C94",
    "#FF7F0E",
    "#FFBB78",
    "#FF9896",
    "#FFD966",
    "#FFE654",
    "#B3B3CC",
    "#CCCCCC",
    "#D9D9D9"
]

const Statistics = ({ navigation }: { navigation: any }) => {

    const [month, setMonth] = useState<string>(months[new Date().getMonth()])
    const [category, setCategory] = useState('income')

    const [refresh, setRefresh] = useState(false)

    const { data, loading, error } = useFetch(`transaction?stat&month=${months.indexOf(month) + 1}`, [refresh, month])



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
                    Statistics
                </Text>
            </View>

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
                defaultButtonText='Month'
                defaultValue={month}
                buttonStyle={styles.dropdown}
                buttonTextStyle={styles.dropdownText}
                renderDropdownIcon={() => (
                    <AntDesign name="down" size={18} color="black" />
                )}
                rowTextStyle={styles.rowText}
                selectedRowStyle={styles.selectedRow}
                selectedRowTextStyle={styles.selectedRowText}
                dropdownOverlayColor='rgba(0,0,0,0.8)'
            />

            {
                loading ?
                    <View style={{ rowGap: 20 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Skeleton height={300} colorMode='light' width={300} radius={300} />
                        </View>
                        <Skeleton height={80} colorMode='light' width={'100%'} />
                        <Skeleton height={70} colorMode='light' width={'100%'} />
                        <Skeleton height={70} colorMode='light' width={'100%'} />
                    </View>
                    :
                    <>
                        {
                            data ?
                                <>
                                    {
                                        <View style={styles.pieChartContainer}>
                                            <PieChart
                                                widthAndHeight={(screenWidth + screenHeight) / 4.2}
                                                series={Object.values(data && data[category]['stat']).length > 0 ? Object.values(data && data[category]['stat']) : [1]}
                                                sliceColor={data[category]['categories']?.length > 0 ? piechartColors.slice(0, data && data[category]['categories']?.length) : ["#CCCCCC"]}
                                                coverRadius={0.7}
                                                coverFill={'#FFF'}
                                            />
                                            <Text style={styles.pieChartTotalAmount}>
                                                &#8358; {formatAmount(data && data[category]['total'])}
                                            </Text>
                                        </View>
                                    }
                                    <View style={styles.typeFilterBtnsContainer}>
                                        <TouchableOpacity style={[styles.typeFilterBtn, category == 'income' && styles.activeTypeFilterBtn]} onPress={() => setCategory('income')}>
                                            <Text style={[styles.typeFilterBtnText, category == 'income' && styles.activeTypeFilterBtnText]}>
                                                income
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.typeFilterBtn, category == 'expenses' && styles.activeTypeFilterBtn]} onPress={() => setCategory('expenses')}>
                                            <Text style={[styles.typeFilterBtnText, category == 'expenses' && styles.activeTypeFilterBtnText]}>
                                                expenses
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <FlatList
                                        style={{ paddingHorizontal: 20 }}
                                        data={data && data[category]['categories'].map((cgy: string) => ({
                                            category: cgy,
                                            amount: data[category]['stat'][cgy]
                                        }))}
                                        renderItem={({ item, index }) => (
                                            <View style={styles.statItem}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
                                                    <View style={[styles.statItemDot, { backgroundColor: piechartColors[index] }]}>

                                                    </View>
                                                    <Text style={styles.statItemCategory}>
                                                        {item.category}
                                                    </Text>
                                                    <Text style={[styles.statItemAmount, category == 'income' ? { color: '#00A86B' } : { color: '#FD3C4A' }]}>
                                                        {category == 'income' ? '+' : '-'} &#8358;{formatAmount(item.amount)}
                                                    </Text>

                                                </View>
                                                <View style={styles.statItemBar}>
                                                    <View style={[styles.statItemBarInner, { backgroundColor: piechartColors[index], flex: item.amount / data[category]['total'] }]}>

                                                    </View>
                                                </View>

                                            </View>
                                        )}
                                        ListEmptyComponent={() => (
                                            <Text style={{ fontFamily: '500', marginLeft: 30, fontSize: 16 }}>
                                                No stat...
                                            </Text>
                                        )}
                                    />
                                </>
                                :
                                <Text> Error occured.. {error}</Text>
                        }
                    </>
            }



        </View>
    )
}

export default Statistics