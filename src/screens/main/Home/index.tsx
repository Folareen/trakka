import { Text, View, Image, ImageBackground, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Style'
import TotalAmountCard from '../../../components/TotalAmountCard'
import TabBar from '../../../components/TabBtn'
import { RecentTransType } from './type'
import RecentTransactionCard from '../../../components/RecentTransactionCard'
import { getDateAndTime } from '../../../utils/formatDate'
import useAuthStore from '../../../stores/useAuthStore'
import formatAmount from '../../../utils/formatAmount'
import useFetch from '../../../hooks/useFetch'
import { Skeleton } from 'moti/skeleton'


const Home = ({ navigation }: { navigation: any }) => {
    const [recentTransType, setRecentTransType] = useState<RecentTransType>('all')

    const store = useAuthStore()

    const recentTransactions = useFetch(`transaction?recent&type=${recentTransType}`, [recentTransType])

    console.log(recentTransactions)

    return (
        <View style={styles.container}>

            <ImageBackground style={styles.upper} source={require('../../../assets/images/home-upper-bg.png')} resizeMode='cover' imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <View style={styles.header}>
                    <Text style={styles.name}>
                        {getDateAndTime(new Date())}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.avatarAndName}>
                        <Image source={store.user.avatar ? { uri: store.user.avatar } : require('../../../assets/images/avatar.png')} style={styles.avatar} />
                        <Text style={styles.name}>
                            {store.user.username}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.amounts}>
                    <Text style={styles.acctBalTitle}>
                        Account Balance
                    </Text>
                    <Skeleton show={recentTransactions.loading} height={50} colorMode='light'  >
                        <Text style={styles.acctBalAmt}>
                            &#8358; {formatAmount(recentTransactions.data?.accountBalance)}
                        </Text>
                    </Skeleton  >

                </View>
                <Skeleton show={recentTransactions.loading} height={70} colorMode='light' width={'100%'}  >
                    <View style={{ flexDirection: 'row', marginHorizontal: 8, columnGap: 8 }}>
                        <TotalAmountCard amount={recentTransactions.data?.incomeAmount} type='income' />
                        <TotalAmountCard amount={recentTransactions.data?.expensesAmount} type='expenses' />

                    </View>
                </Skeleton  >

            </ImageBackground>

            <View style={styles.recentTransTypeContainer}>
                {
                    ['all', 'income', 'expenses'].map((value) => (
                        <TabBar value={value as RecentTransType} key={value} setRecentTransType={setRecentTransType} recentTransType={recentTransType} />
                    ))
                }
            </View>

            <View style={styles.recentTransHeader}>
                <Text style={styles.rtHText}>
                    Recent Transactions
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('transactions')}>
                    <Text style={styles.rtHText}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>


            {
                recentTransactions.loading ?
                    <View style={styles.recentTransSkeleton}>
                        <Skeleton height={60} colorMode='light' width={'100%'} />
                        <Skeleton height={60} colorMode='light' width={'100%'} />
                        <Skeleton height={60} colorMode='light' width={'100%'} />
                        <Skeleton height={60} colorMode='light' width={'100%'} />
                    </View>
                    :
                    <FlatList
                        style={styles.recentTransactionList}
                        data={recentTransactions.data?.transactions}
                        renderItem={({ item: { amount, type, category, date } }) => (
                            <RecentTransactionCard amount={amount} type={type} category={category} date={date} />
                        )}
                        ListEmptyComponent={() => (
                            <Text style={{ fontFamily: '500', }}>
                                No transaction found...
                            </Text>
                        )}
                    />

            }





        </View>
    )
}

export default Home