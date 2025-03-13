import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen({navigation}: {navigation: any}) {
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./assets/logo.png')}
            style={{width: 60, height: 60}}
          />
          <TouchableOpacity>
            <Image
              source={require('./assets/profile.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>오늘 약 복용하셨나요?</Text>
        </View>

        <View style={styles.checkContainer}>
          <View style={styles.checkBox}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>09:00</Text>
            <Text style={{color: '#0169CD', fontSize: 18}}>약 3개</Text>
            <TouchableOpacity
              style={[styles.button, isChecked1 ? styles.checkedButton : {}]}
              onPress={toggleCheck1}>
              <Text style={[isChecked1 ? styles.checkedText : {}]}>
                {isChecked1 ? '확인했어요' : '복용 확인'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkBox}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>09:00</Text>
            <Text style={{color: '#0169CD', fontSize: 18}}>약 3개</Text>
            <TouchableOpacity
              style={[styles.button, isChecked2 ? styles.checkedButton : {}]}
              onPress={toggleCheck2}>
              <Text style={[isChecked2 ? styles.checkedText : {}]}>
                {isChecked2 ? '확인했어요' : '복용 확인'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkBox}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>09:00</Text>
            <Text style={{color: '#0169CD', fontSize: 18}}>약 3개</Text>
            <TouchableOpacity
              style={[styles.button, isChecked3 ? styles.checkedButton : {}]}
              onPress={toggleCheck3}>
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
              <Image
                source={require('./assets/scan.png')}
                style={{width: 60, height: 60, marginTop: '10%'}}
              />
              <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: '5%'}}>
                처방전/약봉투
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: '2%'}}>
                촬영하기
              </Text>
              <Text style={{fontSize: 12, marginTop: '6%'}}>
                사진 한 장으로 관리하기
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.manageBox}>
            <View style={styles.manage}>
              <Image
                source={require('./assets/medicine.png')}
                style={{width: 60, height: 60, marginTop: '10%'}}
              />
              <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: '5%'}}>
                직접 약 등록하기
              </Text>
              <Text style={{fontSize: 12, marginTop: '5%'}}>
                비타민/영양제 관리하기
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.checkedBox}>
          <View style={styles.checkedBtn}>
            <Image
              source={require('./assets/check.png')}
              style={{width: 60, height: 60}}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: '1%'}}>
                등록한 처방전 확인하기
              </Text>
              <Text style={{fontSize: 12, marginTop: '3%'}}>
                직접 등록한 처방전/약봉투 확인하기
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.tapContainer}>
          <View style={styles.tapBox}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('./assets/home.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Image
                source={require('./assets/search.png')}
                style={{width: 28, height: 28}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
              <Image
                source={require('./assets/map.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./assets/tapmedicine.png')}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  checkBox: {
    backgroundColor: '#F2F8FF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '30%',
    alignItems: 'center',
    marginVertical: '2%',
    borderRadius: 10,
    padding: 5,
    elevation: 4,
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
    borderRadius: 5, // 둥글게 만들기
  },

  checkedText: {
    color: 'white',
  },
  boxContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  manageBox: {
    width: '46%',
    backgroundColor: '#F2F8FF',
    marginBottom: '3%',
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'column',
  },
  manage: {
    marginLeft: '10%',
    marginVertical: '5%',
  },
  checkedBox: {
    flex: 1.5,
    backgroundColor: '#F2F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '3%',
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: '5%',
    marginBottom: '20%',
  },
  checkedBtn: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '15%',
  },
  tapContainer: {
    position: 'absolute',
    bottom: '3%',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#d9d9d9',
    paddingVertical: 10,
  },
  tapBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
  },
});

export default HomeScreen;
