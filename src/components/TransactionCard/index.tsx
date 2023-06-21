import React, { useRef, useState } from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { getDateAndTime } from '../../utils/formatDate'
import { styles } from './Style'
import { Swipeable } from 'react-native-gesture-handler'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { Modal, Portal } from 'react-native-paper'
import formatAmount from '../../utils/formatAmount'
import Toast from 'react-native-root-toast'
import { deleteTransaction } from '../../services/transaction'

type Props = {
    navigation: any,
    category: string,
    description: string,
    amount: number,
    type: string,
    date: string,
    prevCard: any,
    setPrevCard: React.Dispatch<any>,
    id: string,
    setRefresh: React.Dispatch<boolean>,
    refresh: boolean
}

const TransactionCard = ({ navigation, category, description, amount, type, date, prevCard, setPrevCard, id, refresh, setRefresh }: Props) => {
    const cardRef = useRef(null)

    const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false)
    const [deleting, setDeleting] = useState<boolean>(false)

    const handleDelete = async () => {
        try {
            setDeleting(true)

            await deleteTransaction(id)

            Toast.show('Transaction deleted', { position: 60, backgroundColor: 'orange', duration: Toast.durations.SHORT, shadow: true, animation: true, hideOnPress: true })
            setDeleteModalVisible(false)

            setRefresh(!refresh)
        } catch (error: any) {
            Toast.show(error.message, { position: 60, backgroundColor: 'red', duration: Toast.durations.SHORT, shadow: true, animation: true, hideOnPress: true })
            setDeleting(false)
        }
    }


    const closePrev = () => {
        if (prevCard != cardRef && prevCard != null) {
            prevCard.current.close()
        }
        setPrevCard(cardRef)
    };

    const renderRightActions = (progress: string, dragX: string) => {
        return (
            <View
                style={{
                    margin: 0,
                    alignItems: "center",
                    flexDirection: "row",
                    width: 140,
                    paddingHorizontal: 5,
                    marginRight: 25,
                }}

            >
                <TouchableOpacity style={styles.swipeBtn} onPress={() => {
                    navigation.navigate('add-transaction', {
                        amount: String(amount),
                        type,
                        category,
                        description,
                        date,
                        edit: true,
                        id
                    })
                }}>
                    <Feather name="edit-2" size={20} color="orange" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    // dispatch(removeProduct({ slug }))
                    setDeleteModalVisible(true)
                }} style={styles.swipeBtn}>
                    <MaterialIcons name="delete" size={20} color="red" />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <Swipeable
            ref={cardRef}
            renderRightActions={(progress, dragX) =>
                renderRightActions(progress, dragX)
            }
            onSwipeableOpen={closePrev}
            containerStyle={{ marginBottom: 20, }}

        >

            <Portal >
                <Modal visible={deleteModalVisible} dismissable={!deleting && deleteModalVisible} style={styles.overlayContainer} contentContainerStyle={styles.overlayInner} onDismiss={() => setDeleteModalVisible(false)}>
                    {
                        deleting ?
                            <ActivityIndicator size={'large'} color='#7F3DFF' />
                            :
                            <>
                                <Text style={styles.confirmDeleteHeading}>
                                    Are you sure you want to delete this transaction?
                                </Text>
                                <View style={styles.confirmDeleteBtns}>
                                    <TouchableOpacity style={[styles.confirmDeleteBtn, { backgroundColor: 'green' }]} onPress={handleDelete}>
                                        <Text style={styles.confirmDeleteBtnText}>
                                            Yes
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.confirmDeleteBtn, { backgroundColor: 'red' }]}
                                        onPress={() => setDeleteModalVisible(false)}>
                                        <Text style={styles.confirmDeleteBtnText}>
                                            No
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* <Text style={styles.overlayInnerErrText}>
                        sdfsdf
                    </Text> */}
                            </>
                    }
                </Modal>


                {/* <ActivityIndicator size={'large'} color='#7F3DFF' /> */}
                {/* </Modal> */}
            </Portal>

            <View style={styles.transactionCard}>
                <View style={styles.row}>
                    <Text style={styles.category}>
                        {category}
                    </Text>
                    <Text style={[styles.amount, styles[type]]}>
                        {type == 'income' ? '+' : '-'} &#8358; {formatAmount(amount)}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                    <Text style={styles.description}>
                        {getDateAndTime(date)}
                    </Text>
                </View>

            </View>
        </Swipeable>
    )
}

export default TransactionCard