import { Text, View, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style'
import TotalAmountCard from '../../../components/TotalAmountCard'
import TabBar from '../../../components/TabBtn'
import { durationType } from './type'
import RecentTransactionCard from '../../../components/RecentTransactionCard'

const Home = ({ navigation }: { navigation: any }) => {
    const [duration, setDuration] = useState<durationType>('today')

    return (
        <View style={styles.container}>

            <ImageBackground style={styles.upper} source={require('../../../assets/images/home-upper-bg.png')} resizeMode='cover' imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <View style={styles.header}>
                    <Text style={styles.name}>
                        MONDAY 9 {'\n'}
                        NOVEMBER
                    </Text>
                    <View style={styles.avatarAndName}>
                        <Image source={require('../../../assets/images/avatar.png')} style={styles.avatar} />
                        <Text style={styles.name}>
                            VISHNU
                        </Text>
                    </View>
                </View>
                <View style={styles.amounts}>
                    <Text style={styles.acctBalTitle}>
                        Account Balance
                    </Text>
                    <Text style={styles.acctBalAmt}>
                        9400.00
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15, columnGap: 10 }}>
                    <TotalAmountCard amount={34000} type='income' />
                    <TotalAmountCard amount={12000} type='expenses' />
                </View>
            </ImageBackground>

            <View style={styles.durationsTabContainer}>
                {
                    ['today', 'week', 'month', 'year'].map((value) => (
                        <TabBar value={value as durationType} key={value} setDuration={setDuration} duration={duration} />
                    ))
                }
            </View>

            <View style={styles.recentTransHeader}>
                <Text style={styles.rtHText}>
                    Recent Transaction
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('transactions')}>
                    <Text style={styles.rtHText}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.recentTransactionList}
                data={[
                    { amount: 300, type: 'income', category: 'income' },
                    { amount: 300, type: 'expenses', category: 'food' },
                    { amount: 300, type: 'income', category: 'income' },
                    { amount: 300, type: 'income', category: 'income' }
                ]}
                renderItem={({ item: { amount, type, category } }) => (
                    <RecentTransactionCard amount={amount} type={type} category={category} />
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

export default Home