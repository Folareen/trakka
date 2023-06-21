import { Text, View, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { styles } from './Style'
import { AntDesign } from '@expo/vector-icons'
import { Button, Modal, Portal, TextInput } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
import DateTimePicker from '@react-native-community/datetimepicker'
import { getDateAndTime } from '../../../utils/formatDate'
import { addTransaction, editTransaction } from '../../../services/transaction'
import Toast from 'react-native-root-toast'

const AddTransaction = ({ navigation, route }: { navigation: any, route: any }) => {
    const [amount, setAmount] = useState<string>(route.params?.amount || '')
    const [type, setType] = useState<string>(route.params?.type || '')
    const [category, setCategory] = useState<string>(route.params?.category || '')
    const [description, setDescription] = useState<string>(route.params?.description || '')
    const [date, setDate] = useState<Date>(route.params?.date ? new Date(route.params?.date) : new Date())

    const [openDatePicker, setOpenDatePicker] = useState<boolean>(false)

    const [submitting, setSubmitting] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const handleSubmit = async () => {
        try {
            setSubmitting(true)
            if (route.params?.edit) {
                await editTransaction({ amount: Number(amount), type, category, date, description }, route.params.id)
                Toast.show('Transaction updated', { position: 60, backgroundColor: 'green', duration: Toast.durations.SHORT, shadow: true, animation: true, hideOnPress: true })
            } else {
                await addTransaction({ amount: Number(amount), type, category, date, description })
                Toast.show('Transaction added', { position: 60, backgroundColor: 'green', duration: Toast.durations.SHORT, shadow: true, animation: true, hideOnPress: true })
            }
            setSubmitting(false)
            navigation.navigate('transactions')
        } catch (error: any) {
            setError(error.message)
            setSubmitting(false)
        }
    }

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
                    {
                        route.params?.edit ?
                            'Edit Transaction'
                            :
                            'Add Transaction'
                    }

                </Text>
            </View>

            <View style={styles.form}>

                <TextInput
                    mode="outlined"
                    label="Amount"
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    style={styles.input}
                    contentStyle={styles.inputC}
                    keyboardType='numeric'
                />

                <View style={styles.types}>
                    <TouchableOpacity style={[styles.type, { backgroundColor: '#00A86B' }, type == 'income' && styles.selectedType]} onPress={() => setType('income')} >
                        <Text style={styles.typeText}>
                            Income
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.type, { backgroundColor: '#FD3C4A' }, type == 'expenses' && styles.selectedType]} onPress={() => setType('expenses')}>
                        <Text style={styles.typeText}>
                            Expenses
                        </Text>
                    </TouchableOpacity>
                </View>

                {
                    type == 'expenses' &&
                    <SelectDropdown
                        data={[
                            "Housing",
                            "Transportation",
                            "Food",
                            "Utilities",
                            "Insurance",
                            "Debt Payments",
                            "Personal Care",
                            "Entertainment",
                            "Education",
                            "Healthcare",
                            "Clothing ",
                            "Charity",
                            "Travel",
                            "Taxes",
                            "Miscellaneous",
                            "Other"
                        ]}
                        onSelect={(selectedItem) => {
                            setCategory(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item) => {
                            return item
                        }}
                        defaultValue={category}
                        defaultButtonText='Category'
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
                }
                {
                    type == 'income' &&
                    <SelectDropdown
                        data={[
                            "Employment",
                            "Self-Employment",
                            "Property Rental",
                            "Investment",
                            "Retirement",
                            "Government Benefits",
                            "Royalties",
                            "Child Support",
                            "Gifts",
                            "Inheritances",
                            "Side Hustle",
                            "Interest",
                            "Cashbacks",
                            "Rewards",
                            "Lottery/Gambling",
                            "Other"
                        ]}
                        onSelect={(selectedItem) => {
                            setCategory(selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item) => {
                            return item
                        }}
                        defaultButtonText='Category'
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
                }

                <TextInput
                    mode="outlined"
                    label="Description"
                    value={description}
                    onChangeText={text => setDescription(text)}
                    style={styles.input}
                    contentStyle={styles.inputC}
                />

                <TouchableOpacity onPress={() => {
                    setOpenDatePicker(true)
                }} style={styles.date}>
                    <Text style={{ fontFamily: '500' }}>
                        Date: {getDateAndTime(date)}
                    </Text>
                </TouchableOpacity>

                {
                    openDatePicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={"date"}
                            is24Hour={true}
                            onChange={(event, date) => {
                                setDate(date)
                                setOpenDatePicker(false)
                            }}

                        />
                    )
                }


                <Button mode='elevated' onPress={handleSubmit} style={styles.submitBtn} labelStyle={styles.submitBtnText} >
                    Submit
                </Button>



            </View>

            <Portal >
                <Modal visible={submitting} dismissable={false} style={styles.overlayContainer} contentContainerStyle={styles.overlayInner}>
                    <ActivityIndicator size={'large'} color='#7F3DFF' />
                </Modal>
            </Portal>

            <Portal >
                <Modal visible={error.trim().length > 0} dismissable={true} style={styles.overlayContainer} contentContainerStyle={[styles.overlayInner, styles.overlayInnerErr]} onDismiss={() => setError('')}>
                    <Text style={styles.overlayInnerErrText}>
                        {error}
                    </Text>
                </Modal>
            </Portal>



        </View>
    )
}

export default AddTransaction