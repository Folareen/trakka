import { Text, View, Image, ImageBackground, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { styles } from './Style'
import TotalAmountCard from '../../../components/TotalAmountCard'
import TabBar from '../../../components/TabBtn'
import { RecentTransType } from './type'
import RecentTransactionCard from '../../../components/RecentTransactionCard'
import { getDate } from '../../../utils/formatDate'
import useAuthStore from '../../../stores/useAuthStore'
import formatAmount from '../../../utils/formatAmount'
import useFetch from '../../../hooks/useFetch'
import { Skeleton } from 'moti/skeleton'


const Home = ({ navigation }: { navigation: any }) => {
    const [recentTransType, setRecentTransType] = useState<RecentTransType>('all')

    const store = useAuthStore()

    const [refresh, setRefresh] = useState(false)
    const [loadingAmounts, setLoadingAmounts] = useState(true)


    const recentTransactions = useFetch(`transaction?recent&type=${recentTransType}`, [recentTransType, refresh])

    const accountBalance = useMemo(() => recentTransactions.data?.accountBalance, [recentTransactions.data?.accountBalance])
    const incomeAmount = useMemo(() => recentTransactions.data?.incomeAmount, [recentTransactions.data?.incomeAmount])
    const expensesAmount = useMemo(() => recentTransactions.data?.expensesAmount, [recentTransactions.data?.expensesAmount])

    useEffect(() => {
        if (recentTransactions.loading == false && (recentTransactions.data != null || recentTransactions.error != '')) {
            setLoadingAmounts(false)
        }
    }, [recentTransactions.loading])

    return (
        <View style={styles.container}>

            <ImageBackground style={styles.upper} source={require('../../../assets/images/home-upper-bg.png')} resizeMode='cover' imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <View style={styles.header}>
                    <Text style={styles.name}>
                        {getDate(new Date())}
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
                    {
                        loadingAmounts ?
                            <View style={{ paddingHorizontal: 20 }}>
                                <Skeleton height={60} colorMode='light' width={'100%'} />
                            </View>
                            :
                            <Text style={styles.acctBalAmt}>
                                &#8358; {formatAmount(accountBalance)}
                            </Text>
                    }

                </View>

                {
                    loadingAmounts ?
                        <View style={{ paddingHorizontal: 10 }}>
                            <Skeleton height={70} colorMode='light' width={'100%'} />
                        </View>
                        :
                        <View style={{ flexDirection: 'row', marginHorizontal: 8, columnGap: 8 }}>
                            <TotalAmountCard amount={incomeAmount} type='income' />
                            <TotalAmountCard amount={expensesAmount} type='expenses' />
                        </View>
                }

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
                        <Skeleton height={65} colorMode='light' width={'100%'} />
                        <Skeleton height={65} colorMode='light' width={'100%'} />
                        <Skeleton height={65} colorMode='light' width={'100%'} />
                        <Skeleton height={65} colorMode='light' width={'100%'} />
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