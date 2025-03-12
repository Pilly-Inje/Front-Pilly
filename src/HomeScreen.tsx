import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);

    const toggleCheck1 = () => {
        setIsChecked1(prev => !prev); // 상태를 반전
    };
    const toggleCheck2 = () => {
        setIsChecked2(prev => !prev); // 상태를 반전
    };
    const toggleCheck3 = () => {
        setIsChecked3(prev => !prev); // 상태를 반전
    };



    return (
        <SafeAreaProvider style={{backgroundColor: 'white'}}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text>로고 들어갈 자리</Text>
                </View>

                <View style={styles.title}>
                    <Text style={styles.titleText}>오늘 약 복용하셨나요?</Text>
                </View>

                <View style={styles.checkBox}>
                    <View style={styles.checkBtn}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>09:00</Text>
                        <Text style={{color:'#0169CD', fontSize: 18}}>약 3개</Text>
                        <TouchableOpacity
                            style={[styles.button, isChecked1 ? styles.checkedButton : {}]}
                            onPress={toggleCheck1}
                        >
                            <Text style={[isChecked1 ? styles.checkedText : {}]}>
                                {isChecked1 ? '확인했어요' : '복용 확인'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.checkBox}>
                    <View style={styles.checkBtn}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>09:00</Text>
                        <Text style={{color:'#0169CD', fontSize: 18}}>약 3개</Text>
                        <TouchableOpacity
                            style={[styles.button, isChecked2 ? styles.checkedButton : {}]}
                            onPress={toggleCheck2}
                        >
                            <Text style={[isChecked2 ? styles.checkedText : {}]}>
                                {isChecked2 ? '확인했어요' : '복용 확인'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.checkBox}>
                    <View style={styles.checkBtn}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>09:00</Text>
                        <Text style={{color:'#0169CD', fontSize: 18}}>약 3개</Text>
                        <TouchableOpacity
                            style={[styles.button, isChecked3 ? styles.checkedButton : {}]}
                            onPress={toggleCheck3}
                        >
                            <Text style={[isChecked3 ? styles.checkedText : {}]}>
                                {isChecked3 ? '확인했어요' : '복용 확인'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.title}>
                    <Text style={styles.titleText}>간편한 약 관리</Text>
                </View>

                <View style={styles.boxContainer}>
                    <TouchableOpacity style={styles.manageBox}>
                        <View style={styles.manage}>
                            <Text>이미지</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: '5%'}}>처방전/약봉투</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: '3%'}}>촬영하기</Text>
                            <Text style={{fontSize: 12, marginTop: '6%'}}>사진 한 장으로 관리하기</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.manageBox}>
                        <View style={styles.manage}>
                            <Text>이미지</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: '5%'}}>직접 약 등록하기</Text>
                            <Text style={{fontSize: 12, marginTop: '5%'}}>비타민/영양제 관리하기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.checkedBox}>
                    <View style={styles.checkedBtn}>
                        <Text>이미지</Text>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: '1%'}}>등록한 처방전 확인하기</Text>
                            <Text style={{fontSize: 12, marginTop: '3%'}}>직접 등록한 처방전/약봉투 확인하기</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'white',
       marginHorizontal: '8%',
   },
    header: {
        flex: 1,
        backgroundColor: 'pink'
    },
    title: {
        flex: 0.8,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    checkBox: {
        flex: 0.6,
        backgroundColor: '#F2F8FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '3%',
        borderRadius: 10,
        elevation: 5,
    },
    checkBtn: {
        justifyContent: 'center',
        flexDirection: 'row',
        gap: '16%',
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderColor: '#0169CD',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 5,
    },
    checkedButton: {
        backgroundColor: '#0169CD',
    },
    checkedText: {
        color: 'white',
    },
    boxContainer: {
       flex: 2,
       flexDirection: 'row',
        justifyContent: 'space-between',
    },
    manageBox: {
        width: '47%',
        backgroundColor: '#F2F8FF',
        marginVertical: '3%',
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'column',
    },
    manage: {
        marginLeft: '5%',
        marginVertical: '5%',
    },
    checkedBox: {
        flex: 1,
        backgroundColor: '#F2F8FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '3%',
        borderRadius: 10,
        elevation: 5,
    },
    checkedBtn: {
        justifyContent: 'center',
        flexDirection: 'row',
        gap: '16%',
    },
});

export default HomeScreen;
